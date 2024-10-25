import { open } from 'sqlite';
import sqlite3 from 'sqlite3';
import path from 'path';

// Função para abrir a conexão com o banco de dados
const dbPromise = open({
  filename: path.join(process.cwd(), 'db.sqlite'), // Local do banco de dados
  driver: sqlite3.Database,
});

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const db = await dbPromise; // Aguarda a conexão com o banco de dados

      // Consulta as mensagens do banco de dados
      const rows = await db.all('SELECT * FROM messages');

      // Retorna as mensagens em formato JSON
      res.status(200).json(rows);
    } catch (err) {
      console.error(err.message);
      return res.status(500).json({ error: 'Erro ao buscar mensagens.' });
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
}
