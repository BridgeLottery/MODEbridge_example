import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className='py-5 flex'>
                <div className='w-44 px-5'>
                    <img src='./logo.png' alt='logo mode' />
                </div>
                <div className='ml-auto flex px-5'>
                    <button className='text-greenclear border border-greendark rounded-lg px-4 py-1 font-medium'>Connect Wallet</button>
                </div>
            </div>
            <div className='border-white border' />
        </div>
    )
}

export default Navbar
