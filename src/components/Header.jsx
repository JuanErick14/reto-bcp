import logoBCP from '../../public/img/bcp-logo.png';
import './Header.css';

export default function Header() {
  return (
    <header style={{ width: '100%', fontFamily: 'Roboto, sans-serif', backgroundColor: '#ffffff' }}>
      <div className="header-container">
        
        {/* 1. Logo alineado a la izquierda */}
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <img src={logoBCP} alt="Logo BCP" style={{ height: '30px' }} />
        </div>

        {/* 2. Navegación centrada (oculta en móvil por CSS o adaptada) */}
        <div className="header-nav">
          <span style={{ cursor: 'pointer' }}>Cuentas</span>
          <span style={{ cursor: 'pointer' }}>Tarjetas</span>
          <span style={{ cursor: 'pointer' }}>Préstamos</span>
          <span style={{ cursor: 'pointer' }}>Seguros</span>
        </div>

        {/* 3. Botón de acceso */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button style={{ 
            padding: '8px 16px', 
            borderRadius: '25px', 
            border: '2px solid #002B6D', 
            backgroundColor: '#ffffff',
            color: '#002B6D',
            fontWeight: '700',
            cursor: 'pointer',
            fontSize: '13px'
          }}>
            <i className="fa-solid fa-lock" style={{ marginRight: '6px' }}></i> 
            Banca por Internet
          </button>
        </div>
        
      </div>
    </header>
  );
}