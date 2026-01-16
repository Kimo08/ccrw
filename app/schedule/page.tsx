import Image from "next/image";

const Schedule = () => {
  const scheduleItems = [
    {
      title: "Mass",
      icon: "/icons/mass{0}.jpeg",
      color: "bg-amber-200",
      details: ["SUNDAYS: 7:00am", "WEEKDAYS: MON - FRI: 6:00pm, SAT: 7:00am"],
      imageSize: { width: 90, height: 90 },
    },
    {
      title: "Confession",
      icon: "/icons/confessional.jpeg",
      color: "bg-blue-100",
      details: ["SATURDAYS: After 7:00am mass"],
      imageSize: { width: 80, height: 90 },
    },
    {
      title: "Baptism",
      icon: "/icons/baptism.jpeg",
      color: "bg-emerald-200",
      details: ["Bookings are done at the parish office", "Every 1st Saturday"],
      imageSize: { width: 70, height: 60 },
    },
    {
      title: "Devotion to St.Joseph",
      icon: "/icons/St. Joseph Marello.jpg",
      color: "bg-red-200",
      details: ["Every Wednesdays"],
      imageSize: { width: 50, height: 40 },
    },
    {
      title: "Office Hours",
      icon: "/icons/Office.jpeg",
      color: "bg-lime-200",
      details: ["TUESDAY - FRIDAY : 9:00am - 1:00pm"],
      imageSize: { width: 70, height: 70 },
    },
    {
      title: "Adoration",
      icon: "/icons/adoration.jpeg",
      color: "bg-yellow-200",
      details: ["SUNDAYS: 5:00pm"],
      imageSize: { width: 90, height: 90 },
    },
  ];

  return (
    <section
      id="events"
      className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
            Parish Schedule
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {scheduleItems.map((item, index) => (
            <div
              key={index}
              className={`${item.color} rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 overflow-hidden cursor-pointer`}
            >
              <div className="p-4 sm:p-6">
                {/* Image and Title Section */}
                <div className="flex flex-col items-center gap-3 sm:gap-4 pb-4 sm:pb-6 border-b border-gray-400">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={item.imageSize.width}
                    height={item.imageSize.height}
                    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-cover rounded-lg"
                  />
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 text-center">
                    {item.title}
                  </h3>
                </div>

                {/* Details Section */}
                <ul className="mt-4 sm:mt-5 space-y-2 sm:space-y-3">
                  {item.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed flex items-start"
                    >
                      <span className="mr-2 text-blue-600 font-bold mt-0.5">
                        •
                      </span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
