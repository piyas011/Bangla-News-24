import { NewsArticle } from "@/types/type";
import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const Marquee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=20");
  const data = await res.json();
  const headLines: NewsArticle[] = data.data;

  return (
    <div className="mt-2 bg-red-700 p-1 px-5 text-white ">
      <div className="flex justify-center items-center container mx-auto">
        <div className="px-5 p-1 bg-red-700 border-r-3 font-bold">সর্বশেষ</div>
        <MarqueeText direction="right" duration={12}>
          {headLines.map((h: NewsArticle) => (
            <Link href={h.link} key={h.id} className="hover:underline">
              {h.title}
              <span className="mx-5"> ⬩ </span>
            </Link>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;
