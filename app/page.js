import { Suspense } from "react";
import About from "./_components/home/About";
import Cabins from "./_components/home/Cabins";
import Hero from "./_components/home/Hero";
import Testimonials from "./_components/home/Testimonials";
import Spinner from "./_components/global/Spinner";

export const revalidate = 0;

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Suspense
        fallback={
          <Spinner
            LoadingText="Loading Featured Cabins Section..."
            screen="py-[160px]"
          />
        }
      >
        <Cabins />
      </Suspense>

      <Suspense
        fallback={
          <Spinner
            LoadingText="Loading Featured Testimonials Section..."
            screen="py-[160px]"
          />
        }
      >
        <Testimonials />
      </Suspense>
    </>
  );
}
