import React from "react";

export default function RadioFormFieldButton(props) {
  return (
    <>
      <div className="row row-cols-3 mt-2" style={{gap:"4px 0"}}>
        {props.values.map((item, index) => {
          return (
            <div className="col" key={index}>
                <input
                  type="radio"
                  name={props.name}
                  onChange={props.updateFormField}
                  checked={item === props.fieldValue}
                  value={item}
                  className="btn-check"
                  id={item}
                  autoComplete="off"
                />
                <label className="btn btn-sm btn-light w-100 text-center" htmlFor={item}>
                  {item}
                </label>
            </div>
          );
        })}
      </div>
    </>
  );
}
