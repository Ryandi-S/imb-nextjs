"use client";

import Image from "next/image";
import React from "react";

// Define the props the Input component accepts
type Props = {
  placeholder: string; // Placeholder text for the input
  type?: string; // Input type (default: "text")
  value: string; // Current value of the input field
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Change handler
  icon?: string; // Optional icon path to show inside the input
  name: string; // Name attribute for the input
};

const Input = ({
  type = "text", // Default input type
  value,
  onChange,
  placeholder,
  name,
  icon,
}: Props) => {
  // Render the input field with optional icon and styling
  return (
    <div className="relative">
      {/* Render the icon if provided */}
      {icon !== "" && (
        <Image
          src={icon ? icon : ""} // Icon path or empty if not provided
          width={100}
          height={100}
          className="h-4 w-4 absolute left-4 top-1/2 -translate-y-1/2"
          alt="Input Icon"
        />
      )}

      {/* The actual input field */}
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        className="w-full pl-12 pr-4 py-4 shadow-md/30 shadow-gray-500 rounded-lg text-[#262828] placeholder:text-[#262828] bg-white focus:outline-none"
      />
    </div>
  );
};

export default Input;
