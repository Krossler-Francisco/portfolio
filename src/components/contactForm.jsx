import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');
  
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const textResponse = await response.text(); // Capture a resposta como texto
      console.log('Resposta do servidor:', textResponse); // Log da resposta como texto
  
      // Verifique se a resposta está ok
      if (!response.ok) {
        const errorData = JSON.parse(textResponse); // Tente analisar o JSON
        throw new Error(errorData.error || 'Erro ao enviar o formulário.');
      }
  
      // Aqui, verifique se a resposta contém um corpo JSON
      const data = JSON.parse(textResponse); // Parse o JSON
      setSuccessMessage(data.message);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Erro:', error);
      setErrorMessage(error.message);
    }
  };

  return (
    <form className='form-contact' onSubmit={handleSubmit}>
      <div>
        <label>
          Nome:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Mensagem:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <button type="submit">Enviar</button>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </form>
  );
}
