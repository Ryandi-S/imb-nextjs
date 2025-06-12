"use client";
import { ImbInputIcon } from "@/devlink/ImbInputIcon"
import { useState } from "react";

// Define the props for the InputFieldGroup component
type Props = {
  type: string; // Optional icon displayed inside the input
};

const InputWrapper = ({
  type,
}: Props) => {
  const [state, setState] = useState("");

  const isValid = (type: string) => {
    if (type === "email"){
      return false;
    }
    return true;
  }

  // Render the input field group with optional label and error
  return (
    <div className={`input-wrapper ${state !== "" ? "has-value" : ""} ${isValid(type) ? "is-valid" : ""}`}>
      <ImbInputIcon 
        type={type}
        runtimeProps={{ 
          onInput: (e: React.ChangeEvent<HTMLInputElement>) => {
            console.log("on input : ", e.target.value);
            setState(e.target.value)
          }
        }} 
      />
    </div>
  );
};

export default InputWrapper;
