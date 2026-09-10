import './Benefits.css';

export default function Benefits() {
  return (
    <section id="beneficios" className="benefits-section">
      <h3 className="benefits-title">
        Elige la tarjeta de crédito que va contigo
      </h3>
      
      <div className="benefits-grid">
        
        {/* Card 1: Visa Clásica */}
        <div className="benefit-card">
          <img src={`${import.meta.env.BASE_URL}img/Visa-Clasica.png`} alt="Visa Clásica" className="benefit-img" />
          <h4 className="benefit-card-title">Visa Clásica</h4>
          
          <ul className="benefit-list">
            <li><i className="fa-solid fa-check"></i> Campañas de Cashback </li>
            <li><i className="fa-solid fa-check"></i> Membresía anual S/80 </li>
            <li><i className="fa-solid fa-check"></i> Delivery gratis ​</li>
          </ul>
        </div>
        
        {/* Card 2: Visa Light */}
        <div className="benefit-card">
          <img src={`${import.meta.env.BASE_URL}img/Visa-Light.png`} alt="Visa Light" className="benefit-img" />
          <h4 className="benefit-card-title">Visa Light</h4>
          
          <ul className="benefit-list">
            <li><i className="fa-solid fa-check"></i> Sin consumo <strong>mínimo</strong></li>
            <li><i className="fa-solid fa-check"></i> Membresía anual </li>
            <li><i className="fa-solid fa-check"></i> Delivery gratis ​</li>
          </ul>
        </div>
        
        {/* Card 3: Visa IO */}
        <div className="benefit-card">
          <img src={`${import.meta.env.BASE_URL}img/Visa-IO.png`} alt="Visa iO" className="benefit-img" />
          <h4 className="benefit-card-title">Visa iO</h4>
          
          <ul className="benefit-list">
            <li><i className="fa-solid fa-check"></i> Tarjeta de Crédito digital y física </li>
            <li><i className="fa-solid fa-check"></i> Membresía cero: ni mensual, ni anual </li>
            <li><i className="fa-solid fa-check"></i> Acumula cashback por tus compras </li>
          </ul>
        </div>

      </div>
    </section>
  );
}