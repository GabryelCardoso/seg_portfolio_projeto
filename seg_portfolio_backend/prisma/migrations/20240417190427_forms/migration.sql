/*
  Warnings:

  - Changed the type of `valor_credito` on the `form-cons` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `valor_parcela` on the `form-cons` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `idade` on the `form-conv` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `peso` on the `form-seguro` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `altura` on the `form-seguro` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `renda` on the `form-seguro` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "form-cons" DROP COLUMN "valor_credito",
ADD COLUMN     "valor_credito" DOUBLE PRECISION NOT NULL,
DROP COLUMN "valor_parcela",
ADD COLUMN     "valor_parcela" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "form-conv" DROP COLUMN "idade",
ADD COLUMN     "idade" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "form-seguro" DROP COLUMN "peso",
ADD COLUMN     "peso" DOUBLE PRECISION NOT NULL,
DROP COLUMN "altura",
ADD COLUMN     "altura" DOUBLE PRECISION NOT NULL,
DROP COLUMN "renda",
ADD COLUMN     "renda" DOUBLE PRECISION NOT NULL;
