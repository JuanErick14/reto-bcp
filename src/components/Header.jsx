export default function Header() {
  return (
    <header style={{ width: '100%', fontFamily: 'Roboto, sans-serif', backgroundColor: '#ffffff' }}>
    
      {/* Barra Principal */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '15px 40px',
        borderBottom: '1px solid #eee'
      }}>
        
        {/* 1. Logo alineado a la izquierda */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
          <img src={`${import.meta.env.BASE_URL}img/bcp-logo.png`} alt="Logo BCP" style={{ height: '35px' }} />
        </div>

        {/* 2. Navegación perfectamente centrada */}
        <div style={{ flex: 2, display: 'flex', justifyContent: 'center' }}>
          <nav style={{ display: 'flex', gap: '30px', fontSize: '15px', fontWeight: '600', color: '#333' }}>
            <span style={{ cursor: 'pointer' }}>Cuentas</span>
            <span style={{ cursor: 'pointer' }}>Tarjetas</span>
            <span style={{ cursor: 'pointer' }}>Préstamos</span>
            <span style={{ cursor: 'pointer' }}>Seguros</span>
          </nav>
        </div>

        {/* 3. Botón alineado a la derecha */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <button style={{ 
            padding: '10px 24px', 
            borderRadius: '25px', 
            border: '2px solid #002B6D', 
            backgroundColor: '#ffffff',
            color: '#002B6D',
            fontWeight: '700',
            cursor: 'pointer',
            fontSize: '14px'
          }}>
            <i className="fa-solid fa-lock" style={{ marginRight: '8px' }}></i> 
            Banca por Internet
          </button>
        </div>
        
      </div>
    </header>
  );
}