import AnimatedLogo from "../components/AnimatedLogo";

import styled from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <header className={styled.header}>
        Search for a book
        <AnimatedLogo />
      </header>
      {children}
      <footer className={styled.footer}>
        <p>Info Night</p>
      </footer>
    </>
  );
};

export default Layout;
