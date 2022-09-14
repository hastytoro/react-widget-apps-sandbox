import React, { useState } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";

const options = [
  {
    label: "Italian",
    value: "it",
  },
  {
    label: "Dutch",
    value: "nl",
  },
  {
    label: "Japanese",
    value: "ja",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <hr />
      <Dropdown
        options={options}
        selected={language}
        setSelected={setLanguage}
      />
      <hr />
      <h3 className="ui header">Output:</h3>
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;
