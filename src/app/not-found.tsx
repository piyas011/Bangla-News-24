"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-white px-4 py-16">
      <div className="w-full max-w-lg text-center">
        {/* 404 Illustration */}
        <div className="relative mb-6">
          <h1 className="text-9xl font-black tracking-tighter text-red-600 sm:text-[160px]">
            404
          </h1>

          <div className="absolute inset-x-0 bottom-2 mx-auto h-3 w-40 rounded-full bg-red-100 blur-md sm:w-56" />
        </div>

        {/* Message */}
        <div className="relative">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-red-600">
            Page Not Found
          </p>

          <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
            দুঃখিত! খবরটি খুঁজে পাওয়া যায়নি
          </h2>

          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-gray-500 sm:text-base">
            আপনি যে পেজটি খুঁজছেন সেটি সরিয়ে ফেলা হয়েছে, ঠিকানা পরিবর্তন
            হয়েছে অথবা পেজটি বর্তমানে উপলব্ধ নেই।
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-red-700"
            >
              <span aria-hidden="true">←</span>
              হোম পেজে ফিরে যান
            </Link>

            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center rounded-lg border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-red-600 hover:text-red-600"
            >
              আগের পেজে ফিরুন
            </button>
          </div>
        </div>

        {/* Website Branding */}
        <div className="mt-12 border-t border-gray-100 pt-6">
          <p className="text-sm font-extrabold text-red-600">Bangla News 24</p>
          <p className="mt-1 text-xs text-gray-400">
            সত্য ও গুরুত্বপূর্ণ সংবাদ আপনার হাতেই
          </p>
        </div>
      </div>
    </main>
  );
}
