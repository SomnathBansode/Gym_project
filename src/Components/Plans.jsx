import React from "react";

const Plans = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-white py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-violet-400">
          Choose Your Pricing Plan
        </h2>
        <p className="text-lg sm:text-xl text-zinc-300 mt-4">
          Select a plan that suits your fitness journey.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {/* Silver Membership */}
        <div className="w-full sm:w-1/3 lg:w-1/4 bg-zinc-800 p-8 rounded-xl shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-violet-400">
              Silver Membership
            </h3>
            <p className="text-xl mt-2">₹2,000 Every month</p>
            <p className="text-base text-zinc-300 mt-4">
              Short-term trial for beginners
            </p>
            <p className="text-base text-zinc-300 mt-2">Valid for 2 months</p>
            <ul className="text-base text-zinc-300 mt-4 list-disc list-inside">
              <li>Fitness assessment</li>
              <li>Locker room with showers</li>
            </ul>
          </div>
          <div className="mt-8 flex justify-center">
            <button className="px-8 py-3 bg-[#43b878] text-white rounded-lg text-lg hover:bg-[#36a268] transition duration-300">
              Buy Now
            </button>
          </div>
        </div>

        {/* Gold Membership */}
        <div className="w-full sm:w-1/3 lg:w-1/4 bg-zinc-800 p-8 rounded-xl shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-violet-400">
              Gold Membership
            </h3>
            <p className="text-xl mt-2">₹2,500 Every month</p>
            <p className="text-base text-zinc-300 mt-4">
              Ideal for advanced trainees
            </p>
            <p className="text-base text-zinc-300 mt-2">Valid for 12 months</p>
            <ul className="text-base text-zinc-300 mt-4 list-disc list-inside">
              <li>Unlimited Classes</li>
              <li>Fitness assessment</li>
              <li>Locker room with showers</li>
              <li>Free parking</li>
            </ul>
          </div>
          <div className="mt-8 flex justify-center">
            <button className="px-8 py-3 bg-[#43b878] text-white rounded-lg text-lg hover:bg-[#36a268] transition duration-300">
              Buy Now
            </button>
          </div>
        </div>

        {/* Platinum Membership */}
        <div className="w-full sm:w-1/3 lg:w-1/4 bg-zinc-800 p-8 rounded-xl shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-violet-400">
              Platinum Membership
            </h3>
            <p className="text-xl mt-2">₹3,300 Every month</p>
            <p className="text-base text-zinc-300 mt-4">
              Perfect for committed trainers
            </p>
            <p className="text-base text-zinc-300 mt-2">Valid for 2 months</p>
            <ul className="text-base text-zinc-300 mt-4 list-disc list-inside">
              <li>Unlimited Classes</li>
              <li>Fitness assessment</li>
              <li>Locker room with showers</li>
              <li>Free parking</li>
              <li>Guest Privileges</li>
            </ul>
          </div>
          <div className="mt-8 flex justify-center">
            <button className="px-8 py-3 bg-[#43b878] text-white rounded-lg text-lg hover:bg-[#36a268] transition duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
