import React, { useState } from 'react';
import logo from './../assets/images/logo2.png';
import userlogo from './../assets/images/user.png';
import HeaderItem from '../components/HeaderItem';
import { HiDotsVertical } from 'react-icons/hi';
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv,HiPlus } from 'react-icons/hi2';

function Header() {
  const [toggle,setToggle]=useState(false);
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
      <div className='hidden md:flex gap-8'>
      {menu.map((item, index) => (
        <HeaderItem key={index} name={item.name} Icon={item.icon} />
      ))}
      </div>
      <div className='flex md:hidden gap-5'>
      {menu.map((item, index) => index<3&&(
        <HeaderItem name={''} Icon={item.icon} />
      ))}
      </div>
      <div className='md:hidden' onClick={()=>setToggle(!toggle)}>
        <HeaderItem name={''} Icon={HiDotsVertical} />
        {toggle? <div className='absolute mt-3 bg-[#121212] border-[1px] border-white p-3 px-5 py-4'>
        {menu.map((item, index) => index>2&&(
        <HeaderItem name={item.name} Icon={item.icon} />
      ))}
        </div>:null}
      </div>
    </div>
      <img src={userlogo} className='w-[40px] object-cover rounded-full cursor-pointer'/>
    </div>
  );
}

export default Header;
