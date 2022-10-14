import { createContext, useEffect, useState } from "react";

export const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("eng");

  useEffect(() => {
    const isEnglish = localStorage.getItem("powerOverPainLang") === "eng";
    if (isEnglish) setLanguage("eng");
  }, []);

  const toggleLanguage = () => {
    const chosenLanguage = language === "eng" ? "fre" : "eng";
    localStorage.setItem("powerOverPainLang", chosenLanguage);
    setLanguage(chosenLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
