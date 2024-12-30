import React from "react";
import Button from "../global/Button";

const About = () => {
  return (
    <div>
      <div className="w-[1400px] mx-auto text-black gap-10 py-16">
        <div>
          <h2 className="text-5xl font-medium mb-6">About Cabin Vista</h2>

          <div className="flex flex-col gap-4 mb-8">
            <p className="text-lg">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Laoreet
              suspendisse malesuada ullamcorper ligula sodales sapien donec
              parturient? Id quis placerat metus auctor convallis. Ridiculus
              risus finibus venenatis curabitur laoreet magna! Fermentum orci
              urna nam tellus varius vulputate lorem. Magnis est tortor sit
              natoque augue quam. Lobortis consectetur torquent magna rutrum
              finibus eleifend. Viverra tristique ultrices ut litora malesuada
              mattis.
            </p>

            <p className="text-lg">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Laoreet
              suspendisse malesuada ullamcorper ligula sodales sapien donec
              parturient? Id quis placerat metus auctor convallis. Ridiculus
              risus finibus venenatis curabitur laoreet magna! Fermentum orci
              urna nam tellus varius vulputate lorem. Magnis est tortor sit
              natoque augue quam. Lobortis consectetur torquent magna rutrum
              finibus eleifend. Viverra tristique ultrices ut litora malesuada
              mattis.
            </p>
          </div>

          <Button btn="link" link="/about" bgColor="bg-black" color="white">
            About Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
