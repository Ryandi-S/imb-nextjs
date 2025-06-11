import { Users } from "@/types/user";

// Regular expression for validating email addresses
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Define the mode for validation
type Mode = "all" | "change";

// Validate the signup data
/**
 * Validate the signup data
 * @param data - The signup data to validate
 * @param mode - The mode for validation
 * @param targetField - The target field to validate
 * @returns The validation result
 */
const validate = (
  data: Users,
  mode: Mode = "all",
  targetField?: keyof Users
): {
  hasError: boolean;
  errors: Users;
  singleError?: string;
} => {
  const errors: Users = { firstName: "", email: "", phoneNumber: "" };
  let hasError = false;

  // Check if the field is required and if the value is valid
  const check = (field: keyof Users, value: string) => {
    if (field === "firstName" && !value) {
      return "First name wajib diisi.";
    }

    if (field === "email") {
      if (!value) return "Email wajib diisi.";
      if (!emailRegex.test(value)) return "Email tidak valid.";
    }

    if (field === "phoneNumber") {
      if (!value) return "Phone number wajib diisi.";
      if (isNaN(Number(value))) return "Phone number hanya boleh berisi angka.";
      if (value.length < 10) return "Phone number minimal 10 digit.";
    }

    return "";
  };

  // If the mode is "change" and there is a target field, check if the field is required and if the value is valid
  if (mode === "change" && targetField) {
    const errorMsg = check(targetField, data[targetField]);
    return {
      hasError: !!errorMsg,
      errors,
      singleError: errorMsg,
    };
  }

  // Check if the field is required and if the value is valid
  (Object.keys(data) as (keyof Users)[]).forEach((key) => {
    const msg = check(key, data[key]);
    if (msg) {
      errors[key] = msg;
      hasError = true;
    }
  });

  // Return the validation result
  return { hasError, errors };
};

export default validate;
