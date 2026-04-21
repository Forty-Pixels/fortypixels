import { Menu } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <header className='fixed top-0 left-0 right-0 z-50 py-4 bg-gray-50'>
        <nav className='flex justify-between items-center p-4'>
        <div>Logo</div>
        <Menu />
        
        </nav>
    </header>
  )
}

export default Navbar