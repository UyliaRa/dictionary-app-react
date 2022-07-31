import React from "react";
import Synonym from "./Synonym";
import Example from "./Example";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <Synonym synonyms={props.meaning.synonyms} />

      <section>
        <h3 className="partOfSpeech">{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <div className="definition">{definition.definition}</div>
              <div className="example">
                <Example example={definition.example} />
                <br />
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
