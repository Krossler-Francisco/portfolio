import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';

// Função para criar a tabela messages
async function createTable() {
  const db = await open({
    filename: path.join(process.cwd(), 'db.sqlite'), // Local do banco de dados
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      message TEXT NOT NULL,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  await db.close();
}

createTable().catch(console.error);
