import React from "react";

export default function InputFormField(props) {
  return (
    <>
      <div>
        <input
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.updateFormField}
          value={props.value}
        />
      </div>
    </>
  );
}
