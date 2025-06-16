"use client";

import { ImbInputIcon } from "@/devlink";
import Image from "next/image";
import React from "react";

type Props = {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  icon: string;
  errorText: string;
};

/**
 * Render the input field with optional icon and styling
 * @param type - The type of input
 * @param value - The value of the input
 * @param onChange - The function to call when the input value changes
 * @param placeholder - The placeholder text for the input
 * @param icon - The icon to display in the input
 * @param errorText - The text to display if there is an error
 */
const Input = ({
  type,
  value,
  onChange,
  placeholder,
  icon,
  errorText,
}: Props) => {
  /**
   * Render the input field with optional icon and styling
   * @returns The input field with optional icon and styling
   */
  return (
    <ImbInputIcon
      label={value === "" ? placeholder : ""}
      errorText={errorText}
      type={type}
      image={icon}
      inputProps={{
        value,
        onInput: (e: React.ChangeEvent<HTMLInputElement>) => {
          onChange(e);
        },
      }}
    />
  );
};

export default Input;
