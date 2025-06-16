"use client";

import Button from "@/components/atoms/Button";
import Toast from "@/components/atoms/Toast";
import Heading from "@/components/atoms/typography/Heading";
import Text from "@/components/atoms/typography/Text";
import { useSignup } from "@/hooks/auth/useSignup";
import { useEligible } from "@/hooks/eligible/useEligible";
import { Status } from "@/types/status";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ImbButtonPrimary } from "@/devlink/ImbButtonPrimary";
import InputFieldGroup from "@/components/molecules/InputFieldGroup";

/**
 * Define the Home component that displays a welcome message and a list of todos
 * @returns The Home component
 */
export default function Home() {
  /**
   * Get all form handlers and state from the useSignup custom hook
   * @returns The useSignup hook
   */
  const { handleOnChange, dataForm, error } = useSignup();

  const { handleToEligible } = useEligible();

  /**
   * Toast message for feedback
   * @returns The toast message
   */
  const [toastMsg, setToastMsg] = useState<string>("");

  /**
   * Handle the sign-up form submission
   * @returns The onSubmit function
   */
  const onSubmit = async () => {
    handleToEligible(dataForm);
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
        src="/app/images/banner.png"
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

      {/* First name input */}
      <InputFieldGroup
        type="text"
        placeholder="First name"
        value={dataForm.firstName}
        onChange={handleOnChange("firstName")}
        icon="/app/icons/ic_profile.svg"
        errorText={error.firstName}
      />

      {/* Mobile input */}
      <InputFieldGroup
        type="text"
        placeholder="Mobile"
        value={dataForm.phoneNumber}
        onChange={handleOnChange("phoneNumber")}
        icon="/app/icons/ic_phone.svg"
        errorText={error.phoneNumber}
      />

      {/* Email input */}
      <InputFieldGroup
        type="text"
        placeholder="Email"
        value={dataForm.email}
        onChange={handleOnChange("email")}
        icon="/app/icons/ic_mail.svg"
        errorText={error.email}
      />

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

      <ImbButtonPrimary
        buttonText="Continue"
        variant="Base"
        runtimeProps={{
          disabled: "",
          onClick: () => {
            onSubmit();
          },
        }}
      />
    </>
  );
}
