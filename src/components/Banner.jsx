import { useState, useEffect } from 'react';
import { trackBannerImpression, trackBannerCTA } from '../utils/gtm';
import './Banner.css';

/**
 * COMPONENTE: Banner A/B Testing
 * 
 * HIPÓTESIS DEL EXPERIMENTO:
 * "Modificar el color y mensaje del CTA aumenta el CTR hacia el formulario"
 *
 * MÉTRICA PRINCIPAL: CTR
 * Fórmula: (clicks en CTA / impressiones del banner) × 100
 */

const BANNER_VARIANTS = {
  A: {
    bgColor: '#0043CE',
    ctaText: 'Solicita ahora',
    description: 'Variante azul - confianza corporativa',
    ariaLabel: 'Solicitar tarjeta de crédito BCP ahora'
  },
  B: {
    bgColor: '#FF7A00',
    ctaText: 'Aplica ya',
    description: 'Variante naranja - urgencia de acción',
    ariaLabel: 'Aplicar para tarjeta de crédito BCP ya'
  }
};

/**
 * Asigna variante aleatoria (50/50) y la persiste en la sesión
 * @returns {string} 'A' o 'B'
 */
const assignVariant = () => {
  // Verificar si ya existe asignación en sesión
  const stored = sessionStorage.getItem('bcp_ab_variant');
  if (stored && BANNER_VARIANTS[stored]) {
    return stored;
  }

  // Asignar nueva variante de forma aleatoria
  const newVariant = Math.random() < 0.5 ? 'A' : 'B';
  
  // Persistir en sessionStorage (dura toda la sesión del usuario)
  sessionStorage.setItem('bcp_ab_variant', newVariant);
  
  return newVariant;
};

export default function Banner() {
  const [variant, setVariant] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Ciclo de vida: Asigna variante e envia evento de impresión
   */
  useEffect(() => {
    const assignedVariant = assignVariant();
    setVariant(assignedVariant);
    setIsLoading(false);

    // Trackear que el usuario vio esta variante
    // EVENTO 1: banner_impression
    trackBannerImpression(assignedVariant);
  }, []);

  /**
   * Scrollea a formulario + envia evento a GTM
   */
  const handleCTAClick = () => {
    // EVENTO 2: click_cta
    trackBannerCTA(variant, BANNER_VARIANTS[variant].ctaText);

    // Scroll suave hacia formulario
    const formElement = document.getElementById('solicitar');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Fallback mientras carga
  if (isLoading || !variant) return null;

  const config = BANNER_VARIANTS[variant];

  return (
    <section
      className="banner"
      style={{ backgroundColor: config.bgColor }}
      role="banner"
      aria-label={`Banner principal - ${config.description}`}
    >
      <div className="banner-content">
        <h2 className="banner-title">
          Tu nueva Tarjeta de Crédito BCP te espera
        </h2>

        {/* Badge de variante */}
        {process.env.NODE_ENV === 'development' && (
          <p className="banner-variant-badge">
            🧪 Test: Variante {variant} ({config.description})
          </p>
        )}

        <p className="banner-subtitle">
          Acceso inmediato, beneficios exclusivos y experiencia digital premium
        </p>

        <button
          className="banner-cta"
          onClick={handleCTAClick}
          aria-label={config.ariaLabel}
          style={{ backgroundColor: '#ffffff', color: config.bgColor }}
        >
          {config.ctaText}
        </button>
      </div>

      {/* Indicador visual de variante para QA */}
      <div className="banner-qa-indicator">
        Variante: {variant}
      </div>
    </section>
  );
}