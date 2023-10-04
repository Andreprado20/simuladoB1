-- CreateTable
CREATE TABLE "Paciente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "senha" INTEGER NOT NULL,
    "usuario" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Secretaria" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "rg" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Dentista" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomeDent" TEXT NOT NULL,
    "cro" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Consulta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data" DATETIME NOT NULL,
    "realizada" BOOLEAN NOT NULL DEFAULT false,
    "nomePcnt" TEXT NOT NULL,
    "nomeDent" TEXT NOT NULL,
    CONSTRAINT "Consulta_nomePcnt_fkey" FOREIGN KEY ("nomePcnt") REFERENCES "Paciente" ("nome") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Consulta_nomeDent_fkey" FOREIGN KEY ("nomeDent") REFERENCES "Dentista" ("nomeDent") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_nome_key" ON "Paciente"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_senha_key" ON "Paciente"("senha");

-- CreateIndex
CREATE UNIQUE INDEX "Secretaria_rg_key" ON "Secretaria"("rg");

-- CreateIndex
CREATE UNIQUE INDEX "Dentista_nomeDent_key" ON "Dentista"("nomeDent");

-- CreateIndex
CREATE UNIQUE INDEX "Dentista_cro_key" ON "Dentista"("cro");
