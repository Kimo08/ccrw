import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "./NewsletterForm";
import QuickLinks from "./QuickLinks";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto py-6">
      <div className=" container mx-auto px-4 flex flex-col gap-5">
        <div className="flex flex-col md:flex-row gap-2  justify-between">
          <Link href="/" className="flex flex-row items-center italic gap-2">
            <Image
              src="/icons/jesus-resurrected.jpg"
              alt="logo"
              width={70}
              height={70}
            />
            <div className="flex flex-col mb-2">
              <p className="text-sm font-bold mb-1">
                Catholic Church of Resurrection!!
              </p>
              <h4 className="text-sm">
                &quot;O Risen Lord, the Way, the Truth, and the Life, Make us
                faithful followers of the spirit of Your Resurrection. Grant
                that we may be inwardly renewed, dying to ourselves in order
                that You may live in us.&quot;
              </h4>
            </div>
          </Link>
        </div>
        <hr />
        <div className="flex flex-col md:flex-row gap-10 justify-between">
          <QuickLinks />
          <NewsletterForm />
        </div>

        <div className="flex flex-col justify-between md:flex-row gap-2 p-2">
          <h4 className="text-sm">
            &copy;{new Date().getFullYear()} Kim Ken. All rights reserved
          </h4>
          <h4 className="text-sm">
            KM 32 Lagos - Ibadan Expy, Lagos 121101, Ogun State
          </h4>
          <a href="tel: +2347063754592" className="text-sm">
            +2347063754592
          </a>
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
