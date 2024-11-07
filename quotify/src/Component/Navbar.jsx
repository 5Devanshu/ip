import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <div className='flex  h-[90px] w-full shadow-md shadow-yellow-200'>

            <div className='flex justify-between items-center '>

                <Link to = "/" className='flex'>
                    <img src="\public\image.png" alt="" className='flex h-[90px] '/>
                </Link>

                

                <Link to = "/register" className='flex font-semibold text-[20px] ml-20'>
                    Register
                </Link>

                <Link to = "/login" className='flex font-semibold text-[20px] ml-20'>
                    Login
                </Link>

               

            </div>

            <div className='absolute top-7  left-[1200px]'>
                <input type="text" className='border-2 rounded-md border-yellow-200 py-2 px-2 placeholder:text-black placeholder:px-2' placeholder='Enter a Quote' />
            </div>
            
        </div>
    </div>
  )
}
