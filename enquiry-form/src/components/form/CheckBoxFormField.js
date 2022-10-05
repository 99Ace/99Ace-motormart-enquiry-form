import React from "react";

export default function CheckBoxFormField(props) {
  return (
    <>
      <div className="d-flex gap-2 mt-2">
        {props.values.map((item, index) => {
          return (
            <div key={index}>
              <div className="form-check">
                <input
                  type="checkbox"
                  name={props.name}
                  onChange={props.updateFormField}
                  checked={props.fieldValue.includes(item)}
                  value={item}
                  className="form-check-input"
                />
                <label className="form-check-label" htmlFor={props.name}>
                  {item}
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
