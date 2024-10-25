import { Low, JSONFile } from 'lowdb';
import path from 'path';

const file = path.join(process.cwd(), 'db.json');
const adapter = new JSONFile(file);
const db = new Low(adapter);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    await db.read();
    db.data ||= { messages: [] };
    db.data.messages.push({ id: Date.now(), name, email, message });
    await db.write();

    res.status(201).json({ message: 'Formulário enviado com sucesso!' });
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
}