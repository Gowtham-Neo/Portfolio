import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 hidden py-4 m-0 text-white bg-black border-none md:block rounded-ee-full">
      <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
        <a href="https://www.linkedin.com/in/gowthamneo/" target="_blank" className="mb-2 font-serif text-2xl font-bold text-center text-white md:mb-0">
          <span className="font-serif text-3xl font-bold text-center text-amber-500">{"< G"}</span >owtham
          <span className="text-2xl font-extrabold text-amber-500">{" />"}</span>
        </a>

        <nav>
          <ul className="flex space-x-16">
            <li>
              <a
                href="#home"
                className="text-lg font-semibold transition duration-1000 ease-in-out text-amber-500 hover:border-b-2 border-amber-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-lg font-semibold text-white transition duration-300 hover:text-amber-500 hover:border-b-2 border-amber-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#project"
                className="text-lg font-semibold text-white transition duration-300 hover:text-amber-500 hover:border-b-2 border-amber-500"
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-lg font-semibold text-white transition duration-300 hover:text-amber-500 hover:border-b-2 border-amber-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
