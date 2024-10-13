import React from 'react'

const FooterComp = () => {
    const fullyear= new Date()
    const year=fullyear.getFullYear()
    console.log(year)

  return (
    <div>
       
        <h4 className=' text-purple-900  font-manjari text-center pt-5 py-3 bg-fuchsia-200  sm:mt-96 mt-[510px]  text-xl'>copyright © {year}  To Do List | All rights reserved</h4>
       
        </div>
  )
}

export default FooterComp