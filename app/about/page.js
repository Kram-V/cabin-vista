import Image from "next/image";
import React from "react";
import about1 from "@/public/about-1.jpg";
import about2 from "@/public/about-2.jpg";
import Link from "next/link";
import { getCabins } from "../_lib/data-service";

export const metadata = {
  title: "About",
};

export const revalidate = 0;

const Page = async () => {
  const cabins = await getCabins();

  return (
    <div className="grid grid-cols-5 gap-10 items-center pt-[100px] pb-[30px] w-[1400px] mx-auto">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 font-medium">
          Welcome to the Cabin Vista
        </h1>

        <div className="space-y-8">
          <p>
            Where nature&lsquo;s beauty and comfortable living blend seamlessly.
            Hidden away in the heart of the Italian Dolomites, this is your
            paradise away from home. But it&lsquo;s not just about the luxury
            cabins. It&lsquo;s about the experience of reconnecting with nature
            and enjoying simple pleasures with family.
          </p>
          <p>
            Our {cabins.length} luxury cabins provide a cozy base, but the real
            freedom and peace you&lsquo;ll find in the surrounding mountains.
            Wander through lush forests, breathe in the fresh air, and watch the
            stars twinkle above from the warmth of a campfire or your hot tub.
          </p>
          <p>
            This is where memorable moments are made, surrounded by
            nature&lsquo;s splendor. It&lsquo;s a place to slow down, relax, and
            feel the joy of being together in a beautiful setting.
          </p>
        </div>
      </div>

      <div className="col-span-2">
        <Image
          src={about1}
          alt="Family sitting around a fire pit in front of cabin"
          placeholder="blur"
        />
      </div>

      <div className="col-span-2 relative aspect-square">
        <Image
          src="/about-2.jpg"
          fill
          alt="Family that manages The Wild Oasis"
        />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 font-medium">
          Managed by our family since 1962
        </h1>

        <div className="space-y-8">
          <p>
            Since 1962, The Wild Oasis has been a cherished family-run retreat.
            Started by our grandparents, this haven has been nurtured with love
            and care, passing down through our family as a testament to our
            dedication to creating a warm, welcoming environment.
          </p>
          <p>
            Over the years, we&lsquo;ve maintained the essence of The Wild
            Oasis, blending the timeless beauty of the mountains with the
            personal touch only a family business can offer. Here, you&lsquo;re
            not just a guest; you&lsquo;re part of our extended family. So join
            us at The Wild Oasis soon, where tradition meets tranquility, and
            every visit is like coming home.
          </p>

          <div>
            <Link
              href="/cabins"
              className="inline-block mt-4 px-8 py-5 text-lg font-semibold"
            >
              Explore our luxury cabins
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
