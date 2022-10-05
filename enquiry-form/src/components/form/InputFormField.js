import React from "react";

export default function InputFormField(props) {
  return (
    <>
      <div className="mb-2">
        <input
          // input type property
          type={props.type}
          // name property
          name={props.name}
          // placeholder property
          placeholder={props.placeholder}
          // pass the event handler for the form
          onChange={props.updateFormField}
          // value for 2-way binding
          value={props.value}

          // using bootstrap class
          className={props.inputClassName}
        />
      </div>
    </>
  );
}
