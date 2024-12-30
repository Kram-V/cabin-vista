import React from "react";
import { auth } from "../_lib/auth";

export const metadata = {
  title: "Account",
};

export const revalidate = 0;

const Page = async () => {
  const session = await auth();
  const { user } = session || {};

  return (
    <div className="w-[1400px] mx-auto mt-10">
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Welcome, {user.name}!
      </h2>
    </div>
  );
};

export default Page;
