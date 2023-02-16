import { useEffect, useRef, useState } from "react";
import NavLinks from "../NavLinks";

import "./navbar.css";

export default function NavBar() {
  // Add state to keep track of whether the user scrolled more than
  // 50px, and if so, hide the navbar
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    // Get the current scroll position
    const currentScrollPos = window.pageYOffset;

    // Set the navbar to be visible if:
    // 1. The user scrolled down more than 70px
    // 2. The user scrolled up
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

    // Set state to the new scroll position
    setPrevScrollPos(currentScrollPos);
  };

  // Add an event listener to the window to listen for scroll events
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const links = [
    {
      name: "Home",
      ref: useRef()
    },
    {
      name: "About",
      ref: useRef()
    },
    {
      name: "Join",
      ref: useRef()
    }
  ];

  return (
    <div className="navbar-wrapper">
      <div className="navbar" style={{ top: visible ? "10px" : "-60px" }}>
        <a href="/" className="navbar-title scale-on-hover">
          Haxiom
        </a>

        <NavLinks lastSelected="" links={links} />
      </div>
    </div>
  );
}
