# Home Assistant app: Grimoire 🧙 by Fabio Garavini

Bookmark manager for the wizards 🧙

## Installation

To install Grimoire Addon, follow these steps:

1. Click **install** in the Grimoire addon's page
1. **Open Web UI**
1. Create a new admin user

## Upgrading from Grimoire 0.4.4 or 0.5

Install the update normally. On the first startup, the add-on automatically imports bookmarks, categories, tags, notes, and available local media for every legacy user into the single Grimoire 1.x library. Duplicate URLs are merged, and no manual migration command is required.

The first startup can take longer for a large library. The original `db.sqlite` and `user-uploads` directory are preserved as a recovery copy. Legacy user accounts and passwords are not imported because Grimoire 1.x is single-user.
