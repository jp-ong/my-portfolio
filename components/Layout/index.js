import Navbar from "components/Navbar";

const Layout = ({ children, active }) => {
  return (
    <>
      <Navbar active={active} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
