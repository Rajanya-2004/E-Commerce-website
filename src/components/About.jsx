import React from "react";
import aboutImg from "../assets/hero2.jpg"; // replace with your image

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-r from-rose-50 via-white to-pink-50"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left: Image */}
        <div className="md:w-1/2 relative">
          <img
            src={aboutImg}
            alt="About Essence Perfumes"
            className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
          />
          <div className="absolute bottom-0 left-0 p-6 text-white">

            <h3 className="text-2xl font-bold">10+ Years</h3>
            <p className="mt-2">Where luxury meets elegance ✨</p>
            
          </div>
        </div>

        {/* Right: Text */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-amber-950 mb-4">
            About <span className="text-pink-600">Essence</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            At <span className="font-semibold">Essence</span>, we believe that a
            fragrance is more than just a scent — it’s an experience. Our
            carefully curated collection brings together timeless classics and
            modern blends, designed to match every personality, occasion, and
            mood.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            From bold and charismatic notes to soft and elegant aromas, we
            source premium-quality perfumes inspired by global traditions and
            crafted with passion.
          </p>
          <button className="px-6 py-3 bg-pink-600 text-white rounded-full shadow-md hover:bg-pink-700 transition">
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
