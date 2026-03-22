import "../styles/AboutUs.css";
import { useLanguage } from "../context/LanguageContext";

function AboutUs() {
  const { t } = useLanguage();
  return (
    <div className="about-section">
      <h2>{t.whoWeAre}</h2>
      <p className="about-text">
        {t.aboutText}
      </p>
      <div className="about-cards">
        <div className="about-card">
          <span>0%</span>
          <p>{t.commission}</p>
        </div>
        <div className="about-card">
          <span>7</span>
          <p>{t.currencies}</p>
        </div>
        <div className="about-card">
          <span>24h</span>
          <p>{t.updates}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;