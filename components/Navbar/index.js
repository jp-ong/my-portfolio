import Link from "next/link";
const Navbar = ({ active }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="#">
            <a className={active === "intro" ? "active" : ""}>
              <span className="fas fa-address-card"></span>Info
            </a>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <a className={active === "about" ? "active" : ""}>
              <span className="fas fa-user"></span>About
            </a>
          </Link>
        </li>
        <li>
          <Link href="#skills">
            <a className={active === "skills" ? "active" : ""}>
              <span className="fas fa-tools"></span>Skills
            </a>
          </Link>
        </li>
        <li>
          <Link href="#projects">
            <a className={active === "projects" ? "active" : ""}>
              <span className="fas fa-project-diagram"></span>Projects
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
