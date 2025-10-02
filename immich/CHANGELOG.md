# v2.0.0 - Stable Release

Welcome to the release `v2.0.0` of Immich. This release marks the first stable version of Immich. You can read our announcement blog post [here](https://github.com/immich-app/immich/discussions/22546) to learn what stable means for Immich, what you can expect from a stable version, along with our future plans. Of course, it wouldn't be complete without a few surprises.

To update to this version, no special steps are required. Compose pull and compose up, and you are now on `v2.0.0`. Additionally, there are a few noteworthy items that we have been working on in preparation for the stable release:

* New homepage
* New API documentation
* New community metrics

## New homepage

The https://immich.app/ website has been recently updated. It’s been rewritten with our very own UI component library, and includes a [blog](https://immich.app/blog) with a few initial posts, including one about [the new mobile sync implementation](https://immich.app/blog/sync-v2). Existing documentation has been moved to https://docs.immich.app/.

<img width="800" alt="image" src="https://github.com/user-attachments/assets/911574d2-c8a7-46c6-a6f9-2a00d06baf3e" />


## Better API documentation

We’re also happy to announce a new version of our API documentation, which is now live at https://api.immich.app/. The new docs include more information about authentication, authorization & permissions, a command palette for quick navigation (press `/` or `ctrl+k`), and a built-in method to view live results.


<img width="800" alt="image" src="https://github.com/user-attachments/assets/910a3539-cee2-417e-b1f9-77cb0e68e2b9" />


## New community metrics

The <https://data.immich.app/> website has also been updated to include new community metrics that show member growth on our [subreddit](https://www.reddit.com/r/immich/) and [discord server](https://discord.immich.app/).


<img width="800"  alt="image" src="https://github.com/user-attachments/assets/8fc418ef-cf26-4ad3-b9a6-56bdc07eb97e" />

## What's Changed

### 🐛 Bug fixes

* fix: show un-hashed remainder assets by @shenlong-tanwen in <https://github.com/immich-app/immich/pull/22492>
* fix(server): Revert update libmimalloc path (#22345) by @alextran1502 in <https://github.com/immich-app/immich/pull/22526>
* fix: missing email button padding by @Funk66 in <https://github.com/immich-app/immich/pull/22529>


**Full Changelog**: <https://github.com/immich-app/immich/compare/v1.144.1...v2.0.0>