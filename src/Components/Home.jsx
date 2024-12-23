import React from "react";

const Home = () => {
  const BgImg =
    "https://www.moradhamdy.com/morad/ryada-demo/images/files/parallax-bg/img-5.jpg"; // Corrected path
  return (
    <div className="relative min-h-screen w-full bg-[#111827] text-white pt-16 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center z-0"
        style={{
          backgroundImage: `url(${BgImg})`,
        }}
      ></div>
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center lg:items-start min-h-[calc(100vh-4rem)] px-4 sm:px-6 md:px-8 lg:px-16">
        {/* Text Section */}
        <div className="w-full max-w-xl lg:max-w-2xl xl:max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center lg:text-left">
            It's <span className="text-[#1bc768]">Gym Time</span> Now!
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mt-4 sm:mt-6 leading-relaxed text-center lg:text-left">
            Stylish and modern fitness club for those who want to attain
            perfection.
          </p>
          {/* Button */}
          <div className="flex justify-center lg:justify-start mt-8 sm:mt-10">
            <button
              className="inline-block px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 
                       bg-[#43b878] text-white font-semibold rounded-full 
                       hover:bg-white hover:text-black 
                       text-sm sm:text-base md:text-lg"
              aria-label="Become a Member"
            >
              Be a Member
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Corner Decorations */}
      <div className="absolute bottom-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-tl from-[#43b878] to-transparent opacity-20 rounded-tl-full"></div>
      <div className="absolute top-0 left-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#43b878] to-transparent opacity-20 rounded-br-full"></div>
    </div>
  );
};

export default Home;
