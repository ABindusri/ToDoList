import React from 'react'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

const PageComp = () => {
  return (
    <div className=''>
        
         <h1 className='text-pink-600 font-dancing sm:pl-96 font-extrabold pt-8 sm:ml-60 sm:text-6xl text-3xl pl-0 ml-0 text-center'>     To Do List</h1>
    <h3 className='font-manjari text-gray-600 text-center  text-lg sm:text-xl pt-2 sm:pl-96 sm:ml-44 '> Enter your task List in the below box</h3>
    <div className='flex sm:px-96 justify-center pt-8 '>
    <input type='text' placeholder='Enter your task here' required className='text-neutral-600   border-solid border border-fuchsia-700 m-2 p-2 text-sm  sm:w-[30rem] w-[17rem]  ' />
    <button className='bg-violet-700 text-white rounded-md sm:px-3 sm:py-2 px-2 py-1
hover:bg-fuchsia-600 pt-1 pb-1 sm:mx-2 sm:my-2 m-3 h-18 w-auto'> <PlaylistAddIcon/>  Add Task  </button>
</div>
</div>
  )
}

export default PageComp