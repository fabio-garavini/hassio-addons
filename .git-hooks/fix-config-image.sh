#!/bin/bash
# fix-config-yaml.sh
# Ensures config.yaml has an 'image:' key. If missing, tries to uncomment '#image:'.

set -e

for FILE in "$@"; do
    echo "🔍 Checking $FILE ..."

    if grep -qE '^[[:space:]]*image:' "$FILE"; then
        echo "✅ $FILE already has an image key."
        continue
    fi

    if grep -qE '^[[:space:]]*#image:' "$FILE"; then
        echo "🛠  Found commented image key in $FILE, uncommenting..."
        # Uncomment only the first occurrence
        sed -i '0,/^[[:space:]]*#image:/s//image:/' "$FILE"
    fi

    # Check again if image key exists
    if ! grep -qE '^[[:space:]]*image:' "$FILE"; then
        echo "❌ Error: No 'image:' key found in $FILE."
        echo "Please ensure the config.yaml file contains an image field."
        exit 1
    fi

    # Re-add file to staging area so fix is included
    git add "$FILE"
    echo "✅ Fixed and re-staged $FILE."
done
