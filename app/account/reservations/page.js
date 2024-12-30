import ReservationCard from "@/app/_components/global/ReservationCard";
import { auth } from "@/app/_lib/auth";
import { getBookings } from "@/app/_lib/data-service";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Reservations",
};

export const revalidate = 0;

const Page = async () => {
  const session = await auth();
  const bookings = await getBookings(session.user.id);

  return (
    <div className="w-[1400px] mx-auto mt-10">
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Your reservations
      </h2>

      {bookings.length === 0 ? (
        <p className="text-lg">
          You have no reservations yet. Check out our{" "}
          <Link className="underline text-accent-500" href="/cabins">
            luxury cabins &rarr;
          </Link>
        </p>
      ) : (
        <ul className="space-y-6">
          {bookings.map((booking) => (
            <ReservationCard booking={booking} key={booking.id} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Page;
