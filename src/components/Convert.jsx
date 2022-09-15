import React, { useState, useEffect } from "react";
import axios from "axios";

const apiKey = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  // effect #1 (debounce state)
  useEffect(() => {
    const timerId = setTimeout(() => setDebouncedText(text), 1000);
    return () => clearTimeout(timerId);
  }, [text]);

  // effect #2 (axios post)
  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: apiKey,
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    doTranslation();
  }, [language, debouncedText]);

  return (
    <div>
      <h1 className="ui header red">{translated} </h1>
    </div>
  );
};

export default Convert;
