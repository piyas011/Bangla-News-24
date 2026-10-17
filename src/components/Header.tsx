import Image from "next/image";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  return (
    <div>
      <div className="flex justify-center items-center gap-2">
        <div>
          <Image src="/favicon.ico" alt="Logo" width={50} height={50}></Image>
        </div>
        <div>
          <h1 className="text-3xl text-red-500 font-bold">Bangla News 24</h1>
          <small>{date}</small>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
