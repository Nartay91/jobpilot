import React, { useState } from "react";
import Flag from "react-world-flags";


const countries = [
    { code: "US", name: "United States" },
    { code: "ES", name: "Spain" },
    { code: "FR", name: "France" },
    { code: "DE", name: "Germany" },
    { code: "IT", name: "Italy" },
    { code: "PT", name: "Portugal" },
    { code: "RU", name: "Russia" },
    { code: "CN", name: "China" },
    { code: "JP", name: "Japan" },
    { code: "KR", name: "South Korea" },
    { code: "IN", name: "India" },
    { code: "TR", name: "Turkey" },
    { code: "NL", name: "Netherlands" },
    { code: "SV", name: "Sweden" },
    { code: "PL", name: "Poland" },
    { code: "ID", name: "Indonesia" },
    { code: "TH", name: "Thailand" },
    { code: "VI", name: "Vietnam" },
    { code: "FI", name: "Finland" },
    { code: "NO", name: "Norway" },
    { code: "RO", name: "Romania" }
];

function CountrySelector() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setIsMenuOpen(false);
  };

  
  const handleButtonClick = (event) => {
    event.preventDefault(); 
    toggleMenu();
  };

  return (
    <div style={{ position: "relative", width: "180px", display: "inline-block", backgroundColor: "white" }}>
      <button
        type="button"
        onClick={handleButtonClick} 
        style={{
          
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          border: "none",
          gap: "5px",
          padding: "5px 10px",
          cursor: "pointer",
          fontSize: "18px",
        }}
      >
        <Flag code={selectedCountry.code} style={{ width: "20px", height: "15px", marginRight: "8px" }} />
        {selectedCountry.name} 
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
            borderRadius: "5px",
            listStyle: "none",
            padding: "0",
            margin: "5px 0",
            zIndex: 1000,
          }}
        >
          {countries.map((country) => (
            <li key={country.code}>
              <button
                type="button"
                onClick={(event) => {
                  event.preventDefault(); 
                  handleCountryChange(country);
                }}
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
                <Flag code={country.code} style={{ width: "20px", height: "15px", marginRight: "8px" }} />
                {country.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CountrySelector;
