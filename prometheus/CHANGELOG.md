This is a bugfix release for 3.13 LTS.

- [BUGFIX] TSDB: Fix the head-chunk cache returning samples from the wrong chunk, or spurious not-found errors, to range queries after head-chunk truncation. #19134
