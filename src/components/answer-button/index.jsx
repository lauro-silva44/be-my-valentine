import React from "react";
import style from "./style.module.css";
import negativeStyle from "./negative-style.module.scss";
import { useState } from "react";

const handleClick = () => console.log("button clicked");


export default function AnswerButton({
  label = "yes",
  emoji = "😍",
  onClick = handleClick,
  positive = true,
}) 

{

  return (
    <button
      className={positive ? style.wrapper : negativeStyle.wrapper}
   
      onClick={onClick}
    >
      <div className={positive ? style.emoji : negativeStyle.emoji}>
        {emoji}
      </div>
      <span>{label}</span>
    </button>
  );
}
