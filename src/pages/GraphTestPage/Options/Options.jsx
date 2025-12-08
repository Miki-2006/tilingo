import { useState } from "react";
import styles from "./options.module.css";

const Options = ({ options }) => {
    const [showAnswer, setShowAnswer] = useState(false);
    const [selectedAnswerId, setSelectedAnswerId] = useState(null);

    const onSelect = (id) => {
        setSelectedAnswerId(id);
        if (id === 'correctoption'){
            setShowAnswer(true);
            return;
        }
        setShowAnswer(true);
    }

  return (
    <div className={styles.optionsContainer}>
      {options.map((option) => {
        let optionClass = styles.option;

        if (showAnswer) {
          if (option.id === 'correctoption') {
            optionClass += ` ${styles.correct}`;
          } else if (selectedAnswerId === option.id) {
            optionClass += ` ${styles.incorrect}`;
          }
        }

        return (
          <button
            key={option.id}
            className={optionClass}
            onClick={() => onSelect(option.id)}
            disabled={showAnswer} // блокируем кнопки после выбора
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};

export default Options;
