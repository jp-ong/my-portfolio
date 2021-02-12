import Link from "next/link";
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="#intro">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="#skills">
            <a>Skills</a>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
