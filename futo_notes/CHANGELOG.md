# v0.6.0 — authoritative blob ledger, Mutation IDs, batch blob fetch

Blob lifetime is now tracked by an authoritative blob_ledger (staged/claimed/
retained/purgeable), replacing the orphaned_blobs table. Object mutations are
serialized collection-first in a single transaction that claims the staged
blob, advances the cursor, and records the outcome.

Optional client-supplied Mutation IDs make create/update/delete retry-safe for
30 days; advertised via mutation_ids on the capability endpoint.

Adds POST /api/blobs/batch for framed multi-blob fetch, and single-round-trip
blob-object routes.

Restores one vault per account, enforced in the route rather than by a UNIQUE
constraint so existing multi-collection accounts keep their data.

Sessions no longer slide: they hard-expire 7 days from issuance and return
code=invalid_session so clients can silently reauthenticate.

Password mode accepts a plaintext FUTO_NOTES_PASSWORD as an alternative to
FUTO_NOTES_PASSWORD_HASH.
