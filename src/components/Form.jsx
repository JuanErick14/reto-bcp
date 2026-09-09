import { useState } from 'react';

export default function Form() {
  // Estado para manejar los campos del formulario
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    alert("¡Formulario enviado con éxito!");
  };

  return (
    <section id="solicitar" style={{ padding: '60px 20px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
      <h3 style={{ color: '#002B6D', marginBottom: '20px' }}>Solicita tu Tarjeta Aquí</h3>
      
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input 
          type="text" 
          placeholder="Nombre completo" 
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          style={{ padding: '12px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        
        <input 
          type="email" 
          placeholder="Correo electrónico" 
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          style={{ padding: '12px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        
        <button 
          type="submit"
          style={{ padding: '12px', backgroundColor: '#002B6D', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}
        >
          Enviar Solicitud
        </button>
      </form>
    </section>
  );
}