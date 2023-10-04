/*
  Warnings:

  - You are about to drop the column `nomeDent` on the `Dentista` table. All the data in the column will be lost.
  - Added the required column `nome` to the `Dentista` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Agenda" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data" DATETIME NOT NULL,
    "nomePcnt" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Dentista" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cro" INTEGER NOT NULL
);
INSERT INTO "new_Dentista" ("cro", "id") SELECT "cro", "id" FROM "Dentista";
DROP TABLE "Dentista";
ALTER TABLE "new_Dentista" RENAME TO "Dentista";
CREATE UNIQUE INDEX "Dentista_nome_key" ON "Dentista"("nome");
CREATE UNIQUE INDEX "Dentista_cro_key" ON "Dentista"("cro");
CREATE TABLE "new_Consulta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data" DATETIME NOT NULL,
    "realizada" BOOLEAN NOT NULL DEFAULT false,
    "nomePcnt" TEXT NOT NULL,
    "nomeDent" TEXT NOT NULL,
    CONSTRAINT "Consulta_nomePcnt_fkey" FOREIGN KEY ("nomePcnt") REFERENCES "Paciente" ("nome") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Consulta_nomeDent_fkey" FOREIGN KEY ("nomeDent") REFERENCES "Dentista" ("nome") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Consulta" ("data", "id", "nomeDent", "nomePcnt", "realizada") SELECT "data", "id", "nomeDent", "nomePcnt", "realizada" FROM "Consulta";
DROP TABLE "Consulta";
ALTER TABLE "new_Consulta" RENAME TO "Consulta";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
