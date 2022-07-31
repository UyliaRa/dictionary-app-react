import React from "react";
import "./Synonym.css";

export default function Synonym(props) {
  if (props.synonyms.length) {
    return (
      <div className="synonyms-section">
        <section>
          <ul className="synonyms">
            {props.synonyms.map(function (synonym, index) {
              return <li key={index}>{synonym}</li>;
            })}
          </ul>
        </section>
      </div>
    );
  } else {
    return null;
  }
}
