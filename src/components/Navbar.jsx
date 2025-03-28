import React, { useState } from 'react';
import { styles } from '../styles';
import { Link } from 'react-router-dom';
import { logo , menu , close} from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {

  const [active,setActive] = useState(" ")
  const [toggle,setToggle] = useState(false)

  return (
    <nav className={
      `${styles.paddingX} w-full flex items-center py-5 
      fixed top-0 z-20 bg-primary`
    }> 
    <div className='w-full flex justify-between 
    items-center max-w-7xl mx-auto'>
    <Link 
      to='/' 
      className='flex items-center gap-2'
      onClick={() => { 
        setActive("")
        window.scrollTo(0,0)
      }}
      >
        <img src={logo} alt="logo" className='w-9 
        h-9 object-contain'/>
        <p
        className='text-white text-[18px] font-bold cursor-pointer flex'>
          Aren &nbsp; <span className='sm:block hidden'> | Portfolio</span></p>
      </Link>
      <ul className='list-none hidden sm:flex flex-row gap-10'>
        {navLinks.map((link) => (
          <li key={link.id} 
          className={`
          ${active === link.title ? "text-white"
          :"text-secondary"} hover:text-white text-[18px] font-medium curspor-pointer`}
          onClick={() => setActive(link.title)}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img 
        src={toggle ? close : menu} 
        alt="menu" 
        className='w-[28px] h-[28px] cursor-pointer object-contain'
        onClick={() => setToggle(!toggle)}/>
      </div>

      <div className={
        `${!toggle ? 'hidden' : 'flex'} p-6 absolute black-gradient right-0
        top-20 mx-4 my-2 z-10 min-w-[140px] rounded-xl`}>
          <ul className='list-none flex justify-end items-start flex-col gap-4'>
        {navLinks.map((link) => (
          <li key={link.id} 
          className={`
          ${active === link.title ? "text-white"
          :"text-secondary"}  font-poppins font-medium text-[16px] curspor-pointer`}
          onClick={() => {
            setActive(link.title);
            setToggle(!toggle)
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