import React from 'react';
import logo from './../assets/images/logo.png';
import HeaderItem from '../components/HeaderItem';

import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from 'react-icons/hi2';

function Header() {
  const menu = [
    { name: "HOME", icon: HiHome },
    { name: "SEARCH", icon: HiMagnifyingGlass },
    { name: "WATCHLIST", icon: HiStar },
    { name: "ORIGINALS", icon: HiPlayCircle },
    { name: "MOVIES", icon: HiTv },
    { name: "SERIES", icon: HiTv },
  ];
  
  return (
    <div>
      <img src={logo} className="w-[80px] md:w-[115px] object-cover" />
      {menu.map((item, index) => (
        <HeaderItem key={index} name={item.name} Icon={item.icon} />
      ))}
    </div>
  );
}

export default Header;
