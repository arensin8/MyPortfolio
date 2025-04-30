import React, { useState, useEffect } from 'react';
import { styles } from '../styles';
import { Link } from 'react-router-dom';
import { logo, menu, close } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [active, setActive] = useState(' ');
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (toggle) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [toggle]);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 
      left-0 z-20 bg-primary transition-all duration-600 ease-in-out`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Aren &nbsp; <span className="sm:block hidden"> | Portfolio</span>
          </p>
        </Link>

        {/* Desktop Menu */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Blurred backdrop for mobile menu */}
        {toggle && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-10 sm:hidden"></div>
        )}

        {/* Mobile Menu Toggle Button */}
        <div className="sm:hidden flex flex-1 justify-end items-center z-30">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[25px] h-[25px] cursor-pointer object-contain"
            onClick={() => setToggle(!toggle)}
          />
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            !toggle ? 'hidden' : 'flex'
          } p-6 absolute bg-tertiary right-0 top-20 mx-4 my-2 z-10
           min-w-[140px] min-h-[180px] rounded-xl`}
        >
          <ul className="list-none flex justify-between items-start flex-col gap-4">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? 'text-white' : 'text-secondary'
                } font-poppins font-medium text-[16px] cursor-pointer`}
                onClick={() => {
                  setActive(link.title);
                  setToggle(!toggle);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
