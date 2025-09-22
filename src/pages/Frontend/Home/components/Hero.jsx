import React from "react";
import Hope from "../../../../assets/children2.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative bg-gradient-to-r from-bar/10 via-white to-bar/5 py-16 px-6 rounded-2xl shadow-md w-[90%] mx-auto mt-8">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            One <span className="text-bar">Donation</span> <br />
            A New <span className="text-bar">Hope</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Together we can make an impact. Your contribution helps us provide 
            shelter, food, and education for families in need.  
          </p>
          <div className="flex gap-4">
            <button onClick={()=> navigate("/dashboard/on-going")} className="btn-primary !px-8 !py-3 text-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300">
              Donate Now
            </button>
            <button className="border border-bar text-bar px-8 py-3 rounded-xl font-medium hover:bg-bar hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src={Hope}
            alt="Better Hope"
            className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
          />
          <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-md px-6 py-4">
            <p className="text-bar font-bold text-xl">💙 10,000+ Lives Touched</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
