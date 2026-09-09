export default function Footer() {
  return (
    <footer style={{ 
      backgroundColor: '#002B6D', 
      color: '#ffffff', 
      padding: '30px 20px', 
      textAlign: 'center',
      marginTop: 'auto'
    }}>
      <p style={{ margin: '0 0 15px 0' }}>© 2026 Banco de Crédito del Perú. Todos los derechos reservados.</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <a href="#" style={{ color: '#fff', textDecoration: 'underline' }}>Términos y condiciones</a>
        <a href="#" style={{ color: '#fff', textDecoration: 'underline' }}>Políticas de privacidad</a>
        <a href="#" style={{ color: '#fff', textDecoration: 'underline' }}>Libro de reclamaciones</a>
      </div>
    </footer>
  );
}