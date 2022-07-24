import React from "react";

const Footer = () => {
  return (
    <footer className="justify-content-center text-center">
      <p>
        Copyright &copy; {new Date().getFullYear()}
        <a href="https://facebook.com/ChhetriRocks15/" className="text-black">
          from Roll No 13 14 15 16
        </a>
        - All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
