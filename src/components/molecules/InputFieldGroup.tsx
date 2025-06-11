"use client";

import Input from "@/components/atoms/Input";

// Define the props for the InputFieldGroup component
type Props = {
  label?: string; // Optional label above the input
  placeholder: string; // Placeholder text inside the input
  value: string; // Current value of the input
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Change handler
  type?: string; // Input type (e.g., text, email, password), default is "text"
  error?: string; // Optional error message to display below the input
  name: string; // Name attribute for the input
  icon?: string; // Optional icon displayed inside the input
};

const InputFieldGroup = ({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  error,
  name,
  icon,
}: Props) => {
  // Render the input field group with optional label and error
  return (
    <div className="flex flex-col gap-1.5">
      {/* Render the label if it exists */}
      {label && (
        <label className="text-md font-medium text-[#003C44] text-base mb-1.5">
          {label}
        </label>
      )}

      {/* 
        Reusable Input component -> Input.tsx
      */}
      <Input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        icon={icon}
      />

      {/* Error message with animated appearance/disappearance -> Toast.tsx */}
      <div
        className={`text-sm mt-1 transition-all duration-300 ease-in-out ${
          error
            ? "opacity-100 text-red-500 translate-y-0"
            : "opacity-0 -translate-y-1"
        }`}
      >
        {error || ""}
      </div>
    </div>
  );
};

export default InputFieldGroup;
