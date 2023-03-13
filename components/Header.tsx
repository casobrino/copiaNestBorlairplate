import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <header className="flex item-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg"
            className="rounded-full"
            width={50}
            height={50}
            alt="Logo"
          />
        </Link>
        <h1>Excel Blog</h1>
      </div>
      <div className="div">
        
      </div>
    </header>
  );
};
export default Header;
