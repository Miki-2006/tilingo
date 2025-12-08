import { franc } from "franc-min";
import langs from "langs";

function LanguageDetector() {
  const detectLanguage = () => {    
    const langCode = franc(word, {minLength: 1, only: ['eng', 'rus', 'kor', 'kir']});
    
    if (langCode === "und") {
      console.log("Could not determine language");
      return;
    }
    console.log(langCode);
    

    const lang = langs.where("3", langCode);
    console.log(lang ? lang.name : "Unknown language");
  };
  detectLanguage()

  return <p>Detected Language:</p>;
}

export default LanguageDetector;
