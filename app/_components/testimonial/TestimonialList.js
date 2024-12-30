import { getTestimonials } from "@/app/_lib/data-service";
import React from "react";
import Card from "../global/Card";
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

const TestimonialList = async () => {
  const testimonials = await getTestimonials();

  if (!testimonials.length) return "NO TESTIMONIALS YET";

  return (
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
  );
};

export default TestimonialList;
