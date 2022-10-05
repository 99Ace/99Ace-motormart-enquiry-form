import React, {useState} from 'react';
import InputFormField from './form/InputFormField';
import TextBoxFormField from './form/TextBoxFormField';
import RadioFormField from './form/RadioFormField';

export default function EnquiryForm(props) {
    const [form, setForm] = useState({
        plateNumber:"",
        ownerId:"",
        description:"",
        petrolType:"Petrol",
        transmission:"Auto"
    });
    
    const submitForm =()=> {
        console.log("Submitted")
        console.log(form);
    }
    const updateFormField =(e)=> {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }
    
    return (<>
    <h1>Enquiry Form</h1>
    <InputFormField 
        type="text"
        name="plateNumber"
        placeholder="car plate number"
        updateFormField = {updateFormField}
        value={form.plateNumber}
    />
    <InputFormField 
        type="text"
        name="ownerId"
        placeholder="last 4 char (e.g 123D)"
        updateFormField = {updateFormField}
        value={form.ownerId}
    />

    <TextBoxFormField
        name="description"
        placeholder="other information, e.g accessories"
        updateFormField = {updateFormField}
        value={form.description}
    />

    <RadioFormField 
        type="radio"
        name="petrolType"
        updateFormField = {updateFormField}
        values={["Petrol","Diesel","Hybrid","EV"]}
        fieldValue={form.petrolType}
    />

    <RadioFormField 
        type="radio"
        name="transmission"
        updateFormField = {updateFormField}
        values={["Auto", "Manual"]}
        fieldValue={form.transmission}
    />
   
    <button onClick={ ()=>submitForm() }>Submit</button>
    </>);
}