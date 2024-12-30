"use client";

import React from "react";
import Button from "./_components/global/Button";

const Error = ({ error, reset }) => {
  return (
    <main className="flex justify-center items-center flex-col gap-6 mt-24">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">{error.message}</p>

      <Button
        btn="link"
        link="/"
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
      >
        Go to Home Page
      </Button>
    </main>
  );
};

export default Error;
