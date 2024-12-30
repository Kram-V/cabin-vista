import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src={logo}
        width="40"
        alt="The Wild Oasis logo"
        className=" rounded-full"
      />
      <span className="text-xl font-semibold text-primary-100">
        Cabin Vista
      </span>
    </Link>
  );
}

export default Logo;
