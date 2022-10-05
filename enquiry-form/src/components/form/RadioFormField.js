import React from "react";

export default function RadioFormField(props) {
  return (
    <>
      <div>
        {props.values.map((item) => {
          return (
            <>
              <input
                type={props.type}
                name={props.name}
                onChange={props.updateFormField}
                checked={ item===props.fieldValue}
                value={item}
              />
              {item} 
            </>
          );
        })}
      </div>
    </>
  );
}
