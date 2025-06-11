import { submitSignup } from "@/services/auth/signup";
import { setProfileUser } from "@/stores/slices/userSlice";
import { Users } from "@/types/user";
import validate from "@/utils/validateSignup";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";

/**
 * Define the useSignup hook
 * @returns The useSignup hook
 */
export const useSignup = () => {
  const dispatch = useDispatch();

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
    const { hasError, errors } = validate(dataForm);

    /**
     * If there is an error, set the error and return the errors
     * @param hasError - The hasError
     * @param errors - The errors
     * @returns The errors
     */
    if (hasError) {
      setError(errors);
      return errors;
    }

    /**
     * Submit the signup data
     * @param dataForm - The data form
     * @returns The res
     */
    const res = await submitSignup(dataForm);

    /**
     * Set the profile user and redirect to the home page
     * @param res - The res
     * @returns The res
     */
    dispatch(setProfileUser(res));
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
