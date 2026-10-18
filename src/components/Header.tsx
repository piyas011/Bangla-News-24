import Image from "next/image";
import { connection } from "next/server";
import { Suspense } from "react";
import NavLink from "./NavLink";
import Link from "next/link";

const CurrentDate = async () => {
  await connection();

  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return <>{date}</>;
};

const Header = () => {
  return (
    <header className="mt-5 w-full">
      <div className="relative flex flex-col items-center justify-center gap-3 px-4 sm:flex-row sm:gap-3">
        {/* Logo */}
        <Image
          src="/favicon.ico"
          alt="Bangla News 24 Logo"
          width={44}
          height={44}
          priority
          className="h-10 w-10 object-contain sm:h-11 sm:w-11"
        />

        {/* Website Name and Date */}
        <div className="text-center sm:text-left">
          <h1 className="text-2xl font-extrabold tracking-tight text-red-600 sm:text-3xl">
            Bangla News 24
          </h1>

          <p className="mt-1 text-xs font-medium text-gray-500 sm:text-sm">
            <Suspense fallback="তারিখ লোড হচ্ছে...">
              <CurrentDate />
            </Suspense>
          </p>
        </div>

        {/* Authentication Buttons */}
        <div className="flex items-center gap-2 sm:absolute sm:right-4">
          <Link
            href="/sign-in"
            type="button"
            className="btn border border-gray-200 bg-transparent font-semibold text-gray-700 hover:border-red-600 hover:text-red-600"
          >
            সাইন ইন
          </Link>

          <Link
            href="/sign-up"
            type="button"
            className="btn border-0 bg-red-600 font-bold text-white hover:bg-red-700"
          >
            সাইন আপ
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-4">
        <NavLink />
      </div>
    </header>
  );
};

export default Header;
