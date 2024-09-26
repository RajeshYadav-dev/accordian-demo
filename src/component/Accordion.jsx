import React, { useState } from "react";
import { data } from "./data";
import "./style.css";

const Accordion = () => {
  const [selection, setSelection] = useState(null);

  const handleSingleSelection = (currentId) => {
    setSelection(currentId === selection ? null : currentId);
  };

  return (
    <div className="wrapper">
      <h1>Accordian</h1>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div className="title">
                <h3>{dataItem.question}</h3>
                <span
                  onClick={() => handleSingleSelection(dataItem.id)}
                  className="show"
                >
                  show
                </span>
              </div>
              {selection === dataItem.id ? (
                <div className="answer">
                  <h4>{dataItem.answer}</h4>
                </div>
              ) : null}
            </div>
          ))
        ) : (
          <div>
            <h1>No data Found..</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
