import Link from "next/link";
import { useState } from "react";
const Navbar = () => {
  const [link, setLink] = useState("top");
  return (
    <nav>
      <ul>
        <li>
          <Link href="#">
            <a
              className={link === "top" ? "active" : undefined}
              onClick={() => setLink("top")}
            >
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <a
              className={link === "about" ? "active" : undefined}
              onClick={() => setLink("about")}
            >
              About
            </a>
          </Link>
        </li>
        <li>
          <Link href="#skills">
            <a
              className={link === "skills" ? "active" : undefined}
              onClick={() => setLink("skills")}
            >
              Skills
            </a>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <a
              className={link === "contact" ? "active" : undefined}
              onClick={() => setLink("contact")}
            >
              Contact
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
