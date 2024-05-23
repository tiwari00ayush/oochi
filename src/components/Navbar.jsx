import React from "react";

const Navbar = () => {
  return (
    <div className="w-full px-16 py-4 flex items-center justify-between fixed z-[999]">
      <div className="logo text-4xl flex-1">
        <h1>ochi</h1>
      </div>
      <div className="navlinks font-['Neue Montreal'] flex items-center justify-between flex-1">
        <div>
          {["Services", "Our work", "About us", "Insights"].map(
            (item, index) => (
              <a key={index} className="text-md font-light mr-5">
                {item}
              </a>
            )
          )}
        </div>
        <a href="#">Contact us</a>
      </div>
    </div>
  );
};

export default Navbar;
