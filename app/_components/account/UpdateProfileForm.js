"use client";

import { updateProfile } from "@/app/_lib/actions";
import React from "react";
import { useFormStatus } from "react-dom";
import Button from "../global/Button";

const UpdateProfileForm = ({ userDetails, selectCountry }) => {
  const { fullname, national_id, email } = userDetails;

  return (
    <form
      action={updateProfile}
      className="bg-primary-900 text-lg flex gap-6 flex-col"
    >
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality">Where are you from?</label>
        </div>

        {selectCountry}
      </div>

      <div className="space-y-2">
        <label htmlFor="nationalID">National ID number</label>
        <input
          defaultValue={national_id}
          name="national_id"
          className="px-5 py-3 w-full shadow-sm rounded-sm border border-gray-500 focus:outline-none focus:border-blue-500 focus:border-2"
        />
      </div>

      <div className="space-y-2">
        <label>Full name</label>
        <input
          name="fullname"
          defaultValue={fullname}
          disabled
          className="px-5 py-3 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label>Email address</label>
        <input
          name="email"
          defaultValue={email}
          disabled
          className="px-5 py-3 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400"
        />
      </div>

      <div className="flex justify-end items-center gap-6">
        <UpdateProfileButton />
      </div>
    </form>
  );
};

function UpdateProfileButton() {
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
}

export default UpdateProfileForm;
