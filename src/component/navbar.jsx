import React from "react";
//Staeless Functional Component
const Navbar = ({ totalCounters }) => {
  console.log("Navbar-render");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar <span className="badge pill secondary">{totalCounters}</span>
      </a>
    </nav>
  );
};

export default Navbar;
