import * as SQLite from 'expo-sqlite';

export async function criarTabelas(db: SQLite.SQLiteDatabase) {
  await db.execAsync(`
    PRAGMA journal_mode = WAL;

    CREATE TABLE IF NOT EXISTS medicamento (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      dosagem TEXT,
      quantidade INTEGER,
      estoque INTEGER,
      frequencia TEXT,
      ativo INTEGER NOT NULL DEFAULT 1
    );

    CREATE TABLE IF NOT EXISTS horario_medicamento (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      medicamentoId INTEGER NOT NULL,
      horario TEXT NOT NULL,
      diasSemana TEXT,
      FOREIGN KEY (medicamentoId) REFERENCES medicamento (id)
    );

    CREATE TABLE IF NOT EXISTS registro_dose (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      medicamentoId INTEGER NOT NULL,
      horarioId INTEGER NOT NULL,
      dataHora TEXT NOT NULL,
      status TEXT NOT NULL CHECK(status IN ('tomada', 'atrasada', 'nao_administrada', 'pendente')),
      FOREIGN KEY (medicamentoId) REFERENCES medicamento (id),
      FOREIGN KEY (horarioId) REFERENCES horario_medicamento (id)
    );
  `);
}