"use client"
import React, { useEffect, useState } from 'react';


const LotteryBar = () => {

    const [timeValue, setTimeValue] = useState('0');
    const [index, setIndex] = useState('0');
    const [winner, setWinner] = useState('No winner yet!');
    const [showModal, setShowModal] = useState(false);

    const fetchVariableValue = async () => {
        try {
            const response = await fetch('http://localhost:3001/getInfos');
            const data = await response.json();
            setTimeValue(data.subscriptionDurationInSeconds.toString());
            setIndex(data.addressEligible.toString());
        } catch (error) {
            console.error('Error fetching variable:', error);
        }
    };

    const fetchWinnerFromServer = async () => {
        try {
            const response = await fetch('http://localhost:3001/getInfos');
            const data = await response.json();
            setWinner(data.winner);
        } catch (error) {
            console.error('Error fetching winner:', error);
        }
    };

    useEffect(() => {
        fetchVariableValue();
        fetchWinnerFromServer();

        const interval = setInterval(() => {
            fetchVariableValue();
            fetchWinnerFromServer();
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div>
            <div className='bg-greenclear py-1 text-bg'>
                <div className='mx- flex grid-cols-4 gap-x-10 justify-center'>
                    <p className='text-xs font-semibold border border-bg bg-greendark rounded-xl px-2 py-2'><span className='flex items-center justify-center'>🎈 Bridge Lottery Running for ➜ <span className='px-2 text-sm text-whitebg'>{timeValue === '0' ? 'Finished!' : `${timeValue + 's'}`}</span></span></p>
                    <p className='text-xs font-semibold border border-bg bg-greendark rounded-xl px-2 py-2'><span className='flex items-center justify-center'>👥 Total Address Eligible ➜ <span className='px-2 text-sm text-whitebg'>{index}</span></span></p>
                    <p className='text-xs font-semibold border border-bg bg-greendark rounded-xl px-2 py-2'><span className='flex items-center justify-center'>🏆 Winner ➜ <span className='px-2 text-sm text-whitebg'><a href={`https://blockscan.com/address/${winner}`} className=' underline'> {winner}</a></span></span></p>
                    <button className='text-xs font-semibold border border-bg bg-greendark rounded-xl px-2 py-2' onClick={toggleModal}>📖 How it works?</button>
                </div>
            </div>
            {showModal && (
                <div className='modal'>
                    <div className='modal-content bg-bg flex justify-center items-center'>
                        <span className='close' onClick={toggleModal}></span>
                        <p className='font-semibold px-2 pt-3 pb-4 text-sm text-center'>
                            ℹ️ To encourage users to use MODE bridge, we are running a lottery using <a href='https://github.com/BridgeLottery' className='text-greenclear underline'>Bridge Lottery</a>. Each user is entered into a mapping and the winner of the lottery is selected randomly. <a href='https://github.com/BridgeLottery' className='text-greenclear underline'>Click here to find out more about how it works</a>.
                        </p>
                    </div>
                    <hr />
                </div>

            )}
            <div className='pt-5'></div>
        </div>
    );
};

export default LotteryBar;