export default function Header() {
  return (
    <header style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      padding: '20px 40px', 
      backgroundColor: '#f5f5f5',
      borderBottom: '1px solid #ddd'
    }}>
      <h2 style={{ margin: 0, color: '#002B6D' }}>Logo BCP</h2>
      <nav>
        <a href="#beneficios" style={{ margin: '0 15px', color: '#333', textDecoration: 'none' }}>Beneficios</a>
        <a href="#solicitar" style={{ margin: '0 15px', color: '#333', textDecoration: 'none' }}>Tarjetas</a>
      </nav>
    </header>
  );
}