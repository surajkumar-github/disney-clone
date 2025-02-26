import React from 'react';

function HeaderItem({ name, Icon }) { // Destructuring props
  return (
    <div className='text-white flex items-center gap-3
    text-[15px] font-semibold cursor-pointer'>
        <Icon />
        <h2>{name}</h2>
    </div>
  );
}

export default HeaderItem;
