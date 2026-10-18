import Image from "next/image";
import NavLink from "./NavLink";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <div>
      <div className="flex justify-center items-center gap-2">
        <div>
          <p></p>
        </div>
        <div>
          <Image src="/favicon.ico" alt="Logo" width={40} height={40}></Image>
        </div>
        <div>
          <h1 className="text-2xl text-red-500 font-bold">Bangla News 24</h1>
          <small>{date}</small>
        </div>
      </div>
      <div>
        <NavLink />
      </div>
    </div>
  );
};

export default Header;
