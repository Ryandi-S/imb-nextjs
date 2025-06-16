"use client";

import Button from "@/components/atoms/Button";
import Text from "@/components/atoms/typography/Text";
import { useSignup } from "@/hooks/auth/useSignup";
import { RootState } from "@/redux/stores";
import { useAppSelector } from "@/redux/hooks/useAppSelector";
import { ImbButtonPrimary } from "@/devlink/ImbButtonPrimary";

/**
 * Eligible Page
 * @returns The Eligible Page
 */
const EliglePage = () => {
  const { users } = useAppSelector((state: RootState) => state.users);

  /**
   * Handle the submit event
   * @returns The handleSubmit function
   */
  const { handleSubmit, isLoading } = useSignup();

  return (
    <>
      <div className="bg-gray-600 w-full h-8 my-3 rounded-lg" />

      <Text size="lg">User Name: {users?.firstName}</Text>
      <Text size="lg">User Email: {users?.email}</Text>
      <Text size="lg">User Phone: {users?.phoneNumber}</Text>

      <ImbButtonPrimary
        buttonText={isLoading ? "Loading..." : "Confirm"}
        variant="Base"
        runtimeProps={{
          onClick: () => {
            handleSubmit();
          },
        }}
      />
    </>
  );
};

export default EliglePage;
