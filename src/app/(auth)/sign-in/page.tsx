"use client";

import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="flex min-h-[75vh] items-center justify-center bg-gray-50 px-4 py-10">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <Link href="/" className="text-sm font-bold text-red-600">
          ← Bangla News 24
        </Link>

        <h1 className="mt-6 text-2xl font-extrabold text-gray-900">
          আবার ফিরে আসায় স্বাগতম!
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          আপনার অ্যাকাউন্টে সাইন ইন করুন।
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-3 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
          >
            <FcGoogle size={22} />
            Google
          </button>

          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-3 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
          >
            <FaFacebook size={22} color="#1877F2" />
            Facebook
          </button>
        </div>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-xs text-gray-400">অথবা ইমেইল দিয়ে</span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              ইমেইল ঠিকানা
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="name@example.com"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
            />
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between gap-2">
              <label
                htmlFor="password"
                className="text-sm font-semibold text-gray-700"
              >
                পাসওয়ার্ড
              </label>
              <Link
                href="/forgot-password"
                className="text-xs font-semibold text-red-600 hover:underline"
              >
                পাসওয়ার্ড ভুলে গেছেন?
              </Link>
            </div>

            <div className="flex rounded-lg border border-gray-300 focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-100">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="আপনার পাসওয়ার্ড"
                required
                className="min-w-0 flex-1 rounded-lg px-4 py-3 text-sm outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="px-3 text-xs font-semibold text-gray-500 hover:text-red-600"
              >
                {showPassword ? "লুকান" : "দেখুন"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-red-600 py-3 font-bold text-white transition hover:bg-red-700"
          >
            সাইন ইন
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          নতুন ব্যবহারকারী?{" "}
          <Link
            href="/sign-up"
            className="font-bold text-red-600 hover:underline"
          >
            অ্যাকাউন্ট তৈরি করুন
          </Link>
        </p>
      </div>
    </main>
  );
}
