import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto justify-content-center text-center">
      <p>
        Copyright &copy; {new Date().getFullYear()}
        <a href="https://facebook.com/ChhetriRocks15/" className="text-black">
          Chhetri Rocks
        </a>
        - All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
