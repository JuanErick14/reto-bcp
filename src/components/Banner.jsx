import { useState, useEffect } from 'react';

export default function Banner() {
  // 1. Memoria del componente para guardar qué variante tocó
  const [variant, setVariant] = useState('');

  // 2. Esta función se ejecuta solo una vez al cargar la página
  useEffect(() => {
    // Math.random() genera un número entre 0 y 1. 
    // Si es menor a 0.5 (50% de probabilidad), asigna 'A', sino 'B'.
    const randomChoice = Math.random() < 0.5 ? 'A' : 'B';
    setVariant(randomChoice);
  }, []);

  // 3. Pausa visual: No mostramos nada milisegundos antes de que se decida la variante
  if (!variant) return null;

  // 4. Diccionario de variables de diseño según el reto
  const isVariantA = variant === 'A';
  const bgColor = isVariantA ? '#0043CE' : '#FF7A00'; // Azul vs Naranja
  const ctaText = isVariantA ? 'Solicita ahora' : 'Aplica ya';

  return (
    <section 
      style={{ 
        backgroundColor: bgColor, 
        padding: '60px 20px', 
        color: '#ffffff',
        textAlign: 'center' 
      }}
    >
      <h2>Tu nueva Tarjeta de Crédito BCP te espera</h2>
      <p>Estás visualizando la variante de prueba: {variant}</p>
      
      <button 
        style={{
          padding: '12px 24px',
          fontSize: '18px',
          fontWeight: 'bold',
          cursor: 'pointer',
          marginTop: '15px'
        }}
      >
        {ctaText}
      </button>
    </section>
  );
}