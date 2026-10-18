import { BBCBengali } from "@/types/type";
import Link from "next/link";

const NavLink = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data = await res.json();
  const naveItems: BBCBengali[] = data.data;
  const filteredNavLink = naveItems.filter((nav) => nav.scrapable);

  return (
    <div>
      <ul className="flex gap-5 justify-center items-center">
        <li>
          <Link href="/">হোম</Link>
        </li>
        {filteredNavLink.map((n: BBCBengali, i) => (
          <li key={i}>
            <Link href={n.slug}>{n.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavLink;
