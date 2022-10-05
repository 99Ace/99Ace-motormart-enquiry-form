import React from 'react';

export default function FormField(props) {
    return (<>
    <input 
        type={props.type} 
        name={props.name} 
        placeholder={props.placeholder} 
        onChange={props.updateFormField}
        value={props.value}
        />
    </>);
}