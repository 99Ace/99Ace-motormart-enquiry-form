import React from "react";

export default function TextBoxFormField(props) {
  return (
    <>
      <div>
        <textarea
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.updateFormField}
          value={props.value}
        ></textarea>
      </div>
    </>
  );
}
