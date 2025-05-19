// "use client";

import { auth } from "@/app/_lib/auth";
import Link from "next/link";
// import { usePathname } from "next/navigation";
import React from "react";

const Navigation = async () => {
  // const pathname = usePathname();

  const session = await auth();

  const { user } = session || {};

  return (
    // <ul className="flex gap-10">
    //   <li className={pathname === "/" ? "text-gray-400" : ""}>
    //     <Link href="/">Home</Link>
    //   </li>
    //   <li className={pathname === "/cabins" ? "text-gray-400" : ""}>
    //     <Link href="/cabins">Cabins</Link>
    //   </li>
    //   <li className={pathname === "/about" ? "text-gray-400" : ""}>
    //     <Link href="/about">About</Link>
    //   </li>
    //   <li
    //     className={
    //       pathname === "/account" ||
    //       pathname === "/account/reservations" ||
    //       pathname === "/account/profile"
    //         ? "text-gray-400"
    //         : ""
    //     }
    //   >
    //     <Link href="/account">Account</Link>
    //   </li>
    // </ul>

    <ul className="flex items-center gap-14">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>

      <li>
        <Link href="/cabins">Cabins</Link>
      </li>
      <li>
        <Link href="/testimonials">Testimonials</Link>
      </li>
      <li>
        <Link href="/account" className="flex items-center gap-2">
          {user ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className=" rounded-full w-8"
              src={user.image}
              alt={user.name}
            />
          ) : (
            ""
          )}

          <span>{user ? user.name : "Account"}</span>
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
