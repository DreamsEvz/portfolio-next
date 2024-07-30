import { useEffect, useRef, useState } from "react";

function DynamicText() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["PASSIONNÉ", "CRÉATIF", "INVESTI"];
  const typingTimer = useRef(null);
  const deletingTimer = useRef(null);

  const typeWord = (word, idx) => {
    if (idx < word.length) {
      setText((prev) => prev + word.charAt(idx));
      clearTimeout(typingTimer.current);
      typingTimer.current = setTimeout(() => typeWord(word, idx + 1), 100);
    } else {
      clearTimeout(deletingTimer.current);
      deletingTimer.current = setTimeout(() => deleteWord(word), 1000);
    }
  };

  const deleteWord = (word) => {
    if (word.length > 0) {
      setText((prev) => prev.slice(0, -1));
      clearTimeout(deletingTimer.current);
      deletingTimer.current = setTimeout(
        () => deleteWord(word.slice(0, -1)),
        50
      );
    } else {
      // Une fois que tout le mot est supprimé, nous préparons l'index pour le prochain mot.
      setTimeout(() => {
        setText(""); // Assurons-nous que le texte est vide.
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 500); // Donnons un peu de temps avant de recommencer pour éviter le chevauchement.
    }
  };

  useEffect(() => {
    // Avant de commencer à taper, nous nous assurons que le texte est vide.
    setText("");
    typeWord(words[wordIndex], 0);

    return () => {
      clearTimeout(typingTimer.current);
      clearTimeout(deletingTimer.current);
    };
  }, [wordIndex]); // Dépend seulement de wordIndex

  return (
    <span className="italic font-medium" id="dynamic-text">
      {text}
    </span>
  );
}

export default DynamicText;
