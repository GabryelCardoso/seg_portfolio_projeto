/*
  Warnings:

  - Added the required column `altura` to the `form-conv` table without a default value. This is not possible if the table is not empty.
  - Added the required column `peso` to the `form-conv` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "form-conv" ADD COLUMN     "altura" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "peso" DOUBLE PRECISION NOT NULL;
