/*
  Warnings:

  - Changed the type of `renda` on the `form-seguro` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "form-seguro" ALTER COLUMN "profissao" SET DATA TYPE TEXT,
DROP COLUMN "renda",
ADD COLUMN     "renda" DOUBLE PRECISION NOT NULL;
