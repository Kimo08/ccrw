import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "./NewsletterForm";
import QuickLinks from "./QuickLinks";

const Footer = () => {
  return (
    <footer className="bg-gray-900 w-full text-white mt-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Logo and Tagline Section */}
        <div className="mb-8 sm:mb-10">
          <Link
            href="/"
            className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6"
          >
            <Image
              src="/icons/jesus-resurrected.jpg"
              alt="Catholic Church of Resurrection logo"
              width={70}
              height={70}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex-shrink-0"
            />
            <div className="flex flex-col text-center sm:text-left gap-2">
              <p className="text-base sm:text-lg lg:text-xl font-bold leading-tight">
                Catholic Church of Resurrection
              </p>
              <h4 className="text-xs sm:text-sm lg:text-base text-gray-300 leading-relaxed max-w-2xl">
                &quot;O Risen Lord, the Way, the Truth, and the Life, Make us
                faithful followers of the spirit of Your Resurrection. Grant
                that we may be inwardly renewed, dying to ourselves in order
                that You may live in us.&quot;
              </h4>
            </div>
          </Link>
        </div>

        <hr className="border-gray-700 my-6 sm:my-8" />

        {/* Quick Links and Newsletter Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-8 sm:mb-10">
          <QuickLinks />
          <NewsletterForm />
        </div>

        <hr className="border-gray-700 my-6 sm:my-8" />

        {/* Footer Info Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-xs sm:text-sm lg:text-base">
          {/* Copyright */}
          <div>
            <p className="text-gray-300">
              &copy;{new Date().getFullYear()} Kim Ken. All rights reserved
            </p>
          </div>

          {/* Address */}
          <div>
            <p className="text-gray-300 leading-relaxed">
              KM 32 Lagos - Ibadan Expy, Lagos 121101, Ogun State
            </p>
          </div>

          {/* Phone */}
          <div>
            <a
              href="tel:+2347063754592"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center gap-2"
            >
              <span>📞</span>
              +2347063754592
            </a>
          </div>

          {/* Social Links */}
          <div>
            <p className="text-gray-400 mb-3 font-semibold">Follow Us</p>
            <div className="flex gap-4">
              <Link
                href="/"
                className="hover:opacity-75 transition-opacity duration-200"
                aria-label="Instagram"
              >
                <Image
                  alt="instagram"
                  src="/icons/instagram.png"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </Link>
              <Link
                href="/"
                className="hover:opacity-75 transition-opacity duration-200"
                aria-label="Facebook"
              >
                <Image
                  alt="facebook"
                  src="/icons/facebuk.png"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-700 text-center text-xs text-gray-400">
          <p>Built with faith and dedication for our community</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
