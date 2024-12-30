import { createReservation } from "@/app/_lib/actions";
import { differenceInDays } from "date-fns";
import CreateReservationButton from "../cabins/CreateReservationButton";
import { convertToIsoStringLocalTime, formatDate } from "@/app/_utils/helpers";

function ReservationForm({ cabin, range, userName }) {
  const { max_capacity, regular_price, discount, id } = cabin;

  const start_date = range?.from;
  const end_date = range?.to;

  const num_nights = differenceInDays(end_date, start_date) || 0;
  const cabin_price = num_nights * (regular_price - discount);
  const extra_price = 0;
  const total_price = cabin_price;
  const status = "unconfirmed";
  const has_breakfast = false;
  const is_paid = false;
  const cabin_id = id;

  const data = {
    start_date: start_date
      ? convertToIsoStringLocalTime(start_date)
      : undefined,
    end_date: end_date ? convertToIsoStringLocalTime(end_date) : undefined,
    num_nights,
    cabin_price,
    total_price,
    extra_price,
    status,
    has_breakfast,
    is_paid,
    cabin_id,
  };

  const createReservationWithData = createReservation.bind(null, data);

  return (
    <div className="bg-gray-100">
      <div className="bg-green-300 px-16 py-4 flex justify-between items-center">
        <p>
          Logged in as <span className="font-medium">{userName}</span>
        </p>

        {(range?.to || range?.from) && (
          <p className="text-center">
            {range?.from ? formatDate(String(range?.from)) : ""}{" "}
            {`${range?.to ? "to " : ""}`}
            {range?.to ? formatDate(String(range?.to)) : ""}
          </p>
        )}
      </div>

      <form
        action={createReservationWithData}
        className="py-10 px-16 text-lg flex gap-5 flex-col"
      >
        <div className="space-y-2">
          <label htmlFor="num_guests">How many guests?</label>
          <select
            name="num_guests"
            id="num_guests"
            className="px-5 py-3 w-full shadow-sm rounded-sm"
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
            id="observations"
            className="px-5 py-3 w-full shadow-sm rounded-sm"
            placeholder="Any pets, allergies, special requirements, etc.?"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          {(!start_date || !end_date) && (
            <p className="text-lg">Start by selecting dates</p>
          )}

          {start_date && end_date && <CreateReservationButton />}
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
