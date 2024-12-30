import UpdateReservationButton from "@/app/_components/account/UpdateReservationButton";
import { updateReservation } from "@/app/_lib/actions";
import { getBooking } from "@/app/_lib/data-service";
import React from "react";

export const revalidate = 0;

const Page = async ({ params }) => {
  const { id } = await params;
  const {
    cabins: { max_capacity },
    observations,
    num_guests,
  } = await getBooking(id);

  return (
    <div className="w-[1400px] mx-auto mt-10">
      <h2 className="font-semibold text-2xl mb-7">Edit Reservation #{id}</h2>
      <form
        action={updateReservation}
        className="py-8 px-12 text-lg flex gap-6 flex-col"
      >
        <div className="space-y-2">
          <label htmlFor="num_guests">How many guests?</label>
          <select
            name="num_guests"
            id="num_guests"
            className="px-5 py-3 w-full shadow-sm rounded-sm"
            defaultValue={num_guests}
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: max_capacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            className="px-5 py-3 w-full shadow-sm rounded-sm"
            defaultValue={observations}
          />
        </div>

        <input name="id" value={id} type="hidden" />

        <div className="flex justify-end items-center gap-6">
          <UpdateReservationButton />
        </div>
      </form>
    </div>
  );
};

export default Page;
