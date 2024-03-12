import React, { useState } from "react";
import "./MultipleLang.css"; // Import your CSS file if needed

const locales = ["en-GB", "ar-SA", "zh-CN", "de-DE", "es-ES", "fr-FR", "hi-IN", "it-IT", "in-ID", "ja-JP", "ko-KR", "nl-NL", "no-NO", "pl-PL", "pt-BR", "sv-SE", "fi-FI", "th-TH", "tr-TR", "uk-UA", "vi-VN", "ru-RU", "he-IL"];

function getFlagSrc(countryCode) {
  return /^[A-Z]{2}$/.test(countryCode)
    ? `https://flagsapi.com/${countryCode.toUpperCase()}/shiny/64.png`
    : "";
}

function MultipleLang() {
  const [selectedLocale, setSelectedLocale] = useState(locales[0]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleLocaleChange = (locale) => {
    setSelectedLocale(locale);
    setDropdownOpen(false);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen((prevOpen) => !prevOpen);
  };

  const langName = new Intl.DisplayNames([selectedLocale], { type: "language" }).of(new Intl.Locale(selectedLocale).language);

  return (
    <div className="dropdown" tabIndex="0">
      <button id="dropdown-btn" onClick={handleDropdownToggle}>
        <img src={getFlagSrc(new Intl.Locale(selectedLocale).region)} alt={langName} />
        <span className="language">{langName}</span>
        <span className={`arrow-down ${isDropdownOpen ? "open" : ""}`}></span>
      </button>
      {isDropdownOpen && (
        <ul className="dropdown-content">
          {locales.map((locale) => (
            <li key={locale} onMouseDown={() => handleLocaleChange(locale)}>
              <img src={getFlagSrc(new Intl.Locale(locale).region)} alt={new Intl.DisplayNames([locale], { type: "language" }).of(new Intl.Locale(locale).language)} />
              <span>
                {new Intl.DisplayNames([locale], { type: "language" }).of(new Intl.Locale(locale).language)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MultipleLang;
