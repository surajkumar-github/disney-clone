import React from 'react';
import logo from './../assets/images/logo2.png';
import userlogo from './../assets/images/user.png';
import HeaderItem from '../components/HeaderItem';

import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv,HiPlus } from 'react-icons/hi2';

function Header() {
  const menu = [
    { name: "HOME", icon: HiHome },
    { name: "SEARCH", icon: HiMagnifyingGlass },
    { name: "WATCHLIST", icon: HiPlus },
    { name: "ORIGINALS", icon: HiStar },
    { name: "MOVIES", icon: HiPlayCircle },
    { name: "SERIES", icon: HiTv },
  ];
  
  return (
    <div className='flex items-center gap-8 justify-between p-5'>
    <div className='flex items-center gap-8'>

      <img src={logo} className="w-[80px] md:w-[115px] object-cover cursor-pointer" />
      {menu.map((item, index) => (
        <HeaderItem key={index} name={item.name} Icon={item.icon} />
      ))}
    </div>
      <img src={userlogo} className='w-[40px] object-cover rounded-full cursor-pointer'/>
    </div>
  );
}

export default Header;
