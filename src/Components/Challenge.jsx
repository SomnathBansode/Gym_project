import React from "react";

const Challenge = () => {
  return (
    <div className="min-h-screen bg-zinc-900 py-16 text-white">
      {/* Challenge Title Section */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-violet-400">
          Join Our Fitness Challenge
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 mt-4">
          Push your limits and achieve your fitness goals with our exclusive
          challenge program!
        </p>
      </div>

      {/* Challenge Features Section */}
      <div className="flex flex-wrap justify-center gap-8 px-4 mb-16">
        {/* Challenge Card 1 */}
        <div className="w-full sm:w-1/2 lg:w-1/4 bg-zinc-800 p-8 rounded-xl shadow-md">
          <div className="text-5xl text-[#43b878]">
            <i className="flaticon-barbell"></i>
          </div>
          <h4 className="text-2xl font-semibold text-violet-400 mt-4">
            Strength Challenge
          </h4>
          <p className="text-base text-gray-300 mt-2">
            Build your strength with our specialized workout routines.
          </p>
        </div>

        {/* Challenge Card 2 */}
        <div className="w-full sm:w-1/2 lg:w-1/4 bg-zinc-800 p-8 rounded-xl shadow-md">
          <div className="text-5xl text-[#43b878]">
            <i className="flaticon-gym"></i>
          </div>
          <h4 className="text-2xl font-semibold text-violet-400 mt-4">
            Endurance Challenge
          </h4>
          <p className="text-base text-gray-300 mt-2">
            Improve your stamina with high-intensity training.
          </p>
        </div>

        {/* Challenge Card 3 */}
        <div className="w-full sm:w-1/2 lg:w-1/4 bg-zinc-800 p-8 rounded-xl shadow-md">
          <div className="text-5xl text-[#43b878]">
            <i className="flaticon-exercise"></i>
          </div>
          <h4 className="text-2xl font-semibold text-violet-400 mt-4">
            Flexibility Challenge
          </h4>
          <p className="text-base text-gray-300 mt-2">
            Enhance your flexibility with guided stretching exercises.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16 px-4">
        <h3 className="text-2xl sm:text-3xl font-semibold text-violet-400">
          Are You Ready to Take the Challenge?
        </h3>
        <p className="text-lg sm:text-xl text-gray-300 mt-4">
          Sign up today and start your journey towards a healthier lifestyle.
        </p>
        <button className="mt-8 px-8 py-3 bg-[#43b878] text-white rounded-lg text-lg hover:bg-[#36a268]">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default Challenge;
