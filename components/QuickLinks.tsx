import Link from "next/link";

const QuickLinks = () => {
  return (
    <div className="mb-1">
      <h4 className="font-bold mb-2">Quick Links</h4>
      <div className="flex flex-col">
        <Link
          href="/about"
          className="text-white text-sm hover:text-cyan-400 mb-2 mx-2"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="text-white text-sm hover:text-cyan-400 mb-2 mx-2"
        >
          Contact
        </Link>
        <Link
          href="/schedule"
          className="text-white text-sm hover:text-cyan-400  mx-2"
        >
          Schedule
        </Link>
      </div>
    </div>
  );
};

export default QuickLinks;
