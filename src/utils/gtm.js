/**
 * Centraliza todos los eventos del experimento A/B
 * 
 * Eventos capturados:
 * - banner_impression: usuario ve una variante
 * - click_cta: usuario hace click en CTA del banner
 * - form_view: usuario ve el formulario
 * - form_submit: usuario envía el formulario
 */

const EXPERIMENT_CONFIG = {
  id: 'bcp_banner_test_v1',
  variants: ['A', 'B']
};

// Inicializa dataLayer si no existe
window.dataLayer = window.dataLayer || [];

/**
 * Registra un evento en GTM
 * @param {string} action - Tipo de acción (banner_impression, click_cta, form_submit)
 * @param {string} variant - Variante del experimento (A o B)
 * @param {string} label - Etiqueta descriptiva del evento
 * @param {object} metadata - Datos adicionales opcionales
 */
export const trackGTMEvent = (action, variant, label = '', metadata = {}) => {
  if (!window.dataLayer) {
    console.warn('❌ dataLayer no disponible');
    return;
  }

  const eventData = {
    event: 'experiment_event',
    experimentId: EXPERIMENT_CONFIG.id,
    action,
    variant,
    label,
    timestamp: new Date().toISOString(),
    ...metadata
  };

  // Log en console para debug (remove en producción)
  console.log(
    `📊 GTM Event: [${action}] Variante ${variant} - ${label}`,
    eventData
  );

  window.dataLayer.push(eventData);
};

/**
 * Trackea la impresión del banner (cuando se carga)
 */
export const trackBannerImpression = (variant) => {
  trackGTMEvent(
    'banner_impression',
    variant,
    `Usuario vio banner - Variante ${variant}`
  );
};

/**
 * Trackea click en el CTA
 */
export const trackBannerCTA = (variant, ctaText) => {
  trackGTMEvent(
    'click_cta',
    variant,
    ctaText,
    { buttonText: ctaText }
  );
};

/**
 * Trackea visualización del formulario
 */
export const trackFormView = (variant) => {
  trackGTMEvent(
    'form_view',
    variant,
    `Usuario scrolleó hasta el formulario`,
    { section: 'form' }
  );
};

/**
 * Trackea envío del formulario
 */
export const trackFormSubmit = (variant, email) => {
  trackGTMEvent(
    'form_submit',
    variant,
    `Envío de formulario completado`,
    { email_domain: email.split('@')[1] } // No guardamos email completo por privacidad
  );
};

/**
 * Debug: muestra todos los eventos capturados
 */
export const debugDataLayer = () => {
  console.table(window.dataLayer);
  console.log(
    `Total eventos capturados: ${window.dataLayer.length}`
  );
};