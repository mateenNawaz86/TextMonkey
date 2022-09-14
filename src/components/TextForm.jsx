import React, { useState } from "react";

const TextForm = (props) => {
  const [enteredText, setEnteredText] = useState("");

  // this function used for change the entered value to upperCase
  const upperCaseHandler = () => {
    setEnteredText(enteredText.toUpperCase());
    props.alertShow("Text Converted to uppercase!", "success");
  };

  // this function used for getting the entered value
  const onChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };

  // function for clear the entered text
  const clrTextHandler = () => {
    setEnteredText("");
    props.alertShow("All text clear!", "danger");
  };

  // function for remove the extra spaces
  const removeSpaceHandler = () => {
    const newText = enteredText.split(/[ ]+/);
    setEnteredText(newText.join(" "));
    props.alertShow("Remove all extra spaces successfully!", "primary");
  };

  // Function for coping the entire text
  const copyTextCHandler = () => {
    const inpText = document.getElementById("enteredText");
    inpText.select();
    navigator.clipboard.writeText(inpText.value);
    props.alertShow("Text is copied successfully!", "success");
  };

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1 className="text-primary">{props.heading}</h1>
          <textarea
            className="form-control"
            id="enteredText"
            rows="7"
            value={enteredText}
            onChange={onChangeHandler}
            placeholder="Enter your text here"
            style={{
              backgroundColor: props.toggleMode === "dark" ? "#222222" : "#fff",
              color: props.toggleMode === "dark" ? "#fff" : "#222222",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary " onClick={upperCaseHandler}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={clrTextHandler}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={copyTextCHandler}>
          Copy Text
        </button>
        <button className="btn btn-primary " onClick={removeSpaceHandler}>
          Remove Extra Spaces
        </button>
      </div>

      <div
        className={`container my-5 ${`text-${
          props.toggleMode === "dark" ? "light" : "dark"
        }`}`}
      >
        <h1>Summary of your text</h1>
        <p>
          {enteredText.length > 0 ? enteredText.split(" ").length : ""} words
          and {enteredText.length} characters.
        </p>
        <small>
          It will take {0.008 * enteredText.split(" ").length} minutes to read
          the given text.
        </small>

        <h4>Preview your text</h4>
        <small>
          {enteredText.length <= 0
            ? "Enter your text for preview"
            : enteredText}
        </small>
      </div>
    </>
  );
};

export default TextForm;
