import React from "react";
import AboutImg from "../../../../assets/betterhope.jpg"; // 👉 replace with your own image

const AboutUs = () => {
  return (
    <div className="w-[90%] mx-auto py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="relative">
          <img
            src={AboutImg}
            alt="About Donors Hub"
            className="rounded-2xl shadow-lg object-cover h-[400px] w-full"
          />
          <div className="absolute top-4 left-4 bg-bar text-white px-4 py-2 rounded-xl text-sm font-semibold shadow">
            Donors Hub
          </div>
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-4xl font-bold text-bar mb-6">About Us</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            At <span className="font-semibold text-bar">Donors Hub</span>, we
            believe in the power of community and compassion. Our mission is to
            connect generous donors with impactful causes that change lives.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            From providing food and clean water to flood-affected families, to
            supporting health and education projects, Donors Hub ensures that
            every contribution makes a real difference. We are committed to
            transparency, trust, and hope for those who need it the most.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-bar/10 p-4 rounded-xl text-center shadow-sm">
              <h3 className="text-2xl font-bold text-bar">500+</h3>
              <p className="text-gray-600 text-sm">Families Supported</p>
            </div>
            <div className="bg-bar/10 p-4 rounded-xl text-center shadow-sm">
              <h3 className="text-2xl font-bold text-bar">100+</h3>
              <p className="text-gray-600 text-sm">Active Donors</p>
            </div>
          </div>

          {/* Button */}
          <button className="btn-primary !px-8 !py-3 rounded-xl font-semibold shadow hover:scale-105 transition">
            Join Our Mission
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
