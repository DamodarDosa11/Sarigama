import React from "react";

const Navbar = () => {
  return (
    <div>
      <section>
        <div className="w-full bg-green-500 transition-all duration-300 flex items-center p-4 gap-8">
  <h1 className="text-5xl font-extrabold text-green-400 cursor-pointer">
    Sarigama
  </h1>

  <input
    type="text"
    className="bg-white rounded-3xl text-gray-600 px-4 py-2 w-40 focus:outline-none"
  />

  <div className="group transition-all cursor-pointer rounded-full shrink-0 bg-green-400 hover:text-green-300 hover:bg-blue-500 w-12 h-12 flex items-center justify-center">
    <i className="fa-solid fa-magnifying-glass text-blue-500 group-hover:text-green-400 text-lg"></i>
  </div>

  <div className="flex justify-end gap-4 w-full transition-colors duration-300">
    <button className="rounded-2xl bg-green-400 w-25 cursor-pointer hover:bg-blue-500 hover:text-green-400 text-blue-500">Register</button>
    <button className="rounded-2xl bg-green-400 w-25 cursor-pointer hover:bg-blue-500 hover:text-green-400 text-blue-500">Login</button>
  </div>
</div>
      </section>
    </div>
  );
};

export default Navbar;
