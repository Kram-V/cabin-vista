"use client";

import React from "react";
import { useFormStatus } from "react-dom";
import Button from "../global/Button";

const CreateReservationButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      bgColor="bg-black"
      color="white"
      className="disabled:cursor-not-allowed"
    >
      {pending ? "Reserving..." : "Reserve Now"}
    </Button>
  );
};

export default CreateReservationButton;
