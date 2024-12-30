import React from "react";
import SignInButton from "../_components/global/SignInButton";

export const metadata = {
  title: "Login",
};

const Page = () => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center min-h-screen">
      <h2 className="text-3xl font-semibold">
        Sign in to access your guest area
      </h2>

      <SignInButton />
    </div>
  );
};

export default Page;
