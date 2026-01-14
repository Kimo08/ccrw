import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link href="/" className="logo">
          <Image
            src="/icons/jesus-resurrected.jpg"
            alt="logo"
            width={36}
            height={36}
          />
          <p className="text-4px">Catholic Church Of Resurrection</p>
        </Link>

        <ul>
          <Link href="/" className="text-black hover:text-white">
            Home
          </Link>
          <Link href="/about" className="text-black hover:text-white">
            About
          </Link>
          <Link href="/schedule" className="text-black hover:text-white">
            Mass
          </Link>
          <Link href="/" className="text-black hover:text-white">
            Photo Gallery
          </Link>
          <Link href="/contact" className="text-black hover:text-white">
            Contact us
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
