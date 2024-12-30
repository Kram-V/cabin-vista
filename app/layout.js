import "@/app/_styles/globals.css";
import React from "react";

import { Roboto_Condensed } from "next/font/google";
import Header from "./_components/layout/Header";
import Footer from "./_components/layout/Footer";

const roboto = Roboto_Condensed({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  // title: "Cabin Vista",
  title: {
    template: "%s - Cabin Vista",
    default: "Cabin Vista",
  },
  description: "Luxurious cabin hotel located in makati",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />

        <main>{children}</main>

        {/* <Footer /> */}
      </body>
    </html>
  );
};

export default RootLayout;
