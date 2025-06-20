"use client";

import Button from "@/components/atoms/Button";
import Toast from "@/components/atoms/Toast";
import Heading from "@/components/atoms/typography/Heading";
import Text from "@/components/atoms/typography/Text";
import InputFieldGroup from "@/components/molecules/InputFieldGroup";
import { useSignup } from "@/hooks/useSignup";
import { Status } from "@/types/status";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/**
 * Define the SignUpPage component
 * @returns The SignUpPage component
 */
const SignUpPage = () => {
  /**
   * Get all form handlers and state from the useSignup custom hook
   * @returns The useSignup hook
   */
  const { handleSubmit, handleOnChange, dataForm, error } = useSignup();

  /**
   * Toast message for feedback
   * @returns The toast message
   */
  const [toastMsg, setToastMsg] = useState<string>("");

  /**
   * Loading state for the submit button
   * @returns The loading state
   */
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Handle the sign-up form submission
   * @returns The onSubmit function
   */
  const onSubmit = async () => {
    setIsLoading(true); // Start loading
    const result = await handleSubmit(); // Attempt to submit the form
    setIsLoading(false); // Stop loading

    /**
     * If successful, show toast message
     * @param result - The result
     * @returns The toast message
     */
    if (result === Status.SUCCESS) {
      setToastMsg("success");
    }
  };

  return (
    <>
      {/* Show toast if there's a message */}
      {toastMsg && (
        <Toast
          message={toastMsg}
          type={Status.SUCCESS}
          onClose={() => setToastMsg("")}
        />
      )}

      {/* Banner image at the top of the page */}
      <Image
        src="/images/banner.png"
        alt="sign-up-bg"
        width={1000}
        height={1000}
        className="max-w-[40rem] w-full h-full max-h-[40rem] sm:h-10/12 sm:w-1/h-10/12 object-cover mx-auto"
        quality={100}
      />

      {/* Page title section */}
      <div className="flex items-center justify-center flex-wrap gap-2 mb-1">
        <Heading level={1} className="text-[32px] text-center text-[#008D8D]">
          Sign up
        </Heading>
        <Heading
          level={4}
          className="text-[32px] text-center font-medium text-[#003C44]"
        >
          to IMB Bank
        </Heading>
      </div>

      {/* Subtitle */}
      <Text className="text-center text-base text-[#003C44] mb-8">
        Fast, secure and user friendly banking.
      </Text>

      {/* Input fields */}
      <div className="flex flex-col gap-2.5">
        {/* First name input */}
        <InputFieldGroup
          placeholder="First name"
          value={dataForm.firstName}
          name="firstName"
          onChange={handleOnChange("firstName")}
          icon="/icons/ic_profile.svg"
          error={error.firstName}
        />

        {/* Phone number input */}
        <InputFieldGroup
          placeholder="Mobile"
          value={dataForm.phoneNumber}
          name="phoneNumber"
          onChange={handleOnChange("phoneNumber")}
          error={error.phoneNumber}
          icon="/icons/ic_phone.svg"
        />

        {/* Email input */}
        <InputFieldGroup
          placeholder="Email"
          value={dataForm.email}
          name="email"
          icon="/icons/ic_mail.svg"
          onChange={handleOnChange("email")}
          error={error.email}
        />
      </div>

      {/* Terms and Privacy links */}
      <div className="mt-10 mb-5 flex-wrap flex items-center gap-1">
        <Text className="text-xs font-normal text-[#262828]">
          By clicking Continue, you accept our
        </Text>
        <Link href="#" className="text-xs font-normal underline text-[#008D8D]">
          Terms of Use
        </Link>
        <Text className="text-xs font-normal text-[#262828]">and</Text>
        <Link href="#" className="text-xs font-normal underline text-[#008D8D]">
          Privacy Policy
        </Link>
      </div>

      {/* Submit button */}
      <Button
        variant="primary"
        className="w-full font-semibold"
        onClick={onSubmit}
      >
        {isLoading ? "Loading..." : "Continue"}
      </Button>
    </>
  );
};

export default SignUpPage;
