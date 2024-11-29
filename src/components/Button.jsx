import React, { useState } from "react";
import Flag from "react-world-flags";

const languages = [
    { code: "US", name: "English" },
    { code: "ES", name: "Español" },
    { code: "FR", name: "Français" },
    { code: "DE", name: "Deutsch" },
    { code: "IT", name: "Italiano" },
    { code: "PT", name: "Português" },
    { code: "RU", name: "Русский" },
    { code: "CN", name: "中文" },
    { code: "JP", name: "日本語" },
    { code: "KR", name: "한국어" },
    { code: "IN", name: "हिन्दी" },
    { code: "TR", name: "Türkçe" },
    { code: "NL", name: "Nederlands" },
    { code: "SV", name: "Svenska" },
    { code: "PL", name: "Polski" },
    { code: "ID", name: "Bahasa" },
    { code: "TH", name: "ไทย" },
    { code: "VI", name: "Tiếng Việt" },
    { code: "FI", name: "Suomi" },
    { code: "NO", name: "Norsk" },
    { code: "RO", name: "Română" }
  ];
  

function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsMenuOpen(false);
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button
        onClick={toggleMenu}
        style={{
          display: "flex",
          alignItems: "center",
          border: "none",
          gap: "5px",
          padding: "5px 10px",
          cursor: "pointer",
          fontSize: "18px",
        }}
      >
        <Flag code={selectedLanguage.code} style={{ width: "20px", height: "15px", marginRight: "8px" }} />
        {selectedLanguage.name}
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 1L5 5L9 1"
            stroke="#5E6670"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isMenuOpen && (
        <ul
          style={{
            position: "absolute",
            top: "100%",
            left: "0",
            backgroundColor: "white",
            border: "1px solid #ccc",
            borderRadius: "5px",
            listStyle: "none",
            padding: "0",
            margin: "5px 0",
            zIndex: 1000,
          }}
        >
          {languages.map((language) => (
            <li key={language.code}>
              <button
                onClick={() => handleLanguageChange(language)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "white",
                  border: "none",
                  padding: "5px 10px",
                  width: "100%",
                  textAlign: "left",
                  cursor: "pointer",
                }}
              >
                <Flag code={language.code} style={{ width: "20px", height: "15px", marginRight: "8px" }} />
                {language.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LanguageSelector;
