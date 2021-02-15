import Link from "next/link";
const Navbar = ({ active }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="#">
            <a className={active === "intro" ? "active" : ""}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <a className={active === "about" ? "active" : ""}>About</a>
          </Link>
        </li>
        <li>
          <Link href="#skills">
            <a className={active === "skills" ? "active" : ""}>Skills</a>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <a className={active === "contact" ? "active" : ""}>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
