import React from "react";
import ReactAudioPlayer from "react-audio-player";

import "./Phonetic.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic text-center">
      {props.phonetic.audio && (
        <ReactAudioPlayer src={props.phonetic.audio} controls />
      )}
      <div className="text text-center">
        {" "}
        {props.phonetic.text ? props.phonetic.text : ""}
      </div>
    </div>
  );
}
