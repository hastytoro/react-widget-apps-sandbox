import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, setSelected }) => {
  const [toggle, setToggle] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setToggle(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });
    return () => document.body.removeEventListener("click", onBodyClick);
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) return; // exit and filter data logic
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => setSelected(option)}
      >
        {option.label}
      </div>
    );
  });
  // console.log(ref.current);
  return (
    <div className="ui form" ref={ref}>
      <div className="field">
        <div
          onClick={() => setToggle(!toggle)}
          className={`ui selection dropdown
            ${toggle ? "visible active" : ""}`}
        >
          <i className="dropdown icon" />
          <div className="text">{selected.label}</div>
          <div className={`menu ${toggle ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
