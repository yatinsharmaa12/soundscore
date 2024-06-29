/*
  Warnings:

  - You are about to drop the column `base` on the `Option` table. All the data in the column will be lost.
  - You are about to drop the column `mids` on the `Option` table. All the data in the column will be lost.
  - You are about to drop the column `review` on the `Option` table. All the data in the column will be lost.
  - You are about to drop the column `treble` on the `Option` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Option" DROP COLUMN "base",
DROP COLUMN "mids",
DROP COLUMN "review",
DROP COLUMN "treble";
