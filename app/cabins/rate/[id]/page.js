import Cabin from "@/app/_components/cabins/Cabin";
import RateForm from "@/app/_components/cabins/RateForm";
import Card from "@/app/_components/global/Card";
import { auth } from "@/app/_lib/auth";
import { getCabin, getRatings } from "@/app/_lib/data-service";
import React from "react";

export const revalidate = 0;

const Page = async ({ params }) => {
  const { id: cabinId } = await params;
  const [cabin, session, ratings] = await Promise.all([
    getCabin(cabinId),
    auth(),
    getRatings(),
  ]);

  const { user } = session || {};

  const filteredRatings = ratings.filter(
    (rating) => rating.cabin_id === Number(cabinId)
  );

  const isUserRated = filteredRatings.some(
    (rating) => rating.guest_id === user?.id
  );

  console.log(filteredRatings);

  return (
    <div className="w-[1400px] mx-auto pt-[100px] pb-[30px]">
      <Cabin cabin={cabin} />

      <div className="flex flex-col gap-16">
        <h4 className="text-3xl font-semibold text-center">
          Rate your stay and share your thoughts! Your feedback helps us improve
          and ensures <br /> every guest has an exceptional experience.
        </h4>

        <div className="grid grid-cols-3 gap-10 mb-8">
          {filteredRatings.length > 0 &&
            filteredRatings.map((rating) => (
              <Card key={rating.id}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-20 w-20 rounded-full bg-gray-400"></div>

                  <div className="flex flex-col">
                    <span>{rating.guests.fullname}</span>

                    <span className="flex items-center">
                      {Array.from({ length: 5 }).map((_, index) =>
                        index < rating.rating ? (
                          <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#fcc419"
                            className="size-6"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1}
                            stroke="#fcc419"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                            />
                          </svg>
                        )
                      )}
                    </span>
                  </div>
                </div>

                <p>{rating.comment}</p>
              </Card>
            ))}
        </div>

        {!filteredRatings.length && (
          <div className="text-center mb-28 mt-10 text-2xl">NOT YET RATED</div>
        )}

        <RateForm cabin={cabin} user={user} isUserRated={isUserRated} />
      </div>
    </div>
  );
};

export default Page;
