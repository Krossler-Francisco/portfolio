import { Low, JSONFile } from 'lowdb';
import path from 'path';

const file = path.join(process.cwd(), 'db.json');
const adapter = new JSONFile(file);
const db = new Low(adapter);

export default async function handler(req, res) {
  if (req.method === 'GET') {
    await db.read();
    res.status(200).json(db.data.messages);
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
}