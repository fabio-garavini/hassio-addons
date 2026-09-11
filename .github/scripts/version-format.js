const PLACEHOLDER_REGEX = /\{\{(\w+)(?:\|([^}]*))?\}\}/g;

/**
 * Formats an input version string against a regex with named capture groups,
 * rendering the template placeholders {{group}} (or {{group|default}} when
 * the group did not participate in the match).
 * Values not provided by the regex (e.g. {{app_build}}, the per-app build
 * counter) are resolved from the optional `extra` map, which takes
 * precedence over defaults.
 * Returns null when the input does not match the regex; throws when a
 * placeholder resolves to nothing and no default is provided.
 */
function formatVersion(input, regex, template, extra = {}) {
  const match = input.match(regex);
  if (!match) return null;

  return template.replace(PLACEHOLDER_REGEX, (_, name, defaultValue) => {
    const value = match.groups?.[name] ?? extra[name];
    if (value !== undefined) return value;
    if (defaultValue !== undefined) return defaultValue;
    throw new Error(
      `Placeholder "${name}" did not resolve for input "${input}" and no default is specified in template "${template}"`
    );
  });
}

module.exports = { formatVersion };
