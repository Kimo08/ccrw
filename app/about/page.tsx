const About = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(8,8,8,0.9), rgba(8,8,8,0.7)), url('/icons/gallery{2}.jpeg')",
        backgroundSize: "cover",
        height: "54vh",
        width: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
      }}
    >
      <h1 className="text-center py-2 font-black">
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
      <h1 className="text-center mt-1"> MISSION STATEMENT</h1>
      <br />
      <p className="text-center text-md italic">
        &quot;To build an active, vibrant, peaceful, spirit-filled, joyful and
        caring community of faith grounded and God loving parishioners&quot;
      </p>
    </div>
  );
};

export default About;
