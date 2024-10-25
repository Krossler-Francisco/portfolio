import db from './database.js';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    // Insere a mensagem no banco de dados
    db.run(
      'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)',
      [name, email, message],
      function (err) {
        if (err) {
          console.error(err.message);
          return res.status(500).json({ error: 'Erro ao salvar a mensagem.' });
        }

        res.status(201).json({ message: 'Formulário enviado com sucesso!', id: this.lastID });
      }
    );
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
}