import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';

// Abre a conexão com o banco de dados SQLite
const dbPromise = open({
  filename: path.join(process.cwd(), 'db.sqlite'), // Local do banco de dados
  driver: sqlite3.Database,
});

export default async function handler(req, res) {
  console.log('Método:', req.method); // Log do método

  // Método POST para receber dados do formulário
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Verifica se todos os campos foram preenchidos
    if (!name || !email || !message) {
      console.log('Erro: Campos obrigatórios não preenchidos');
      return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    try {
      const db = await dbPromise; // Aguarda a conexão com o banco de dados
      // Insere a nova mensagem na tabela
      await db.run('INSERT INTO messages (name, email, message) VALUES (?, ?, ?)', [name, email, message]);

      const responseMessage = { message: 'Formulário enviado com sucesso!' };
      console.log('Resposta:', responseMessage);
      return res.status(201).json(responseMessage);
    } catch (error) {
      console.error('Erro ao salvar na base de dados:', error);
      return res.status(500).json({ error: 'Erro ao salvar a mensagem.' });
    }
  } else {
    console.log('Método não permitido');
    return res.status(405).json({ error: 'Método não permitido' });
  }
}
