-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "user" TEXT NOT NULL,
    "Senha" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);
