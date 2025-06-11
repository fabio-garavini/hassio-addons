# 0.28.3

- Skip sending empty `Range` header when fetching blobs from S3 ([#6914](https://github.com/pocketbase/pocketbase/pull/6914)).

- Updated Go deps and particularly `modernc.org/sqlite` to 1.38.0 (SQLite 3.50.1).

- Bumped GitHub action min Go version to 1.23.10 as it comes with some [minor security `net/http` fixes](https://github.com/golang/go/issues?q=milestone%3AGo1.23.10+label%3ACherryPickApproved).