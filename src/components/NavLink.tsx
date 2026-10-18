import type { BBCBengali } from "@/types/type";
import { io } from "next/cache";
import Link from "next/link";

type NavigationCategory = Pick<BBCBengali, "slug" | "title" | "scrapable">;

function isCategory(value: unknown): value is NavigationCategory {
  if (typeof value !== "object" || value === null) return false;

  return (
    "slug" in value &&
    typeof value.slug === "string" &&
    "title" in value &&
    typeof value.title === "string" &&
    "scrapable" in value &&
    typeof value.scrapable === "boolean"
  );
}

function isCategoryResponse(value: unknown): value is { data: unknown[] } {
  return (
    typeof value === "object" &&
    value !== null &&
    "data" in value &&
    Array.isArray(value.data)
  );
}

export function NavLinkFallback() {
  return (
    <div>
      <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4 sm:gap-x-5">
        <li>
          <Link href="/">হোম</Link>
        </li>
        <li
          aria-live="polite"
          className="max-w-full text-center text-sm text-gray-500"
        >
          বিভাগগুলো লোড হচ্ছে...
        </li>
      </ul>
    </div>
  );
}

const NavLink = async () => {
  await io();

  let filteredNavLink: NavigationCategory[] = [];
  let failedToLoad = false;

  try {
    const res = await fetch("https://news-api-v2.vercel.app/api/categories", {
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) {
      throw new Error(`Categories request failed with status ${res.status}`);
    }

    const data: unknown = await res.json();
    if (!isCategoryResponse(data)) {
      throw new Error("Categories response did not contain a data array");
    }

    filteredNavLink = data.data.filter(isCategory).filter((nav) => nav.scrapable);
  } catch (error) {
    failedToLoad = true;
    console.error("Failed to load navigation categories", error);
  }

  return (
    <div>
      <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4 sm:gap-x-5">
        <li>
          <Link href="/">হোম</Link>
        </li>
        {filteredNavLink.map((n) => (
          <li key={n.slug} className="max-w-full">
            <Link href={n.slug} className="block break-words">
              {n.title}
            </Link>
          </li>
        ))}
        {failedToLoad && (
          <li
            role="status"
            className="max-w-full text-center text-sm text-gray-500"
          >
            বিভাগগুলো এখন লোড করা যাচ্ছে না
          </li>
        )}
      </ul>
    </div>
  );
};

export default NavLink;
