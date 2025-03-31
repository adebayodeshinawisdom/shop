import { ShoppingCart } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='bg-blue-800 text-white py-1 px-2 flex justify-between'>
        <div className='flex gap-3'> 
           <div className='w-10 h-10'>
           <img src="https://img.freepik.com/free-vector/gradient-mobile-store-logo-design_23-2149697771.jpg?t=st=1741442017~exp=1741445617~hmac=f8247cd6ffd23626dea6450fd79cff7c2b3e507be60291f761b1b51eb2a631b8&w=740" alt="logo" className="h-10 w-10 rounded-full"/>
           </div>
            <h3 className='font-bold'>FancyShop</h3>
        </div>

        <div className='flex gap-3'>
            <a href='#' className='hover:text-blue-200'>Home</a>
            <a href='#' className='hover:text-blue-200'>About FancyShop</a>
            <a href='#' className='hover:text-blue-200'>Sign Up</a>
            <a href='#' className='hover:text-blue-200'><ShoppingCart/></a>


        </div>

    </div>
  )
}

export default Header