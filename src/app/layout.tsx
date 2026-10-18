import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Marquee, { MarqueeFallback } from "@/components/Marquee";

const NotoSerifBengali = Noto_Serif_Bengali({
  subsets: ["latin", "bengali"],
});

export const metadata: Metadata = {
  title: {
    default: "Bangla News 24 | সর্বশেষ বাংলা সংবাদ",
    template: "%s | Bangla News 24",
  },
  description:
    "বাংলাদেশ ও বিশ্বের সর্বশেষ খবর, রাজনীতি, খেলাধুলা, প্রযুক্তি এবং গুরুত্বপূর্ণ সংবাদ পড়ুন Bangla News 24-এ।",
  applicationName: "Bangla News 24",
  keywords: [
    "Bangla News",
    "বাংলা সংবাদ",
    "বাংলাদেশের খবর",
    "সর্বশেষ খবর",
    "বিশ্ব সংবাদ",
    "খেলাধুলার খবর",
    "প্রযুক্তি সংবাদ",
  ],
  openGraph: {
    title: "Bangla News 24 | সর্বশেষ বাংলা সংবাদ",
    description: "বাংলাদেশ ও বিশ্বের সর্বশেষ সংবাদ এবং গুরুত্বপূর্ণ খবর পড়ুন।",
    siteName: "Bangla News 24",
    locale: "bn_BD",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${NotoSerifBengali.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav>
          <Header />
        </nav>
        <Suspense fallback={<MarqueeFallback />}>
          <Marquee />
        </Suspense>
        <main>{children}</main>
      </body>
    </html>
  );
}
