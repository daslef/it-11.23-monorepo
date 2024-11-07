/*
  Warnings:

  - You are about to alter the column `created_at` on the `users_table` table. The data in that column could be lost. The data in that column will be cast from `Int` to `DateTime`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users_table" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "age" INTEGER,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_users_table" ("age", "created_at", "first_name", "id", "last_name") SELECT "age", coalesce("created_at", CURRENT_TIMESTAMP) AS "created_at", "first_name", "id", "last_name" FROM "users_table";
DROP TABLE "users_table";
ALTER TABLE "new_users_table" RENAME TO "users_table";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
