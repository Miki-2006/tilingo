import { useState, useEffect, useRef } from "react";
import { FaPencil } from "react-icons/fa6";
import { AiFillSound } from "react-icons/ai";
import styles from "./wordlist.module.css";

const WordsList = ({ onDefinitionChange, wordData }) => {
  const [editing, setEditing] = useState(false);
  const [localDefinition, setLocalDefinition] = useState(
    wordData.definition ?? ""
  );
  const audioRef = useRef(null)

  const playAudio = () => {
    audioRef.current.play()
  }

  useEffect(() => {
    if (!editing) {
      setLocalDefinition(wordData.definition ?? "");
    }
  }, [wordData.definition, editing]);

  const handleSave = () => {
    setEditing(false);
    onDefinitionChange(localDefinition); // передаём вверх
  };

  const handleKeyDown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      handleSave();
    }
  };


  return (
    <>
      {wordData.definition && (
        <div className={styles.container}>
          <div className={styles.word}>  
            <audio 
              src={`https://media.merriam-webster.com/audio/prons/en/us/mp3/${wordData.sound.audio[0]}/${wordData.sound.audio}.mp3?key=${process.env.REACT_APP_MERRIAM_DICTIONARY_API_KEY}`}
              autoPlay={false}
              ref={audioRef}
            ></audio>
            <AiFillSound className={styles.soundIcon} onClick={playAudio} />
            <b>{wordData.word}</b>
          </div>
          {!editing ? (
            <p
              className={styles.text}
              onClick={() => setEditing(true)}
              title="Click to edit"
            >
              <span className={styles.bold}>Definition:</span>{" "}
              {wordData.definition}
              <FaPencil className={styles.pencilIcon} />
            </p>
          ) : (
            <textarea
              value={localDefinition ?? ""}
              onChange={(e) => setLocalDefinition(e.target.value)}
              onBlur={handleSave}
              onKeyDown={handleKeyDown}
              autoFocus
              rows={4}
              className={styles.textarea}
            />
          )}
        </div>
      )}
    </>
  );
};

export default WordsList;
