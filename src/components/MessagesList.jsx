import { useEffect, useState } from 'react';
import './MessagesList.css'; // Importa o CSS externo

const MessagesList = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://krossler-portfolio.vercel.app/api/messages')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Erro ao buscar mensagens');
        }
        return res.json();
      })
      .then((data) => {
        setMessages(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loading">Carregando mensagens...</p>;
  if (error) return <p className="error">Erro: {error}</p>;

  return (
    <div className="messages-container">
      <h2 className="messages-title">Mensagens Recebidas</h2>
      <ul className="messages-list">
        {messages.map((msg) => (
          <li key={msg._id} className="message-card">
            <p><strong>Nome:</strong> {msg.name}</p>
            <p><strong>Email:</strong> {msg.email}</p>
            <p><strong>Mensagem:</strong> {msg.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessagesList;
