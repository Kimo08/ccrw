const About = () => {
  return (
    <div
      className="w-100% h-96 mx-auto shadow-lg rounded-lg overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${"/icons/gallery{2}.jpeg"})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <h1 className="text-center py-2 font-black text-amber-50">
          Welcome to <strong>Catholic Church of Resurrection Warewa!</strong>
        </h1>
        <p className="text-center italic">...Christ is alive</p>
        <br />

        <p className="text-center text-md italic">
          Come and worship with us and experience the joy of community worship,
          connecting parishioners, strengthening faith and building a stronger
          community
        </p>
        <br />
        <h1 className="text-center mt-1 font-black text-amber-50">
          MISSION STATEMENT
        </h1>
        <br />
        <p className="text-center text-md italic">
          &quot;To build an active, vibrant, peaceful, spirit-filled, joyful and
          caring community of faith grounded and God loving parishioners&quot;
        </p>
      </div>
    </div>
  );
};

export default About;
