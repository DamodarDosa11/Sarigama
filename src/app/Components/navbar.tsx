"use client";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-green-500 px-8 py-6">

      {/* Top Row */}
      <div className="flex items-center">

        {/* Logo (UNCHANGED) */}
        <div>
          <h1 className="text-4xl leading-none font-extrabold text-green-400 hover:text-blue-300 cursor-pointer">
            Sarigama
          </h1>
        </div>

        {/* CENTER SECTION (All Buttons Vertically Centered) */}
        <div className="flex-1 flex items-center justify-center gap-6">

          <button className="px-4 py-2 rounded-2xl bg-green-400 text-blue-500 hover:bg-blue-500 hover:text-green-400 transition">
            Playlists
          </button>

          <button className="px-4 py-2 rounded-2xl bg-green-400 text-blue-500 hover:bg-blue-500 hover:text-green-400 transition">
            Artists
          </button>

          <button className="px-4 py-2 rounded-2xl bg-green-400 text-blue-500 hover:bg-blue-500 hover:text-green-400 transition">
            Me
          </button>

          <button className="px-4 py-2 rounded-2xl bg-green-400 text-blue-500 hover:bg-blue-500 hover:text-green-400 transition">
            Login
          </button>

          <button className="px-4 py-2 rounded-2xl bg-green-400 text-blue-500 hover:bg-blue-500 hover:text-green-400 transition">
            Register
          </button>

        </div>

      </div>

      {/* Search Row */}
      <div className="flex items-center gap-3 mt-6">
        <input
          type="text"
          className="bg-gray-300 rounded-3xl text-green-700 px-4 py-2 w-40 focus:w-80 transition-all duration-300 focus:outline-none"
        />
        <div className="group cursor-pointer rounded-full bg-green-400 hover:bg-blue-500 w-12 h-12 flex items-center justify-center transition-all">
          <i className="fa-solid fa-magnifying-glass text-blue-500 group-hover:text-green-400 text-lg"></i>
        </div>
      </div>

    </div>
  );
};

export default Navbar;