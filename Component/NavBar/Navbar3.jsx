import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { BiUserCircle } from "react-icons/bi";

function Navbar3() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navBar'>
          <a href='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </a>
          <ul id="navBar_ul">
            <li>
              <a id="navBar_ul_li_a" href='#'  title="Home">
                <AiIcons.AiFillHome />
              </a>
            </li>
            <li>
              <a id="navBar_ul_li_a"  href='#'  title="Service">
              <AiIcons.AiOutlineGlobal />
              </a>
            </li>
            <li>
              <a id="navBar_ul_li_a"  href='#'  title= "Login">
                    <BiUserCircle/>
              </a>
            </li>
          </ul>
        </div>
        <nav className= {sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items ' onClick={showSidebar}>
            <li className='navBar-toggle'>
              <a href='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </a>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index}
                 className={item.cName}>
                  <a href={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar3;
