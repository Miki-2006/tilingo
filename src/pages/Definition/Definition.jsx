import { useState, useEffect } from "react";
import WordTranslateForm from "../../components/Forms/WordTranslateFrom/WordTranslateForm";
import LoadingOverlay from "../../components/Loaders/LoadingOverlay";
import WordsList from "../../components/WordList/WordsList";
import supabase from "../../services/supabase";
import { useNavigate } from "react-router-dom";
import Unsplash from "../../components/Unsplash/Unsplash";
import styles from "./definition.module.css";
import langs from "langs";
import { franc } from "franc-min";

const Definition = () => {
  const [word, setWord] = useState(null);
  const [language, setLanguage] = useState(null);
  const [wordData, setWordData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [image, setImage] = useState(null);
  const [modulesOfUser, setModulesOfUser] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);
  const [selectedModuleError, setSelectedModuleError] = useState(false);
  const navigate = useNavigate();

  const detectLanguage = (input) => {
    const langCode = franc(input, {
      minLength: 1,
      only: ["eng", "rus", "kor", "kir"],
    });

    if (langCode === "und") {
      console.log("Could not determine language");
      return;
    }

    const lang = langs.where("3", langCode);
    const language = lang ? lang.name : "Unknown language";

    return language;
    
  };

  const getDefinition = async (lang) => {
    if (lang === null) {
      throw new Error('Set the language!!!')
    }
    try {
      const res = await fetch(`https://tilingo-server.vercel.app/dictionary/${lang}/definition/${word}`)
      if (res.ok) {
        const data = await res.json()        
        setWordData(data)
      } else {
        setError(true)
      }
    } catch (error) {
      console.error(`Error in fetching definition from server: ${error}`);
    }
  }

  const fetchDefinition = async (e) => {
    e.preventDefault();
    setLoading(true);
    const language = await detectLanguage(word);
    if (language === "English") {
      setLanguage("ENG");
      await getDefinition("english");
      if (!error) {
        setLoading(false);
      }
    } else if (language === "Korean") {
      setLanguage("KOR");
      await getDefinition("korean")
      if (!error) {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (wordData) {
      setLoading(false);
    }
  }, [wordData]);

  useEffect(() => {
    const fetchModulesOfUser = async () => {
      const userId = JSON.parse(localStorage.getItem("user"))?.id;
      // if (!userId) {
      //   navigate("/sign-in");
      //   return;
      // }
      try {
        const { data: modules } = await supabase
          .from("modules")
          .select("*")
          .eq("user_id", userId);
        if (modules) {
          setModulesOfUser(modules);
        }
        if (error) {
          console.error(error);
        }
      } catch (err) {
        console.error("Error fetch modules:", err);
      }
    };
    fetchModulesOfUser();
  }, [error, navigate]);

  const handleSave = async () => {
    setLoading(true);
    console.log(image);
    

    if (!localStorage.getItem("user")) {
      navigate("/sign-in");
      return;
    } else if (!selectedModule) {
      setSelectedModuleError(true);
    }
    try {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 1500);
      setLoading(false);
    } catch (err) {
      console.error("Error saving word:", err);
      setLoading(false);
    }
  };

  const handleDefinitionChange = (newDefinition) => {
    setWordData(prev => prev.definition = newDefinition);
  };

  return (
    <div className={styles.container}>
      <LoadingOverlay success={success} loading={loading} />
      <h2 className={styles.title}>Find a Definition</h2>
      <WordTranslateForm
        fetchDefinition={fetchDefinition}
        word={word}
        setWord={setWord}
      />

      {error && <b className={styles.errorText}>We couldn't find the word!</b>}

      <div className={styles.info}>
        {wordData && (
          <WordsList
            definition={wordData.definition}
            wordData={wordData}
            onDefinitionChange={handleDefinitionChange}
          />
        )}

        {language && (
          <Unsplash query={word} onSelect={(url) => setImage(url)} />
        )}

        {wordData && modulesOfUser && (
          <div className={styles.modules}>
            <b className={styles.modulesTitle}>my modules:</b>
            <ul className={styles.modulesList}>
              {Object.entries(modulesOfUser).map(([key, el], indx) => (
                <li
                  className={`${styles.module} ${
                    selectedModule === key ? styles.selected : ""
                  }`}
                  onClick={() => setSelectedModule(key)}
                  key={indx}
                >
                  {el}
                </li>
              ))}
            </ul>
            {selectedModuleError && (
              <b className={styles.errorText}>Please, select module!</b>
            )}
          </div>
        )}

        {wordData && (
          <button onClick={handleSave} className={styles.learnButton}>
            Learn
          </button>
        )}
      </div>
    </div>
  );
};

export default Definition;
