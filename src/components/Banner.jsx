import { useState, useEffect } from 'react';

export default function Banner() {
  const [variant, setVariant] = useState('');

  useEffect(() => {
    const randomChoice = Math.random() < 0.5 ? 'A' : 'B';
    setVariant(randomChoice);
  }, []);

  if (!variant) return null;

  const isVariantA = variant === 'A';
  const bgColor = isVariantA ? '#0043CE' : '#FF7A00';
  const ctaText = isVariantA ? 'Solicita ahora' : 'Aplica ya';

  // Función que captura el evento para GTM
  const handleCTAClick = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'experiment_event',
      experimentId: 'bcp_banner_test_v1',
      action: 'click_cta',
      variant: variant,
      label: ctaText
    });
    
    console.log("Evento enviado al dataLayer:", window.dataLayer);
  };

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
        onClick={handleCTAClick}
        style={{
          padding: '12px 24px',
          fontSize: '18px',
          fontWeight: 'bold',
          cursor: 'pointer',
          marginTop: '15px',
          border: 'none',
          borderRadius: '4px',
          backgroundColor: '#ffffff',
          color: bgColor
        }}
      >
        {ctaText}
      </button>
    </section>
  );
}