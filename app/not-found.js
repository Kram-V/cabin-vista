import React from "react";
import Button from "./_components/global/Button";

const NotFound = () => {
  return (
    <main className="flex flex-col justify-center items-center space-y-6 min-h-screen">
      <h1 className="text-3xl font-semibold">
        This page could not be found :(
      </h1>

      <Button btn="link" link="/" bgColor="bg-black" color="white">
        Go back home
      </Button>
    </main>
  );
};

export default NotFound;
