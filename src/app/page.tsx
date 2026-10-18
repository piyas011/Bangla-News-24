import Marquee from "@/components/Marquee";

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const mostNews = data.data[0].articles;
  console.log(mostNews);
  return (
    <div>
      <div>
        <Marquee />
        <div className="grid grid-cols-3 container mx-auto gap-2 mt-5 ">
          {/* news section */}
          <div className="col-span-2 bg-amber-700"></div>
          {/* most red section */}
          <div className="col-span-1 border border-gray-300 rounded-[10px]"></div>
        </div>
      </div>
    </div>
  );
}
