## 🚀 **Immich Power Tools** 0.20.0

## ✨ What's Changed
* **Duplicate Finder Enhancements:** 
  * Improved album handling & transfer by @bbrks (#231) 
  * Show file path in duplicate finder by @bbrks (#230)
  * Add search and album filters to bulk duplicate finder by @bbrks (#232)
* **Under the Hood:**
  * Migrated changes by @sai80082 (#233)
  * Refactored release process to be tag-based by @sai80082  (#236)

## 🤖 AI Configuration Updates
To use **any OpenAI-compatible endpoint**, update your `.env`. The old Gemini configuration is no longer needed.

```env
# ──────────────────────────────────────────
# 🤖 AI / Query Parsing Configuration
# ──────────────────────────────────────────
AI_API_KEY="" # API key for your OpenAI-compatible provider
AI_BASE_URL="https://api.openai.com/v1" # Base URL for OpenAI-compatible API
AI_MODEL="gpt-4o-mini" # Model used for parsing search queries
```

## New Contributors
* @bbrks made their first contribution in https://github.com/immich-power-tools/immich-power-tools/pull/231

**Full Changelog**: https://github.com/immich-power-tools/immich-power-tools/compare/v0.19.1...v0.20.0