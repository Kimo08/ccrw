const About = () => {
  return (
    <div className="w-full min-h-screen bg-transparent flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div
        className="w-full rounded-lg overflow-hidden shadow-2xl min-h-96 sm:min-h-screen lg:min-h-[600px] flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(${"/icons/gallery{2}.jpeg"})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-4xl w-full px-4 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-16 text-center space-y-4 sm:space-y-6 lg:space-y-8">
          {/* Welcome Section */}
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-black text-amber-50 leading-tight mb-2 sm:mb-3">
              Welcome to{" "}
              <span className="text-amber-300">
                Catholic Church of Resurrection Warewa!
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl italic text-amber-100 font-semibold">
              ...Christ is alive
            </p>
          </div>

          {/* Description Section */}
          <p className="text-sm sm:text-base lg:text-lg italic text-amber-50 leading-relaxed max-w-3xl mx-auto">
            Come and worship with us and experience the joy of community
            worship, connecting parishioners, strengthening faith and building a
            stronger community
          </p>

          {/* Mission Statement Section */}
          <div className="pt-4 sm:pt-6 lg:pt-8">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-black text-amber-50 mb-4 sm:mb-6">
              MISSION STATEMENT
            </h2>
            <p className="text-sm sm:text-base lg:text-lg italic text-amber-100 max-w-3xl mx-auto leading-relaxed border-l-4 border-amber-300 pl-4 sm:pl-6">
              &quot;To build an active, vibrant, peaceful, spirit-filled, joyful
              and caring community of faith grounded and God loving
              parishioners&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
