import { Low, JSONFile } from 'lowdb';
import path from 'path';

const file = path.join(process.cwd(), 'db.json');
const adapter = new JSONFile(file);
const db = new Low(adapter);

export default async function handler(req, res) {
  console.log('Método:', req.method); // Log do método
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      console.log('Erro: Campos obrigatórios não preenchidos');
      return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    await db.read();
    db.data ||= { messages: [] };
    db.data.messages.push({ id: Date.now(), name, email, message });
    await db.write();

    const responseMessage = { message: 'Formulário enviado com sucesso!' };
    console.log('Resposta:', responseMessage); // Log da resposta
    return res.status(201).json(responseMessage);
  } else {
    console.log('Método não permitido');
    return res.status(405).json({ error: 'Método não permitido' });
  }
}