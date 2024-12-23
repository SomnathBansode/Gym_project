import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-center py-16 text-white">
      {/* Welcome Section */}
      <div className="mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-violet-400">
          Welcome To Our Gym
        </h2>
        <p className="text-lg sm:text-xl text-zinc-300 mt-4">
          Join us to achieve your fitness goals with state-of-the-art equipment
          and expert trainers.
        </p>
      </div>

      {/* First Section: Cards */}
      <div className="flex justify-between items-center mb-16 px-4 flex-wrap gap-8">
        {/* Card 1 */}
        <div className="w-full sm:w-1/2 lg:w-1/4 bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
          <i className="fa-solid fa-dumbbell text-4xl text-[#43b878]"></i>
          <h3 className="text-2xl font-semibold text-violet-400 mt-4">
            New Machines
          </h3>
          <p className="text-base text-zinc-300 mt-2">
            Experience the latest in fitness technology with our new range of
            machines.
          </p>
        </div>

        {/* Card 2 */}
        <div className="w-full sm:w-1/2 lg:w-1/4 bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
          <i className="fa-solid fa-apple-alt text-4xl text-[#43b878]"></i>
          <h3 className="text-2xl font-semibold text-violet-400 mt-4">
            Organic Proteins
          </h3>
          <p className="text-base text-zinc-300 mt-2">
            Fuel your workouts with our selection of organic protein
            supplements.
          </p>
        </div>
      </div>

      {/* Image Section - Centered Between Two Sections */}
      <div className="flex justify-center mb-16">
        <img
          src="/images/1.png"
          alt="New Machines"
          className="w-full sm:w-1/2 lg:w-1/4 h-auto object-contain"
        />
      </div>

      {/* Second Section: Cards */}
      <div className="flex justify-between items-center px-4 flex-wrap gap-8">
        {/* Card 3 */}
        <div className="w-full sm:w-1/2 lg:w-1/4 bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
          <i className="fa-solid fa-person-chalkboard text-4xl text-[#43b878]"></i>
          <h3 className="text-2xl font-semibold text-violet-400 mt-4">
            Personal Training
          </h3>
          <p className="text-base text-zinc-300 mt-2">
            Achieve your fitness goals with personalized training programs
            tailored to you.
          </p>
        </div>

        {/* Card 4 */}
        <div className="w-full sm:w-1/2 lg:w-1/4 bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
          <i className="fa-solid fa-calendar-check text-4xl text-[#43b878]"></i>
          <h3 className="text-2xl font-semibold text-violet-400 mt-4">
            Flexible Scheduling
          </h3>
          <p className="text-base text-zinc-300 mt-2">
            Enjoy flexible class schedules that fit your busy lifestyle.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
