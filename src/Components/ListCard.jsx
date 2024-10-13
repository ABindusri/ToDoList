import React from 'react'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
const ListCard = (props) => {
    
  return (
    <div className=' flex text-center justify-center '> {/* flex is used here to make the list cards centre of the page*/}
    <div className=' flex items-center justify-center align-middle bg-fuchsia-200 border-solid border-2 border-purple-300 sm:px-16 px-8 sm:py-3 py-2 sm:mx-6 mx-3 sm:my-3 my-2 rounded   '> {/* flex is used  to align all the items in list card*/}
        
        <BookmarkIcon className=' text-pink-600'/>
        <p className=' font-manjari text-zinc-600 sm:text-lg text-md sm:px-3 px-1'>{props.task} </p>
        <EditNoteIcon className=' text-gray-500 hover:text-pink-600 cursor-pointer'/>
        <DeleteIcon className=' text-gray-500 hover:text-pink-600 cursor-pointer' />
    </div>
    </div>
  )
}

export default ListCard