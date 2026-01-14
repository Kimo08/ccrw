import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto py-6">
      <div className=" container mx-auto px-4 flex flex-col gap-5">
        <div className="flex flex-col md:flex-row gap-2 p-2 justify-between">
          <Link href="/" className="flex flex-row items-center italic gap-2">
            <Image
              src="/icons/jesus-resurrected.jpg"
              alt="logo"
              width={60}
              height={60}
            />
            <div className="flex flex-col mb-8">
              <p className="text-4px font-bold mb-1">
                Catholic Church of Resurrection!!
              </p>
              <p>
                &quot;O Risen Lord, the Way, the Truth, and the Life, Make us
                faithful followers of the spirit of Your Resurrection. Grant
                that we may be inwardly renewed, dying to ourselves in order
                that You may live in us.&quot;
              </p>
            </div>
          </Link>
          <div>
            <p className="font-bold mb-2 text-center">Quick Links</p>
            <div className="flex justify-center-safe">
              <Link
                href="/about"
                className="text-white hover:text-cyan-400 mx-2"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-cyan-400 mx-2"
              >
                Contact
              </Link>
              <Link
                href="/schedule"
                className="text-white hover:text-cyan-400 mx-2"
              >
                Schedule
              </Link>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex flex-col justify-between md:flex-row gap-2 p-2">
          <p>&copy;{new Date().getFullYear()} Kim Ken. All rights reserved</p>
          <p>KM 32 Lagos - Ibadan Expy, Lagos 121101, Ogun State</p>
          <a href="tel: +2347063754592 ">+2347063754592</a>
          <div className="flex gap-4">
            <Link href="/">
              <Image
                alt="instagram"
                src="/icons/instagram.png"
                width={20}
                height={20}
              />
            </Link>
            <Link href="/">
              <Image
                alt="facebook"
                src="/icons/facebuk.png"
                width={23}
                height={23}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
