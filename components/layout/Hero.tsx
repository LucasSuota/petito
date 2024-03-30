import React from "react";

const Hero = () => {
  return (
    <div
      className="hero w-full h-dvh bg-blue-500 text-white py-20 flex flex-col items-center justify-center text-center"
      style={{ backgroundImage: "url('/images/login-background.jpg')" }}
    >
      <h1 className="text-4xl font-bold mb-4">PETITO</h1>
      <p className="text-lg mb-8">
        Cuidar do seu bichinho nunca foi tão fácil!
      </p>
    </div>
  );
};

export default Hero;
