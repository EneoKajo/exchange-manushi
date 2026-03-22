import "../styles/AboutUs.css";

function AboutUs() {
  return (
    <div className="about-section">
      <h2>Who We Are</h2>
      <p className="about-text">
        Manushi Sh.P.K has been serving the people of Tirana with fast, reliable and transparent currency exchange. No hidden fees, no surprises — just honest rates and professional service every time you walk through our door.
      </p>
      <div className="about-cards">
        <div className="about-card">
          <span>0%</span>
          <p>Commission Fees</p>
        </div>
        <div className="about-card">
          <span>7</span>
          <p>Currencies Available</p>
        </div>
        <div className="about-card">
          <span>24h</span>
          <p>Rate Updates</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;