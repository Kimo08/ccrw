import Link from "next/link";

const QuickLinks = () => {
  const links = [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Schedule", href: "/schedule" },
  ];

  return (
    <div>
      <h4 className="text-white font-bold text-lg mb-4 pb-2 border-b border-blue-300">
        Quick Links
      </h4>
      <div className="flex flex-col gap-3">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-blue-100 text-sm sm:text-base hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-2"
          >
            <span className="text-blue-300">→</span>
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
