import UpdateProfileForm from "@/app/_components/account/UpdateProfileForm";
import { auth } from "@/app/_lib/auth";
import { getCountries, getGuest } from "@/app/_lib/data-service";
import SelectCountry from "@/starter/components/SelectCountry";
import React from "react";

export const metadata = {
  title: "Profile",
};

export const revalidate = 0;

const Page = async () => {
  const session = await auth();
  const userDetails = await getGuest(session.user.email);

  return (
    <div className="w-[1400px] mx-auto mt-10">
      <h2 className="font-semibold text-2xl mb-4">Update your profile</h2>

      <p className="text-lg mb-8">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <UpdateProfileForm
        userDetails={userDetails}
        selectCountry={
          <SelectCountry
            name="nationality"
            id="nationality"
            className="px-5 py-3 w-full shadow-sm rounded-sm"
            defaultCountry={userDetails.nationality}
          />
        }
      />
    </div>
  );
};

export default Page;
