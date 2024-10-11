import React from 'react'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

const PageComp = () => {
  return (
    <div className=''>
        
         <h1 className='text-pink-600 font-dancing pl-96 font-extrabold pt-8 ml-60 text-6xl'>     To Do List</h1>
    <h3 className='font-manjari text-gray-600 text-xl pt-2 pl-96 ml-44'> Enter your task List in the below box</h3>
    <div className='flex px-96 justify-center pt-8'>
    <input type='text' placeholder='Enter your task here' required className='text-neutral-600   border-solid border border-fuchsia-700 m-2 p-2 text-sm w-[30rem] ' />
    <button className='bg-violet-700 text-white rounded-md px-3 py-2
hover:bg-fuchsia-600 pt-1 pb-1 mx-2 my-2 m-3 h-18 w-auto'> <PlaylistAddIcon/>  Add Task  </button>
</div>
</div>
  )
}

export default PageComp