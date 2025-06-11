import { signupService } from "@/services/auth/signup";
import { RootState } from "@/stores";
import { Users } from "@/types/user";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

/**
 * Define the mode for validation
 * @returns The mode for validation
 */
type Mode = "all" | "change";

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

  // Regular expression for validating email addresses
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

/**
 * Define the useSignup hook
 * @returns The useSignup hook
 * @returns The handleSubmit function
 * @returns The handleOnChange function
 * @returns The dataForm
 * @returns The error  and other functions
 */
export const useSignup = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state: RootState) => state.users);

  /**
   * Define the data form
   * @returns The data form
   */
  const [dataForm, setDataForm] = useState<Users>({
    firstName: "",
    email: "",
    phoneNumber: "",
  });

  /**
   * Define the error
   * @returns The error
   */
  const [error, setError] = useState<Users>({
    firstName: "",
    email: "",
    phoneNumber: "",
  });

  /**
   * Define the router
   * @returns The router
   */
  const router = useRouter();

  /**
   * Handle the submit event
   * @returns The handleSubmit function
   */
  const handleSubmit = async () => {
    /**
     * Submit the signup data
     * @param dataForm - The data form
     * @returns The res
     */
    await signupService(users as Users, dispatch);

    router.push("/");
    return "success";
  };

  /**
   * Handle the onChange event
   * @param field - The field to update
   * @returns The handleOnChange function
   */
  const handleOnChange =
    (field: keyof Users) => (e: React.ChangeEvent<HTMLInputElement>) => {
      /**
       * Get the value from the input
       * @param e - The event
       * @returns The value
       */
      const value = e.target.value;

      /**
       * Set the data form
       */
      setDataForm((prev) => ({ ...prev, [field]: value }));

      /**
       * Validate the data form
       * @param dataForm - The data form
       * @param field - The field to update
       * @returns The singleError
       */
      const { singleError } = validate(
        { ...dataForm, [field]: value },
        "change",
        field
      );

      /**
       * Set the error
       * @param prev - The previous error
       * @param field - The field to update
       * @returns The error
       */
      setError((prev) => ({ ...prev, [field]: singleError ?? "" }));
    };

  return { handleSubmit, handleOnChange, dataForm, error };
};
