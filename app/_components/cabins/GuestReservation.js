"use client";

import React, { useState } from "react";
import DateSelector from "../global/DateSelector";
import ReservationForm from "../global/ReservationForm";

const GuestReservation = ({ settings, bookedDates, cabin, userName }) => {
  const [range, setRange] = useState({
    from: undefined,
    to: undefined,
  });

  // console.log("NUMBER OF GUESTS: ", range);

  return (
    <div className="grid grid-cols-2 gap-10">
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        cabin={cabin}
        range={range}
        setRange={setRange}
      />
      <ReservationForm range={range} cabin={cabin} userName={userName} />
    </div>
  );
};

export default GuestReservation;
