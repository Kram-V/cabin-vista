"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Filter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentFilter = searchParams.get("max_capacity") || "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);

    params.set("max_capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex justify-center mb-8">
      <button
        onClick={() => handleFilter("all")}
        className={`px-5 py-2 border outline-none ${
          currentFilter === "all" ? "bg-black text-white" : ""
        } `}
      >
        All Cabins
      </button>

      <button
        onClick={() => handleFilter(2)}
        className={`px-5 py-2 border outline-none ${
          currentFilter === "2" ? "bg-black text-white" : ""
        } `}
      >
        Up to 2 Guests
      </button>

      <button
        onClick={() => handleFilter(4)}
        className={`px-5 py-2 border outline-none ${
          currentFilter === "4" ? "bg-black text-white" : ""
        } `}
      >
        Up to 4 Guests
      </button>

      <button
        onClick={() => handleFilter(6)}
        className={`px-5 py-2 border outline-none ${
          currentFilter === "6" ? "bg-black text-white" : ""
        } `}
      >
        Up to 6 Guests
      </button>

      <button
        onClick={() => handleFilter(8)}
        className={`px-5 py-2 border outline-none ${
          currentFilter === "8" ? "bg-black text-white" : ""
        } `}
      >
        Up to 8 Guests
      </button>
      <button
        onClick={() => handleFilter(10)}
        className={`px-5 py-2 border outline-none ${
          currentFilter === "10" ? "bg-black text-white" : ""
        } `}
      >
        Up to 10 Guests
      </button>
    </div>
  );
};

export default Filter;
