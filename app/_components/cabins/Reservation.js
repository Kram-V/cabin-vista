import { getBookedDatesByCabinId, getSettings } from "@/app/_lib/data-service";

import GuestReservation from "./GuestReservation";
import LoginMessage from "../global/LoginMessage";

const Reservation = async ({ cabin, user }) => {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  return (
    <>
      {user ? (
        <GuestReservation
          settings={settings}
          bookedDates={bookedDates}
          cabin={cabin}
          userName={user.name}
        />
      ) : (
        <LoginMessage />
      )}
    </>
  );
};

export default Reservation;
