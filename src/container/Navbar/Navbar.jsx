import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { images } from '../../constants';

// import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        {/* <img src={images.TbnLogo} alt="logo" /> */}
      </div>
      <ul className="app__navbar-links">
        <li className="app__flex p-text" style={{fontSize: '30px', color: 'black'}}>
            <a href='/'>TBN Tracking</a>
        </li>
        {/* <li className="app__flex p-text" style={{fontSize: '30px', color: 'black'}}>
            <a href='/admin-tbn-delivery'>Admin</a>
        </li>           */}

      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              <li>
                <a href='/' onClick={() => setToggle(false)}>
                  TBN Tracking
                </a>
              </li>
              <li>
                <a href="/login" onClick={() => setToggle(false)}>
                  Admin
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
