import mongoose from 'mongoose';

// Conexão com o MongoDB
const mongoUri = 'mongodb+srv://krossler:krossler123@react-fullstack.tvrikmx.mongodb.net/?retryWrites=true&w=majority&appName=react-fullstack';

// Define o modelo da mensagem
const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true }
});

const Message = mongoose.model('Message', messageSchema);

// Função para conectar ao MongoDB
async function connectToDatabase() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
}

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      await connectToDatabase(); // Conecta ao MongoDB

      // Consulta as mensagens do banco de dados
      const rows = await Message.find({}); // Recupera todas as mensagens

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
