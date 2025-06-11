"use client";

import Button from "@/components/atoms/Button";
import Text from "@/components/atoms/typography/Text";
import { useSignup } from "@/hooks/auth/useSignup";
import { RootState } from "@/stores";
import { useSelector } from "react-redux";

const EliglePage = () => {
  const { users } = useSelector((state: RootState) => state.users);

  const { handleSubmit } = useSignup();

  return (
    <>
      <Text size="lg">User Name: {users?.firstName}</Text>
      <Text size="lg">User Email: {users?.email}</Text>
      <Text size="lg">User Phone: {users?.phoneNumber}</Text>

      <div className="flex w-full">
        <Button
          variant="primary"
          className="w-full mt-8"
          onClick={handleSubmit}
        >
          Confirm
        </Button>
      </div>
    </>
  );
};

export default EliglePage;
