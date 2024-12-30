"use client";

import Link from "next/link";
import Button from "../global/Button";
import Card from "../global/Card";
import StarRating from "./StarRating";
import { useState } from "react";
import { createRating } from "@/app/_lib/actions";

function RateForm({ cabin, user, isUserRated }) {
  const [rating, setRating] = useState("");

  const data = {
    cabin_id: cabin.id,
    rating: rating || 0,
  };

  const createRatingWithData = createRating.bind(null, data);

  return (
    <>
      {user && !isUserRated && (
        <Card className="w-[800px] mx-auto mb-10 p-10">
          <>
            <div className="flex items-center mb-6 justify-between">
              <h4 className="text-3xl font-medium ">
                {" "}
                Rate Cabin {cabin.name}
              </h4>

              <span className=" bg-green-200 px-6 py-4">
                You have logged in as{" "}
                <span className="font-medium">{user.name}</span>
              </span>
            </div>

            <form
              action={createRatingWithData}
              className="text-lg flex gap-5 flex-col"
            >
              <div className="space-y-2">
                <label>Please rate this cabin based on your experience</label>

                <StarRating onSetRating={setRating} />
              </div>

              <div className="space-y-2">
                <label htmlFor="comment">Your Comment</label>
                <textarea
                  name="comment"
                  id="comment"
                  className="px-5 py-3 w-full shadow-sm rounded-sm  "
                  rows="6"
                  required
                />
              </div>

              <div className="flex justify-end items-center gap-6">
                <Button bgColor="bg-black" color="white">
                  Submit
                </Button>
              </div>
            </form>
          </>
        </Card>
      )}

      {!user && (
        <Card className="w-[800px] mx-auto mb-10 p-10">
          <div className="text-center text-lg">
            Please{" "}
            <Link className=" underline" href="/login">
              login
            </Link>{" "}
            first before you rate this cabin
          </div>
        </Card>
      )}

      {user && isUserRated && (
        <div className="flex items-center justify-center gap-2 bg-green-200   py-4 text-2xl font-medium">
          <span>You have rated this cabin</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#fcc419"
            stroke="#fcc419"
            className="w-8"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
      )}
    </>
  );
}

export default RateForm;
