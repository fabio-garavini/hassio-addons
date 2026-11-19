import { Database } from "bun:sqlite";

const databasePath = "/config/db.sqlite";

if (await Bun.file(databasePath).exists()) {
  console.log("Legacy test database already exists");
  process.exit(0);
}

const db = new Database(databasePath, { create: true });

db.exec(`
  CREATE TABLE user (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    username TEXT NOT NULL,
    email TEXT NOT NULL,
    password_hash TEXT NOT NULL
  );
  CREATE TABLE category (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT NOT NULL,
    owner_id INTEGER NOT NULL
  );
  CREATE TABLE tag (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT NOT NULL,
    owner_id INTEGER NOT NULL
  );
  CREATE TABLE bookmark (
    id INTEGER PRIMARY KEY,
    url TEXT NOT NULL,
    domain TEXT NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    owner_id INTEGER NOT NULL,
    category_id INTEGER NOT NULL
  );
  CREATE TABLE bookmarks_to_tags (
    bookmark_id INTEGER NOT NULL,
    tag_id INTEGER NOT NULL
  );

  INSERT INTO user VALUES
    (1, 'Alice', 'alice', 'alice@example.invalid', 'unused'),
    (2, 'Bob', 'bob', 'bob@example.invalid', 'unused');
  INSERT INTO category (id, name, slug, owner_id) VALUES
    (1, 'Alice category', 'alice-category', 1),
    (2, 'Bob category', 'bob-category', 2);
  INSERT INTO tag (id, name, slug, owner_id) VALUES
    (1, 'Alice tag', 'alice-tag', 1),
    (2, 'Bob tag', 'bob-tag', 2);
  INSERT INTO bookmark (id, url, domain, title, description, owner_id, category_id) VALUES
    (1, 'https://alice.example.invalid/', 'alice.example.invalid', 'Alice bookmark', 'From Alice', 1, 1),
    (2, 'https://bob.example.invalid/', 'bob.example.invalid', 'Bob bookmark', 'From Bob', 2, 2);
  INSERT INTO bookmarks_to_tags VALUES (1, 1), (2, 2);
`);

db.close();
console.log("Created two-owner Grimoire 0.4.4 test database");
