export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#ffffff', borderTop: '1px solid #eaeaea', padding: '50px 40px 20px', fontFamily: 'Roboto, sans-serif', textAlign: 'left' }}>
      
      {/* Parte Superior: Columnas principales */}
      <div style={{ maxWidth: '1200px', margin: '0 auto 40px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '30px' }}>
        
        {/* Columna 1: Sobre el BCP */}
        <div style={{ flex: '1', minWidth: '180px' }}>
          <h4 style={{ color: '#002B6D', fontSize: '14px', fontWeight: '700', marginBottom: '20px', textTransform: 'uppercase' }}>Sobre el BCP</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px', color: '#0043CE', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <li style={{ cursor: 'pointer' }}>Nuestra historia y principios</li>
            <li style={{ cursor: 'pointer' }}>Información para inversionistas BCP</li>
            <li style={{ cursor: 'pointer' }}>Responsabilidad Social BCP</li>
            <li style={{ cursor: 'pointer' }}>Centro de Innovación</li>
            <li style={{ cursor: 'pointer', fontWeight: '700' }}>¡Postula hoy!</li>
          </ul>
        </div>

        {/* Columna 2: Ayuda y Legales */}
        <div style={{ flex: '1', minWidth: '180px' }}>
          <h4 style={{ color: '#002B6D', fontSize: '14px', fontWeight: '700', marginBottom: '20px', textTransform: 'uppercase' }}>Ayuda</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px', color: '#0043CE', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <li style={{ cursor: 'pointer' }}>Cancela tu producto</li>
            <li style={{ cursor: 'pointer' }}>Cancela tu tarjeta de crédito</li>
            <li style={{ cursor: 'pointer' }}>Tasas y tarifas</li>
            <li style={{ cursor: 'pointer' }}>Transparencia de información</li>
          </ul>
        </div>

        {/* Columna 3: Descarga de App (QR + Celular) */}
        <div style={{ flex: '2', minWidth: '300px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <h4 style={{ color: '#002B6D', fontSize: '20px', fontWeight: '700', marginBottom: '10px' }}>Descarga el App Banca Móvil BCP</h4>
          <p style={{ color: '#333', fontSize: '14px', marginBottom: '20px' }}>Escanea el QR con tu celular y conoce más</p>
          
          <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-end' }}>
            <img src={`${import.meta.env.BASE_URL}img/QR.jpg`} alt="Código QR" style={{ width: '100px', height: '100px', borderRadius: '8px' }} />
            <img src={`${import.meta.env.BASE_URL}img/Celular-banca-movil-mobile.png`} alt="App Banca Móvil BCP" style={{ height: '170px', objectFit: 'contain' }} />
          </div>
        </div>
      </div>

      {/* Legales y Sellos de Confianza */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', borderTop: '1px solid #eaeaea', paddingTop: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
        
        <p style={{ color: '#666', fontSize: '12px', lineHeight: '1.5', maxWidth: '600px', margin: 0 }}>
          © 2026 BCP | Todos los derechos reservados. Sede Central, Centenario 156, La Molina 15026, Lima, Perú. BANCO DE CREDITO DEL PERU S.A - RUC 20100047218
        </p>

        <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
          <img src={`${import.meta.env.BASE_URL}img/Sistema+de+denuncias.svg`} alt="Sistema de Denuncias" style={{ height: '40px', objectFit: 'contain' }} />
          <img src={`${import.meta.env.BASE_URL}img/LDR.png`} alt="Libro de Reclamaciones" style={{ height: '40px', objectFit: 'contain' }} />
          <img src={`${import.meta.env.BASE_URL}img/Compromiso.svg`} alt="Compromiso Hablemos más simple" style={{ height: '40px', objectFit: 'contain' }} />
          <img src={`${import.meta.env.BASE_URL}img/Espacio+accesible.svg`} alt="Espacio Accesible" style={{ height: '40px', objectFit: 'contain' }} />
        </div>
        
      </div>
    </footer>
  );
}