import React from "react";

const Hero = () => {
  return (
    <section
      className="w-full h-dvh flex flex-col items-center justify-center"
      style={{
        backgroundImage:
          'linear-gradient(to bottom, rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0.8)), url("/images/login-background.jpg")',
      }}
    >
      <p className="sm:text-7xl text-4xl font-semibold text-white sm:w-2/5 w-4/5 text-start">
        Uma melhor forma de cuidar do seu{" "}
        <strong className="text-primaryblue font-semibold">bichinho.</strong>
      </p>
    </section>
  );
};

export default Hero;
