import React from 'react'

import Icon from '../assets/icon.png'
const HeaderComp = () => {
  return (
   
   <div className='flex items-center bg-fuchsia-200	border-b-2 border-fuchsia-300'>
    <img src={Icon} alt='AppLogo' className='h-14 w-auto p-2 pl-5 drop-shadow-xl  ' ></img>

        <h4 className=' text-purple-900 font-bold font-dancing pl-2 text-xl'>To Do List</h4>
        </div>
       
  )
}

export default HeaderComp