import { useEffect, useRef, useState, useCallback } from "react";

const WORDS = ["PASSIONNÉ", "CRÉATIF", "INVESTI"];

function DynamicText() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const typingTimer = useRef(null);
  const deletingTimer = useRef(null);

  const deleteWord = useCallback((word) => {
    if (word.length > 0) {
      setText((prev) => prev.slice(0, -1));
      clearTimeout(deletingTimer.current);
      deletingTimer.current = setTimeout(
        () => deleteWord(word.slice(0, -1)),
        50
      );
    } else {
      setTimeout(() => {
        setText("");
        setWordIndex((prev) => (prev + 1) % WORDS.length);
      }, 500);
    }
  }, []);

  const typeWord = useCallback((word, idx) => {
    if (idx < word.length) {
      setText((prev) => prev + word.charAt(idx));
      clearTimeout(typingTimer.current);
      typingTimer.current = setTimeout(() => typeWord(word, idx + 1), 100);
    } else {
      clearTimeout(deletingTimer.current);
      deletingTimer.current = setTimeout(() => deleteWord(word), 1000);
    }
  }, [deleteWord]);

  useEffect(() => {
    setText("");
    typeWord(WORDS[wordIndex], 0);

    return () => {
      clearTimeout(typingTimer.current);
      clearTimeout(deletingTimer.current);
    };
  }, [wordIndex, typeWord]);

  return (
    <span className="italic font-medium" id="dynamic-text">
      {text}
    </span>
  );
}

export default DynamicText;
