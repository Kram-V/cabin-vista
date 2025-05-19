import React from "react";
import Button from "../global/Button";
import Card from "../global/Card";
import { getFirstThreeTestimonials } from "@/app/_lib/data-service";
import {
  getFirstTwoCapitalLetterFromWords,
  randomNumber,
} from "@/app/_utils/helpers";

const bgColors = [
  "#94a3b8",
  "#f87171",
  "#fb923c",
  "#fbbf24",
  "#a3e635",
  "#4ade80",
  "#34d399",
  "#2dd4bf",
  "#22d3ee",
  "#38bdf8",
  "#60a5fa",
  "#818cf8",
  "#a78bfa",
  "#c084fc",
  "#e879f9",
  "#f472b6",
  "#fb7185",
];

const Testimonials = async () => {
  const testimonials = await getFirstThreeTestimonials();

  return (
    <div>
      <div className="w-[1400px] mx-auto text-black gap-10 py-16">
        <div>
          <h2 className="text-5xl font-medium mb-6">Featured Testimonials</h2>

          <div className="grid grid-cols-3 gap-10 mb-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id}>
                <div className="flex items-center gap-4 mb-4">
                  <div
                    style={{ backgroundColor: bgColors[randomNumber()] }}
                    className="h-20 w-20 rounded-full flex justify-center items-center text-2xl"
                  >
                    {getFirstTwoCapitalLetterFromWords(testimonial.fullname)}
                  </div>

                  <div className="flex flex-col">
                    <span>{testimonial.fullname}</span>
                    <span className="text-[14px] text-gray-400">
                      {testimonial.position}
                    </span>
                    <span className="text-[14px] text-gray-400">
                      {testimonial.company}
                    </span>
                  </div>
                </div>

                <p>{testimonial.comment}</p>
              </Card>
            ))}
          </div>

          <Button
            btn="link"
            link="/testimonials"
            bgColor="bg-black"
            color="white"
          >
            Testimonials
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
