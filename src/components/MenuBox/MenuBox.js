import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const MenuBox = () => {
  const [stack, setStack] = useState(true);
  const [about, setAbout] = useState(true);
  const [skills, setSkills] = useState(true);

  useEffect(() => {
    variousPath();
  }, []);

  const variousPath = () => {
    if (window.location.pathname === "/stack") {
      setStack(false);
    }
    if (window.location.pathname === "/about") {
      setAbout(false);
    }
    if (window.location.pathname === "/skills") {
      setSkills(false);
    }
  };

  return (
    <div className="box">
      <div className="nav">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <div className="menu">
          {about && (
            <li>
              <Link to="/about">About</Link>
            </li>
          )}

          <li>
            <Link to="/work">Work</Link>
          </li>
          {skills && (
            <li>
              <Link to="/skills">Skills</Link>
            </li>
          )}
          {stack && (
            <li>
              <Link to="/stack">Stack</Link>
            </li>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuBox;
