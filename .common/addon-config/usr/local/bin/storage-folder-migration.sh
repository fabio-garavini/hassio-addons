#!/usr/bin/with-contenv bashio
# shellcheck shell=bash

set -e

source_path="$1"
dest_path="$2"

# Function to check available disk space
check_disk_space() {
  local source_dir="$1"
  local dest_dir="$2"

  # Get source directory size in KB
  local source_size=$(du -sk "$source_dir" | cut -f1)

  # Get available space in destination in KB
  local dest_available=$(df -k "$dest_dir" | tail -1 | awk '{print $4}')

  # Add 10% buffer for safety
  local required_space=$((source_size + source_size / 10))

  bashio::log.info "Source size: $(numfmt --to=iec-i --suffix=B $((source_size * 1024)))"
  bashio::log.info "Available space: $(numfmt --to=iec-i --suffix=B $((dest_available * 1024)))"
  bashio::log.info "Required space (with buffer): $(numfmt --to=iec-i --suffix=B $((required_space * 1024)))"

  if [ "$required_space" -gt "$dest_available" ]; then
    return 1
  fi

  return 0
}

# Function to perform safe rsync migration
perform_migration() {
  local source_dir="$1"
  local dest_dir="$2"

  bashio::log.info "Starting migration test"

  # First, do a dry run to check for potential issues
  if ! rsync -ah --dry-run --partial "${rsync_exclusions[@]}" "$source_dir/" "$dest_dir/"; then
    bashio::log.error "Migration test failed. Aborting"
    return 1
  fi

  # Perform actual migration with progress and error handling
  if ! rsync -ah --progress --remove-source-files --partial "${rsync_exclusions[@]}" "$source_dir/" "$dest_dir/"; then
    bashio::log.error ""
    return 1
  fi

  bashio::log.info "File migration completed"

  # Clean up empty directories from source
  bashio::log.info "Cleaning up empty directories..."
  if [[ "$dest_dir" == "$source_dir"/* ]]; then
    find "$source_dir" -mindepth 1 -depth '(' "${find_exclusions[@]}" -o -type d -empty ')' -a -not '(' -wholename "$dest_dir" -a -wholename "$dest_dir/*" ')' -exec rm -rf {} \; >/dev/null 2>&1 || true
  else
    find "$source_dir" -maxdepth 1 -depth -exec rm -rvf {} \; >/dev/null 2>&1 || true
  fi
}


resolved_path=$(realpath -m "$dest_path" 2>/dev/null)

# Check if the path resolution failed
if [[ -z "$resolved_path" ]]; then
  bashio::log.error "-----------------------------------------------------------------------------------------------------------------------"
  bashio::log.error "[$dest_path] is not a valid path. Please remove any special character"
  bashio::log.error "-----------------------------------------------------------------------------------------------------------------------"
  bashio::log.error "Read the DOCUMENTATION page for more information"
  bashio::log.error "Ask for help: https://github.com/fabio-garavini/hassio-addons/issues"
  bashio::addon.stop
fi

# If the resolved path differs, update the environment
[[ "$dest_path" != "$resolved_path" ]] && dest_path="$resolved_path"

valid_paths=("/media/" "/share/" "/config/library")

# Check if the dest_path starts with a valid path
valid=false
for path in "${valid_paths[@]}"; do
  if [[ "$path" == */ ]]; then
    # Match only subdirectories (not equal)
    if [[ "$dest_path" == "$path"* ]] && [[ "$dest_path" != "$path" ]]; then
      valid=true
      break
    fi
  else
    # Exact match only
    if [[ "$dest_path" == "$path" ]]; then
      valid=true
      break
    fi
  fi
done

while read -r _ mountpoint _; do
  [[ "$mountpoint" != /mnt/* ]] && continue

  if [[ "$dest_path" == "$mountpoint" ]] || [[ "$dest_path" == "$mountpoint/"* ]]; then
    valid=true
    break
  fi
done < /proc/mounts

if ! $valid; then
  bashio::log.error "-----------------------------------------------------------------------------------------------------------------------"
  bashio::log.error "[$dest_path] is not a supported folder path! It must be under one of these paths [${valid_paths[*]}]"
  bashio::log.error "-----------------------------------------------------------------------------------------------------------------------"
  bashio::log.error "Read the DOCUMENTATION page for more information"
  bashio::log.error "Ask for help: https://github.com/fabio-garavini/hassio-addons/issues"
  bashio::addon.stop
fi

if [[ "$source_path" == "$dest_path" ]]; then
  # No migration needed
  bashio::log.debug "Skipping folder migration (same folder)"
  exit 0
fi

if [[ "$source_path" == "$dest_path"/* ]]; then
  bashio::log.error "Moving a directory to its parent directory is not supported"
  bashio::addon.stop
  exit 1
fi

bashio::log.info "Start folder migration..."

# Exclude common system folders from search and transfer
excludes=(
    "lost+found"
    ".Trash*"
    ".zfs"
    ".cache"
    ".DS_Store"
    "System Volume Information"
    "\$RECYCLE.BIN"
)

# Build --exclude options
rsync_exclusions=()
find_exclusions=()
for i in "${!excludes[@]}"; do
  item="${excludes[$i]}"

  rsync_exclusions+=("--exclude=$item")
  find_exclusions+=(-name "$item")

  # Add -o only if not last element
  if (( i < ${#excludes[@]} - 1 )); then
    find_exclusions+=(-o)
  fi
done

# Ensure destination directory exists for disk check
[[ ! -d "$dest_path" ]] && mkdir -p "$dest_path"

if [ -n "$(find "$dest_path" -midepth 1 -not \( "${find_exclusions[@]}" \) -type f -print -quit)" ]; then
  bashio::log.error "-----------------------------------------------------------------------------------------------------------------------"
  bashio::log.error "Destination folder is not empty!"
  bashio::log.error "-----------------------------------------------------------------------------------------------------------------------"
  bashio::addon.stop
  exit 1
fi

# Check disk space before attempting migration
if ! check_disk_space "$source_path" "$dest_path"; then
  bashio::log.error "-----------------------------------------------------------------------------------------------------------------------"
  bashio::log.error "Insufficient disk space for migration!"
  bashio::log.error "-----------------------------------------------------------------------------------------------------------------------"
  bashio::log.error "Ask for help: https://github.com/fabio-garavini/hassio-addons/issues"
  bashio::addon.stop
  exit 1
fi

# Attempt migration
if ! perform_migration "$source_path" "$dest_path"; then
  bashio::log.error "Migration failed"
  bashio::addon.stop
  exit 1
fi

bashio::log.info "Folder migration complete"