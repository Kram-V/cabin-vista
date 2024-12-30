import { formatCurrency } from "@/app/_utils/helpers";
import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

function isAlreadyBooked(range, datesArr) {
  return (
    range?.from &&
    range?.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

function DateSelector({ settings, cabin, bookedDates, range, setRange }) {
  // CHANGE
  const { regular_price, discount } = cabin;

  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;

  const num_nights = differenceInDays(displayRange?.to, displayRange?.from);
  const cabin_price = num_nights * (regular_price - discount);

  // SETTINGS
  const { min_booking_length, max_booking_length } = settings;

  const year = new Date().getFullYear() + 2;

  function handleRange(range) {
    setRange(range);
  }

  function handleResetRange() {
    setRange({
      from: undefined,
      to: undefined,
    });
  }

  return (
    <div className="flex flex-col justify-between border">
      <DayPicker
        className="place-self-center"
        onSelect={handleRange}
        selected={displayRange}
        disabled={(currentDate) =>
          isPast(currentDate) ||
          bookedDates.some((date) => isSameDay(date, currentDate))
        }
        mode="range"
        min={min_booking_length}
        max={max_booking_length}
        startMonth={new Date()}
        endMonth={new Date(year, 11)}
        captionLayout="dropdown"
        numberOfMonths={2}
      />

      <div className="flex items-center justify-between px-8 bg-black text-white h-[72px]">
        <div className="flex items-baseline gap-6">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-2xl">
                  {formatCurrency(regular_price - discount)}
                </span>
                <span className="line-through font-semibold text-primary-700">
                  {formatCurrency(regular_price)}
                </span>
              </>
            ) : (
              <span className="text-2xl">{formatCurrency(regular_price)}</span>
            )}
            <span className="">/night</span>
          </p>
          {num_nights ? (
            <>
              <p className="bg-black px-3 py-2 text-2xl">
                <span>&times;</span> <span>{num_nights}</span>
              </p>
              <p>
                <span className="text-lg font-bold uppercase">Total of </span>
                <span className="text-xl font-semibold">
                  {formatCurrency(cabin_price)}
                </span>
              </p>
            </>
          ) : null}
        </div>

        {displayRange?.from || displayRange?.to ? (
          <button
            className="border border-gray-800 py-2 px-4 text-sm font-semibold"
            onClick={handleResetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
