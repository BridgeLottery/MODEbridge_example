import React from 'react'

const Bridge = () => {
    return (
        <div>
            <div className='pt-24 max-w-3xl mx-auto justify-cente'>
                <p className='text-4xl px-8'>Bridge</p>
                <div className='pt-5'></div>
                <div className='border border-borderbg pt-8 px-10 bg-bg transparent'>
                    <div className='flex'>
                        <span className='text-greenclear font-bold pt-2'>
                            DEPOSIT FROM
                        </span>
                        <div className='flex'>
                            <span className='border border-borderbg bg-bgbg text-whitebg flex items-center px-3 mx-4 py-2 rounded-lg'>
                                <img src="./eth.svg" alt="" className="mr-2" />
                                Sepolia
                                <img src="./chev.svg" alt="" className="ml-2" />
                            </span>
                        </div>
                    </div>
                    <div className='pt-6'>
                        <div className='pt-2 border border-borderbg bg-bgbg rounded-xl py-2 flex'>
                            <input placeholder="0" min="0" className='bg-bgbg mx-5' />
                            <div className='ml-auto border-l border-borderbg px-2'></div>
                            <img alt="Ethereum Mainnet" className="w-4 h-4 m-1" src="./ethblue.svg" />
                            <span className='mx-3 flex items-center justify-center font-semibold'>
                                ETH
                                <span className='flex items-center'>
                                    <img src="./chev.svg" alt="" className="ml-2" />
                                </span>
                            </span>
                        </div>
                    </div>
                    <span className='text-xs text-borderbg'>1.01 available</span>
                    <div className='pt-6 flex items-center'>
                        <hr className='flex-grow border-t border-greenclear' />
                        <button className='relative bg-greenclear text-bg px-3 py-1 rounded-lg flex justify-center items-center'>
                            Switch
                            <img src="./arrow.svg" alt="" className="ml-2" />
                        </button>
                        <hr className='flex-grow border-t border-greenclear' />
                    </div>
                    <div className='pt-8 flex items-center'>
                        <span className='text-greenclear font-bold'>
                            TO MODE TESTNET
                        </span>
                        <img src="./mode.svg" alt="" className="ml-2" />
                    </div>
                    <p className='font-semibold pt-7'>Total:</p>
                    <div className='justify-end flex mx-auto pt-24'>
                        <button className='bg-greenclear text-bg mx-4 px-3 py-2 rounded-lg'>Move funds to MODE</button>
                    </div>
                    <div className='pt-5'></div>
                </div>
            </div>
        </div>
    )
}

export default Bridge
