// api/messages.js
import db from './database.js';

export default function handler(req, res) {
  if (req.method === 'GET') {
    // Consulta as mensagens do banco de dados
    db.all('SELECT * FROM messages', [], (err, rows) => {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ error: 'Erro ao buscar mensagens.' });
      }
      
      // Retorna as mensagens em formato JSON
      res.status(200).json(rows);
    });
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
}
