import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fnativeadvertisinginstitute.com%2Fwp-content%2Fuploads%2F2015%2F03%2FNetflix_Logo_Digital-Video.png&f=1&nofb=1"
        alt="Netflix Logo"
      />

      <img
        className="nav_avatar"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpro2-bar-s3-cdn-cf1.myportfolio.com%2Fdddb0c1b4ab622854dd81280840458d3%2F98032aebff601c1d993e12a0_rw_600.png%3Fh%3D8030f4d5734548795c22da59ca72e3e1&f=1&nofb=1"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
