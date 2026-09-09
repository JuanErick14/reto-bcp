export default function Benefits() {
  return (
    <section id="beneficios" style={{ padding: '60px 20px', textAlign: 'center' }}>
      <h3 style={{ color: '#002B6D', marginBottom: '30px' }}>Beneficios de tu tarjeta</h3>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        {/* Card 1 */}
        <div style={{ width: '250px', padding: '20px', border: '1px solid #eee', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <h4 style={{ color: '#FF7A00' }}>Icono 1</h4>
          <p>Acumula Millas BCP en todas tus compras diarias.</p>
        </div>
        
        {/* Card 2 */}
        <div style={{ width: '250px', padding: '20px', border: '1px solid #eee', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <h4 style={{ color: '#FF7A00' }}>Icono 2</h4>
          <p>Descuentos exclusivos en más de 200 restaurantes.</p>
        </div>
        
        {/* Card 3 */}
        <div style={{ width: '250px', padding: '20px', border: '1px solid #eee', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <h4 style={{ color: '#FF7A00' }}>Icono 3</h4>
          <p>Seguro de protección de compras y garantía extendida.</p>
        </div>
      </div>
    </section>
  );
}