import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-orange-100 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <span className='text-orange-500'>Carnet</span>
                <span className='text-orange-500'>Group</span>
            </h1>
        </Link>
        <form className='bg-orange-200 p-3 rounded-lg flex items-center'>
            <input type='text' placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64 '/>
            <FaSearch className='text-orange-600'/>
        </form>
        <ul className='flex gap-4'>
            <Link to='/home'>
                <li className='hidden sm:inline text-orange-600 hover:underline'>Home</li>
            </Link>
            <Link to='/about'>
                <li className='hidden sm:inline text-orange-600 hover:underline'>About</li>
            </Link>
            <Link to='/sign-in'>
                <li className='hidden sm:inline text-orange-600 hover:underline'>SignIn</li>
            </Link>
            <Link to='/sign-up'>
                <li className='hidden sm:inline text-orange-600 hover:underline'>SignUp</li>
            </Link>
        </ul>
        </div>
    </header>
  )
}
