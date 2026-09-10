import { useState, useEffect } from 'react';
import { trackFormView, trackFormSubmit } from '../utils/gtm';
import './Form.css';

/**
 * COMPONENTE: Formulario de Solicitud - Estilo BCP
 * 
 * Responsabilidades:
 * 1. Capturar datos básicos (nombre, email)
 * 2. Validar información en tiempo real
 * 3. Trackear evento de conversión (form_submit)
 * 4. Mostrar confirmación con animación
 * 5. Aceptar términos y condiciones
 * 
 * Tracking:
 * - form_view: cuando usuario scrollea a esta sección
 * - form_submit: cuando completa el formulario
 */

const FORM_CONFIG = {
  fields: {
    name: {
      label: 'Nombre completo',
      placeholder: 'Juan Pérez',
      type: 'text',
      required: true,
      validation: (value) => value.trim().length >= 3,
      error: 'El nombre debe tener al menos 3 caracteres',
      icon: '👤'
    },
    email: {
      label: 'Correo electrónico',
      placeholder: 'juan.perez@example.com',
      type: 'email',
      required: true,
      validation: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      error: 'Correo electrónico inválido',
      icon: '📧'
    }
  }
};

export default function Form() {
  const [formData, setFormData] = useState({ name: '', email: ''});
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [variant, setVariant] = useState('');

  /**
   * Lifecycle: Obtén variante e inicia tracking
   */
  useEffect(() => {
    const currentVariant = sessionStorage.getItem('bcp_ab_variant') || 'unknown';
    setVariant(currentVariant);

    const timer = setTimeout(() => {
      trackFormView(currentVariant);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  /**
   * Valida un campo individual
   */
  const validateField = (fieldName, value) => {
    const field = FORM_CONFIG.fields[fieldName];
    if (!field) return null;

    if (field.required && !value.trim()) {
      return `${field.label} es requerido`;
    }

    if (value && !field.validation(value)) {
      return field.error;
    }

    return null;
  };

  /**
   * Valida formulario completo
   */
  const validateForm = () => {
    const newErrors = {};

    Object.keys(FORM_CONFIG.fields).forEach((fieldName) => {
      const error = validateField(fieldName, formData[fieldName]);
      if (error) {
        newErrors[fieldName] = error;
      }
    });

    if (!agreedToTerms) {
      newErrors.terms = 'Debes aceptar los términos y condiciones';
    }

    return newErrors;
  };

  /**
   * Blur: marca como tocado y valida
   */
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    const error = validateField(name, formData[name]);
    setErrors((prev) => {
      if (error) {
        return { ...prev, [name]: error };
      }
      const updated = { ...prev };
      delete updated[name];
      return updated;
    });
  };

  /**
   * Change: actualiza valor y limpia error
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => {
        if (error) {
          return { ...prev, [name]: error };
        }
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  /**
   * Submit: valida, trackea y envía
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched({ name: true, email: true, phone: true, terms: true });
      setIsSubmitting(false);
      return;
    }

    // Track evento de conversión
    trackFormSubmit(variant, formData.email);

    // Simula envío a servidor
    setTimeout(() => {
      setSuccess(true);
      setIsSubmitting(false);

      // Reset después de 3 segundos
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '' });
        setAgreedToTerms(false);
        setTouched({});
      }, 3000);
    }, 800);
  };

  return (
    <section
      id="solicitar"
      className="form-section"
      role="region"
      aria-label="Formulario de solicitud de tarjeta de crédito"
    >
      <div className="form-wrapper">
        <div className="form-header">
          <h2 className="form-title">Solicita tu Tarjeta BCP</h2>
          <p className="form-subtitle">Rápido, seguro y sin sorpresas. Aprobación en línea.</p>
        </div>

        {/* Estado: Éxito */}
        {success ? (
          <div className="form-success-wrapper">
            <div className="success-animation">
              <div className="success-checkmark">
                <svg viewBox="0 0 52 52">
                  <circle cx="26" cy="26" r="25" fill="none" strokeWidth="2" />
                  <path d="M14.1 27.2l7.1 7.2 16.7-16.6" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <h3 className="success-title">¡Solicitud enviada!</h3>
            <p className="success-message">
              Hemos recibido tu información. Un ejecutivo de BCP se contactará contigo en las próximas 24-48 horas.
            </p>
            <div className="success-features">
              <div className="feature-check">✓ Sin costos de evaluación</div>
              <div className="feature-check">✓ Aprobación rápida</div>
              <div className="feature-check">✓ Beneficios inmediatos</div>
            </div>
          </div>
        ) : (
          /* Formulario */
          <form onSubmit={handleSubmit} className="form" noValidate>
            {/* Nombre */}
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                <span className="field-icon">{FORM_CONFIG.fields.name.icon}</span>
                {FORM_CONFIG.fields.name.label}
                <span className="required">*</span>
              </label>
              <div className="input-wrapper">
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder={FORM_CONFIG.fields.name.placeholder}
                  value={formData.name}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={`form-input ${errors.name ? 'has-error' : ''} ${formData.name ? 'has-value' : ''}`}
                  disabled={isSubmitting}
                  required
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {formData.name && !errors.name && <span className="input-check">✓</span>}
              </div>
              {errors.name && (
                <span id="name-error" className="form-error" role="alert">
                  {errors.name}
                </span>
              )}
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                <span className="field-icon">{FORM_CONFIG.fields.email.icon}</span>
                {FORM_CONFIG.fields.email.label}
                <span className="required">*</span>
              </label>
              <div className="input-wrapper">
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder={FORM_CONFIG.fields.email.placeholder}
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={`form-input ${errors.email ? 'has-error' : ''} ${formData.email ? 'has-value' : ''}`}
                  disabled={isSubmitting}
                  required
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {formData.email && !errors.email && <span className="input-check">✓</span>}
              </div>
              {errors.email && (
                <span id="email-error" className="form-error" role="alert">
                  {errors.email}
                </span>
              )}
            </div>

            {/* Términos y condiciones */}
            <div className={`form-checkbox ${errors.terms ? 'has-error' : ''}`}>
              <input
                id="terms"
                type="checkbox"
                checked={agreedToTerms}
                onChange={(e) => {
                  setAgreedToTerms(e.target.checked);
                  if (touched.terms) {
                    setErrors((prev) => {
                      const updated = { ...prev };
                      if (e.target.checked) {
                        delete updated.terms;
                      }
                      return updated;
                    });
                  }
                }}
                onBlur={() => setTouched((prev) => ({ ...prev, terms: true }))}
                disabled={isSubmitting}
                aria-describedby={errors.terms ? 'terms-error' : undefined}
              />
              <label htmlFor="terms" className="checkbox-label">
                Acepto los{' '}
                <a href="#" className="link">
                  términos y condiciones
                </a>{' '}
                y la{' '}
                <a href="#" className="link">
                  política de privacidad
                </a>
              </label>
              {errors.terms && (
                <span id="terms-error" className="form-error" role="alert">
                  {errors.terms}
                </span>
              )}
            </div>

            {/* Botón Submit */}
            <button
              type="submit"
              className="form-submit-btn"
              disabled={isSubmitting || !agreedToTerms}
              aria-busy={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  <span>Procesando solicitud...</span>
                </>
              ) : (
                <>
                  <span>Solicitar tarjeta</span>
                  <span className="btn-arrow">→</span>
                </>
              )}
            </button>

            {/* Info adicional */}
            <p className="form-info">
              Tu información está protegida con encriptación de nivel banco.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}