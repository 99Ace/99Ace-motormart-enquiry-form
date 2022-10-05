import React, { useState } from "react";
import InputFormField from "./form/InputFormField";
import TextBoxFormField from "./form/TextBoxFormField";
import RadioFormField from "./form/RadioFormField";
import CheckBoxFormField from "./form/CheckBoxFormField";
import RadioFormFieldButton from "./form/RadioFormFieldButton";

export default function SampleEnquiryForm(props) {
  // State for form
  const [form, setForm] = useState({
    plateNumber: "",
    ownerId: "",
    description: "",
    petrolType: "Petrol",
    mileage : "",
    transmission: "Auto",
    accessories: ["Rims"],
    term : []
  });
  // Handle submission of form
  const submitForm = () => {
    console.log("Submitted");
    console.log(form);
  };
  // Event Handler
  const updateFormField = (e) => {
    console.log(e.target.value);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  // Checkbox Handler
  const updateCheckBox = (e) => {
    // make a clone of the current checkbox stateer4
    let currentState = form[e.target.name];
    let modifiedState;
    // check if it includes the clicked value
    if (!currentState.includes(e.target.value)) {
      // if does not include then add it
      modifiedState = [...currentState, e.target.value];
    } else {
      // remove it from state
      modifiedState = currentState.filter((item) => {
        return item !== e.target.value;
      });
    }
    // set back to state
    setForm({
      ...form,
      [e.target.name]: modifiedState,
    });
  };

  return (
    <>
      <div className="p-2">
        <h1>Sample Enquiry Form</h1>
        <InputFormField
          type="text"
          name="plateNumber"
          placeholder="car plate number"
          updateFormField={updateFormField}
          value={form.plateNumber}
          inputClassName="form-control p-1 px-2"
        />
        <InputFormField
          type="text"
          name="ownerId"
          placeholder="last 4 char (e.g 123D)"
          updateFormField={updateFormField}
          value={form.ownerId}
          inputClassName="form-control p-1 px-2"
        />
        <TextBoxFormField
          name="description"
          placeholder="other information, e.g accessories"
          updateFormField={updateFormField}
          value={form.description}
          inputClassName="form-control"
        />
        <RadioFormField
          name="petrolType"
          updateFormField={updateFormField}
          values={["Petrol", "Diesel", "Hybrid", "EV"]}
          fieldValue={form.petrolType}
        />
        <RadioFormField
          name="transmission"
          updateFormField={updateFormField}
          values={["Auto", "Manual"]}
          fieldValue={form.transmission}
        />
        <RadioFormFieldButton
          name="mileage"
          updateFormField={updateFormField}
          values={["<10,000km", "20,000km", "30,000km", "40,000km", "50,000km", "60,000km"
          , "70,000km", "80,000km", "90,000km", "100,000km", ">110,000km"]}
          fieldValue={form.mileage}
        />
        <CheckBoxFormField
          name="accessories"
          updateFormField={updateCheckBox}
          values={["Exhaust", "Rims", "Suspension"]}
          fieldValue={form.accessories}
        />
        <CheckBoxFormField
          name="term"
          updateFormField={updateCheckBox}
          values={["I agree to the Terms and Condition"]}
          fieldValue={form.term}
        />
        <button onClick={() => submitForm()} className="btn btn-dark mt-2">
          Submit
        </button>
      </div>
    </>
  );
}
