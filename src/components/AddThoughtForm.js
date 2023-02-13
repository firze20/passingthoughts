import React, { useState } from "react";
import { generateId, getNewExpirationTime } from "../utilities/utilities";

export function AddThoughtForm(props) {
  const [textInput, setTextInput] = useState("");

  const handleTextChange = (event) => {
    console.log(event.target.value);
    setTextInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let thought = {
      id: generateId(),
      text: textInput,
      expiresAt: getNewExpirationTime(),
    };
    if (textInput.length > 0) {
      props.addThought(thought);
      setTextInput("");
    }
  };

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={textInput}
        onChange={handleTextChange}
      />
      <input type="submit" />
    </form>
  );
}
