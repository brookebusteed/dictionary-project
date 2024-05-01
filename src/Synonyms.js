import React from "react";

export default function Synonyms(props) {
  if (props.meaning.synonyms) {
    return (
      <div className="Synonyms">
        {props.meaning.synonyms.map(function (synonym, index) {
          return <span key={index}> {synonym}</span>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
