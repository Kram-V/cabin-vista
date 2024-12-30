"use client";

import React from "react";
import { useFormStatus } from "react-dom";
import Button from "../global/Button";

const UpdateReservationButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      bgColor="bg-black"
      color="white"
      className="disabled:cursor-not-allowed"
    >
      {pending ? "Updating..." : "Update Profile"}
    </Button>
  );
};

export default UpdateReservationButton;
