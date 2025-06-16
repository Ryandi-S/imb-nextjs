import { RootState } from "@/redux/stores";
import { Users } from "@/types/user";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAppSelector } from "@/redux/hooks/useAppSelector";
import authRepository from "@/repository/auth";

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
      return "First name is required.";
    }

    if (field === "email") {
      if (!value) return "Email is required.";
      if (!emailRegex.test(value)) return "Email is not valid.";
    }

    if (field === "phoneNumber") {
      if (!value) return "Phone number is required.";
      if (isNaN(Number(value))) return "Phone number must be a number.";
      if (value.length < 10) return "Phone number must be at least 10 digits.";
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
  const { users } = useAppSelector((state: RootState) => state.users);

  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    /**
     * Submit the signup data
     * @param dataForm - The data form
     * @returns The res
     */
    try {
      const res = await authRepository.signup(users as Users);
      console.log("res signup", res);
      router.push("/success");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
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

  return { handleSubmit, handleOnChange, dataForm, error, isLoading };
};
