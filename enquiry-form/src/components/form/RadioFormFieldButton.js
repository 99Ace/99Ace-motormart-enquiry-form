import React from "react";

export default function RadioFormFieldButton(props) {
  const colsInRow=(col)=> {
    return(
      `row row-cols-${col} mt-2`
    )
  }
  return (
    <>
      <div className={colsInRow(props.cols)} style={{gap:"4px 0"}}>
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
                <label className="btn btn-sm btn-light w-100 text-center p-0" htmlFor={item}>
                  {item}
                </label>
            </div>
          );
        })}
      </div>
    </>
  );
}
