"use client";

import Input from "@/components/atoms/Input";
import { Fragment } from "react";

// Define the props for the InputFieldGroup component
type Props = {
  type: string; // Optional icon displayed inside the input
  placeholder: string;
  errorText: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: string;
};

const InputFieldGroup = ({
  type,
  placeholder,
  errorText,
  value,
  onChange,
  icon,
}: Props) => {
  // Render the input field group with optional label and error
  return (
    <Fragment>
      <Input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        icon={icon}
        errorText={errorText}
      />
    </Fragment>
  );
};

export default InputFieldGroup;
