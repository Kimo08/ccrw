import About from "@/app/about/page";
import Schedule from "@/app/schedule/page";

const page = () => {
  return (
    <div className="w-full">
      {/* About Section with spacing */}
      <div className="py-4 sm:py-6 lg:py-8">
        <About />
      </div>

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent my-8 sm:my-12 lg:my-16"></div>

      {/* Schedule Section with spacing */}
      <div className="py-4 sm:py-6 lg:py-8">
        <Schedule />
      </div>
    </div>
  );
};

export default page;
