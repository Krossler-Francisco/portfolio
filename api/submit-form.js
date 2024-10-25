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
      await connectToDatabase(); // Conecta ao MongoDB

      // Insere a nova mensagem na coleção
      const newMessage = new Message({ name, email, message });
      await newMessage.save();

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
