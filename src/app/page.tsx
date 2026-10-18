import Marquee from "@/components/Marquee";
import { NewsArticle } from "@/types/type";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");

  if (!res.ok) {
    throw new Error("Failed to fetch news sections");
  }

  const result = await res.json();
  const mostNews: NewsArticle[] = result.data?.[0]?.articles ?? [];
  const featuredNews = mostNews[0];
  const remainingNews = mostNews.slice(1);

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-5 sm:px-6">
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Latest News */}
        <section aria-label="প্রধান সংবাদ" className="min-w-0 lg:col-span-2">
          <div className="mb-5 border-b-2 border-red-600 pb-2">
            <h2 className="text-xl font-extrabold text-gray-900 sm:text-2xl">
              সর্বশেষ সংবাদ
            </h2>
          </div>

          {featuredNews ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Featured Article */}
              <article className="min-w-0 border border-gray-200 p-2">
                {featuredNews.imageUrl && (
                  <Link
                    href={featuredNews.link || "/"}
                    className="block overflow-hidden rounded-lg"
                  >
                    <Image
                      src={featuredNews.imageUrl}
                      alt={featuredNews.imageAlt || featuredNews.title}
                      width={640}
                      height={400}
                      priority
                      className="h-auto w-full object-cover transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                    />
                  </Link>
                )}

                <h3 className="mt-3 text-lg font-bold leading-8 text-gray-900 transition-colors hover:text-red-600 sm:text-xl">
                  <Link href={featuredNews.link || "/"}>
                    {featuredNews.title}
                  </Link>
                </h3>
                <p>{featuredNews.description}</p>
              </article>

              {/* Article List */}
              <div className="divide-y divide-gray-200 border border-gray-200 p-3">
                {remainingNews.map((news) => (
                  <article key={news.id} className="py-3 first:pt-0">
                    <strong className="text-red-600 text-[16px]">
                      {news.category}
                    </strong>
                    <h3 className="text-sm font-semibold leading-7 text-gray-800 transition-colors hover:text-red-600 sm:text-base">
                      <Link href={news.link || "/"}>{news.title}</Link>
                    </h3>
                  </article>
                ))}
              </div>
            </div>
          ) : (
            <p className="rounded-lg border border-gray-200 p-5 text-sm text-gray-500">
              এই মুহূর্তে কোনো সংবাদ পাওয়া যায়নি।
            </p>
          )}
        </section>

        {/* Most Read News */}
        <aside
          aria-label="সর্বাধিক পঠিত সংবাদ"
          className="min-w-0 rounded-xl border border-gray-200 bg-white p-4 sm:p-5"
        >
          <div className="mb-4 border-b-2 border-red-600 pb-2">
            <h2 className="text-lg font-extrabold text-gray-900 sm:text-xl">
              সর্বাধিক পঠিত
            </h2>
          </div>

          {mostNews.length > 0 ? (
            <ol className="divide-y divide-gray-200">
              {mostNews.map((news, index) => (
                <li key={news.id} className="py-3 first:pt-0">
                  <div className="flex items-start gap-3">
                    <span className="shrink-0 text-xl font-extrabold text-red-600">
                      {index + 1}
                    </span>

                    <h3 className="text-sm font-semibold leading-6 text-gray-800 transition-colors hover:text-red-600">
                      <Link href={news.link || "/"}>{news.title}</Link>
                    </h3>
                  </div>
                </li>
              ))}
            </ol>
          ) : (
            <p className="text-sm text-gray-500">
              এই মুহূর্তে কোনো সংবাদ পাওয়া যায়নি।
            </p>
          )}
        </aside>
      </div>
    </main>
  );
}
