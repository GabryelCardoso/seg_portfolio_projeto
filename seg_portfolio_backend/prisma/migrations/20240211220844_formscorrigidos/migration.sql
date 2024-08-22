/*
  Warnings:

  - Changed the type of `valor_credito` on the `form-cons` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `valor_parcela` on the `form-cons` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "form-cons" DROP COLUMN "valor_credito",
ADD COLUMN     "valor_credito" INTEGER NOT NULL,
DROP COLUMN "valor_parcela",
ADD COLUMN     "valor_parcela" INTEGER NOT NULL;
