import React from "react";

import TestimonialList from "../_components/testimonial/TestimonialList";

export const revalidate = 0;

const Page = () => {
  return (
    <div className="w-[1400px] mx-auto pt-[100px] pb-[30px]">
      <h1 className="text-4xl mb-5  font-medium">Testimonials</h1>
      <p className="text-lg mb-10">
        At Cabin Vista, our guest&apos;s stories bring our vision to life. From
        cozy getaways to family adventures, our testimonials highlight the
        unforgettable experiences and cherished memories created at our cabins.
        Explore their feedback and see how we make every stay special.
      </p>

      <TestimonialList />
    </div>
  );
};

export default Page;
