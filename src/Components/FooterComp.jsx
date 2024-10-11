import React from 'react'

const FooterComp = () => {
    const fullyear= new Date()
    const year=fullyear.getFullYear()
    console.log(year)

  return (
    <div>
       
        <h4 className=' text-purple-900  font-manjari text-center pt-5 bg-fuchsia-200   text-xl'>copyright © {year} Quick Todo | All rights reserved</h4>
       
        </div>
  )
}

export default FooterComp