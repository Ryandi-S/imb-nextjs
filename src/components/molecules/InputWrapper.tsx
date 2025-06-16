"use client";
import { ImbInputIcon } from "@/devlink/ImbInputIcon"
import { useState, Fragment } from "react";

// Define the props for the InputFieldGroup component
type Props = {
  type: string; // Optional icon displayed inside the input
};

const InputWrapper = ({
  type,
}: Props) => {
  const [state, setState] = useState("");

  const isValid = (type: string) => {
    if (state === ""){
      return false;
    }
    if (type === "email"){
      return false;
    }
    return true;
  }

  // Render the input field group with optional label and error
  return (
    <Fragment> 
      {/* className={`input-wrapper ${state !== "" ? "has-value" : ""} ${isValid(type) ? "is-valid" : ""}`}> */}
      <ImbInputIcon 
        type={type}
        inputProps={{ 
          onInput: (e: React.ChangeEvent<HTMLInputElement>) => {
            console.log("on input : ", e.target.value);
            setState(e.target.value)
          }
        }} 
        errorMessageProps={{
          style: {
            "display": "none"
          }
        }}
      />
    </Fragment>
  );
};

export default InputWrapper;
