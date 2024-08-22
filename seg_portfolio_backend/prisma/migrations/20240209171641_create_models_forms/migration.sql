/*
  Warnings:

  - You are about to drop the column `name` on the `form-v` table. All the data in the column will be lost.
  - Added the required column `nome` to the `form-v` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "form-v" DROP COLUMN "name",
ADD COLUMN     "nome" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "form-cons" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "valor_credito" TEXT NOT NULL,
    "valor_parcela" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "form-cons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "form-conv" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "localidade" TEXT NOT NULL,
    "convenio" BOOLEAN NOT NULL,
    "hospital_pref" BOOLEAN NOT NULL,
    "nome_hospital" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "pessoa" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "form-conv_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "form-seguro" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "peso" DOUBLE PRECISION NOT NULL,
    "altura" DOUBLE PRECISION NOT NULL,
    "profissao" INTEGER NOT NULL,
    "renda" TEXT NOT NULL,
    "fumante" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "form-seguro_pkey" PRIMARY KEY ("id")
);
