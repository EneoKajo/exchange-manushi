import { useLanguage } from "../context/LanguageContext";
import "../styles/LanguageSwitcher.css";

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-switcher">
      {["en", "al", "it"].map((lang) => (
        <button
          key={lang}
          className={`lang-btn ${language === lang ? "active" : ""}`}
          onClick={() => setLanguage(lang)}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;