import React from 'react'
import '../index.css'

const Header = () => {
  return (
    <div className='flex justify-between py-5 px-10 bg-[#080F1C] fixed top-0 right-0 left-0'>
        <div>
           <img className='bg-white rounded-full' src='' alt='logo'/>
        </div>
        <nav className='flex justify-between font-Lato'>
            <button className='bg-transparent px-5 relative inline-block font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-[#B820BB] text-2xl'>InuAi</button>
            <button className='bg-transparent px-5 relative inline-block font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-[#B820BB] text-2xl'>InuArmy</button>
            <button className='bg-transparent px-5 relative inline-block font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-[#B820BB] text-2xl'>Inomics</button>
            <button className='bg-transparent px-5 relative inline-block font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-[#B820BB] text-2xl'>InuMap</button>
            <button className='bg-[#1956F1] px-5 relative inline-block font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-[#B820BB] text-2xl rounded-xl'>Launch Lab</button>
        </nav>
    </div>
  )
}

export default Header