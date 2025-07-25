import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { navLinks } from "../../constants";

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "#homeNav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "#homeNav",
      { backgroundColor: "transparent", backdropFilter: 'unset' },
      {
        backgroundColor: "#00000050",
        backdropFilter: "blur(7px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  });

  return (
    <nav id="homeNav">
      <div>
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" />
          <p>Velvet Pour</p>
        </a>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
