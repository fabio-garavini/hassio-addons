const fs = require('node:fs');

const filename = '/usr/src/medplum/packages/server/dist/index.js';
let source = fs.readFileSync(filename, 'utf8');

function replaceRequired(original, replacement) {
  if (source.includes(replacement)) {
    return;
  }
  const parts = source.split(original);
  if (parts.length !== 2) {
    throw new Error(`Unable to patch Medplum storage verification: ${original}`);
  }
  source = parts.join(replacement);
}

replaceRequired(
  'new URL(req.originalUrl, `${req.protocol}://${req.get("host")}`)',
  'new URL((req.get("X-Forwarded-Prefix") ?? "") + req.originalUrl, `${req.protocol}://${req.get("X-Forwarded-Host") ?? req.get("host")}`)'
);
replaceRequired(
  'originalUrl.pathname !== req.baseUrl + req.path',
  'originalUrl.pathname !== (req.get("X-Forwarded-Prefix") ?? "") + req.baseUrl + req.path'
);
replaceRequired(
  'ctx ??= unauthenticatedCtx;\n  requestContextStore.run(ctx, () => next());',
  'ctx ??= unauthenticatedCtx;\n  ctx.request = req;\n  requestContextStore.run(ctx, () => next());'
);
replaceRequired(
  'async function generatePresignedUrl(binary, opts) {\n  const config = getConfig();\n  const storageBaseUrl = config.storageBaseUrl;',
  'async function generatePresignedUrl(binary, opts) {\n  const config = getConfig();\n  const req = requestContextStore.getStore()?.request;\n  const storageBaseUrl = req\n    ? concatUrls4(`${req.protocol}://${req.get("X-Forwarded-Host") ?? req.get("host")}${req.get("X-Forwarded-Prefix") ?? ""}`, "storage/")\n    : config.storageBaseUrl;'
);

fs.writeFileSync(filename, source);
console.log('Medplum request-aware ingress storage support is ready.');
