import "../styles/LocationSection.css";
import office from '../images/office.PNG'

function LocationSection() {
  return (
    <div className="location-section">
      <div className="location-left">
        <h2>Find Us</h2>
        <div className="location-details">
          <p className="location-address">
            📍 Blv. Zogu I, Te Sigal, K. I<br />
            1000 — Tiranë, Albania
          </p>
          <p className="location-contact">📞 0682036278</p>
          <p className="location-contact">✉️ exchangemanushi@yahoo.com</p>
        </div>
        <div className="location-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d187.2505715707116!2d19.8179238860672!3d41.3304144989998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1774131460761!5m2!1sen!2s"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen=""
            loading="lazy"
            title="Manushi SHPK Location"
          />
        </div>
      </div>

      <div className="location-right">
        <img
          src={office}
          alt="Manushi SHPK Office"
          className="location-photo"
        />
      </div>
    </div>
  );
}

export default LocationSection;