import type { NewsArticle } from "@/types/type";
import { io } from "next/cache";
import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

type Headline = Pick<NewsArticle, "id" | "title" | "link">;

function isHeadline(value: unknown): value is Headline {
  if (typeof value !== "object" || value === null) return false;

  return (
    "id" in value &&
    typeof value.id === "string" &&
    "title" in value &&
    typeof value.title === "string" &&
    "link" in value &&
    (typeof value.link === "string" || value.link === null)
  );
}

function isHeadlineResponse(value: unknown): value is { data: unknown[] } {
  return (
    typeof value === "object" &&
    value !== null &&
    "data" in value &&
    Array.isArray(value.data)
  );
}

export function MarqueeFallback() {
  return (
    <div className="mt-2 bg-red-700 p-1 px-5 text-white">
      <div className="flex justify-center items-center container mx-auto">
        <div className="px-5 p-1 bg-red-700 border-r-3 font-bold">সর্বশেষ</div>
        <p role="status" aria-live="polite" className="px-5">
          সর্বশেষ সংবাদ লোড হচ্ছে...
        </p>
      </div>
    </div>
  );
}

const Marquee = async () => {
  await io();

  let headLines: Headline[] = [];
  let failedToLoad = false;

  try {
    const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=20", {
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) {
      throw new Error(`Headlines request failed with status ${res.status}`);
    }

    const data: unknown = await res.json();
    if (!isHeadlineResponse(data)) {
      throw new Error("Headlines response did not contain a data array");
    }

    headLines = data.data.filter(isHeadline);
  } catch (error) {
    failedToLoad = true;
    console.error("Failed to load news headlines", error);
  }

  return (
    <div className="mt-2 bg-red-700 p-1 px-5 text-white ">
      <div className="flex justify-center items-center container mx-auto">
        <div className="px-5 p-1 bg-red-700 border-r-3 font-bold">সর্বশেষ</div>
        {failedToLoad ? (
          <p role="status" className="px-5">
            এই মুহূর্তে সর্বশেষ সংবাদ পাওয়া যাচ্ছে না।
          </p>
        ) : (
          <MarqueeText direction="right" duration={12}>
            {headLines.map((h) => {
              if (!h.link) return null;

              return (
                <Link href={h.link} key={h.id} className="hover:underline">
                  {h.title}
                  <span className="mx-5"> ⬩ </span>
                </Link>
              );
            })}
          </MarqueeText>
        )}
      </div>
    </div>
  );
};

export default Marquee;
