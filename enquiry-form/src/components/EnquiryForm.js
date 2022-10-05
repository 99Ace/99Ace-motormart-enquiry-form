import React, {useState} from 'react';
import FormField from './form/FormField';

export default function EnquiryForm(props) {
    const [form, setForm] = useState({
        plateNumber:"",
        ownerId:""
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
    <FormField 
        type="text"
        name="plateNumber"
        placeholder="car plate number"
        updateFormField = {updateFormField}
        value={form.plateNumber}
    />
    <FormField 
        type="text"
        name="ownerId"
        placeholder="last 4 char (e.g 123D)"
        updateFormField = {updateFormField}
        value={form.ownerId}
    />
    <button onClick={ ()=>submitForm() }>Submit</button>
    </>);
}