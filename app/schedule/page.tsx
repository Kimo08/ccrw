import Image from "next/image";

const Schedule = () => {
  return (
    <section id="events">
      <div className="header">
        <h2 className="text-center mt-10 text-2xl mb-8 font-schibsted-grotesk">
          <strong>Parish Schedule</strong>
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-10 sm:grid-cols-2 grid-cols-2">
        <div className="bg-amber-200 cursor-pointer mb-4 rounded-lg shadow-xl/100 gap-4 relative p-4">
          <div className="p-4">
            <div
              className="flex flex-row gap-4 items-center justify-center"
              style={{
                borderBottom: "1px solid black",
              }}
            >
              <Image
                src="/icons/mass{0}.jpeg"
                alt="mass"
                width={90}
                height={90}
                className="mb-2"
              />
              <div className="text-black my-2 font-bold">Mass</div>
            </div>

            <li>SUNDAYS: 7:00am</li>
            <li>WEEKDAYS: MON - FRI: 6:00pm, SAT: 7:00am</li>
          </div>
        </div>

        <div className="bg-blue-100 cursor-pointer mb-4 rounded-lg shadow-xl/100 gap-4 relative p-4">
          <div className="p-4">
            <div
              className="flex flex-row gap-4 items-center justify-center"
              style={{
                borderBottom: "1px solid black",
              }}
            >
              <Image
                src="/icons/confessional.jpeg"
                alt="mass"
                width={90}
                height={90}
                className="mb-2"
              />
              <div className="text-black my-2 font-bold">Confession</div>
            </div>
            <li>SATURDAYS: After 7:00am mass</li>
          </div>
        </div>

        <div className="bg-emerald-200 cursor-pointer mb-4 rounded-lg shadow-xl/100 gap-4 relative p-4">
          <div className="p-4">
            <div
              className="flex flex-row gap-4 items-center justify-center"
              style={{
                borderBottom: "1px solid black",
              }}
            >
              <Image
                src="/icons/baptism.jpeg"
                alt="mass"
                width={80}
                height={80}
                className="mb-2"
              />
              <div className="text-black my-2 font-bold">Baptism</div>
            </div>
            <li>Bookings are done at the parish office</li>
            <li>Every 1st Saturday</li>
          </div>
        </div>

        <div className="bg-red-200 cursor-pointer mb-4 rounded-lg shadow-xl/100 gap-4 relative p-4">
          <div className="p-4">
            <div
              className="flex flex-row gap-4 items-center justify-center"
              style={{
                borderBottom: "1px solid black",
              }}
            >
              <Image
                src="/icons/St. Joseph Marello.jpg"
                alt="mass"
                width={60}
                height={60}
                className="mb-2"
              />
              <div className="text-black my-2 font-bold">
                Devotion to St.Joseph
              </div>
            </div>
            <li>Every Wednesdays</li>
          </div>
        </div>

        <div className="bg-lime-200 cursor-pointer mb-4 rounded-lg shadow-xl/100 gap-4 relative p-4">
          <div className="p-4">
            <div
              className="flex flex-row gap-4 items-center justify-center"
              style={{
                borderBottom: "1px solid black",
              }}
            >
              <Image
                src="/icons/Office.jpeg"
                alt="mass"
                width={70}
                height={70}
                className="mb-2"
              />
              <div className="text-black my-2 font-bold">Office Hours</div>
            </div>

            <li>TUESDAY - FRIDAY : 9:00am - 1:00pm</li>
          </div>
        </div>

        <div className="bg-yellow-200 cursor-pointer mb-4 rounded-lg shadow-xl/100 gap-4 relative p-4">
          <div className="p-4">
            <div
              className="flex flex-row gap-4 items-center justify-center"
              style={{
                borderBottom: "1px solid black",
              }}
            >
              <Image
                src="/icons/adoration.jpeg"
                alt="mass"
                width={90}
                height={90}
                className="mb-2"
              />
              <div className="text-black my-2 font-bold">Adoration</div>
            </div>

            <li>SUNDAYS: 5:00pm</li>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
