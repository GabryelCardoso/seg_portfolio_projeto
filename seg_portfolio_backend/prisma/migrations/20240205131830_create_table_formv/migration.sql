-- CreateTable
CREATE TABLE "form-v" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "situacao_v" TEXT NOT NULL,
    "modelo_v" TEXT NOT NULL,
    "ano_v" INTEGER NOT NULL,
    "fabricante_v" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "form-v_pkey" PRIMARY KEY ("id")
);
