import React, { useEffect, useState } from 'react';
import profilePic from '../img/person2.png'
import { RiVipCrownFill } from 'react-icons/ri';
import { AiOutlineBell } from 'react-icons/ai';
const RightSidebar = () => {
    const [songList, setSongList] = useState([])
    useEffect(() => {
        fetch('recentlyPlayed.json')
            .then(res => res.json())
            .then(data => setSongList(data))
    }, [])

    return (
        <div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <div>
                        <img className='w-12 h-12 rounded-full border border-primary' src={profilePic} alt="" />
                    </div>
                    <div>
                        <h2 className='text-lg font-medium'>Sabbir Ahmed</h2>
                        <div className='flex items-center gap-2'><span className='text-sm text-base-300'>Premium Member</span> <RiVipCrownFill className='text-orange-300' /></div>
                    </div>
                </div>
                <div>
                    <AiOutlineBell className='text-2xl relative' />
                    <div className='bg-red-500 w-2 h-2 border border-black  rounded-full mt-[-18px] ml-[15px] absolute'></div>
                </div>
            </div>
            <div className='flex justify-between my-5'>
                <h3 className='text-3x font-bold'>Recent Played</h3>
                <small>See All</small>
            </div>
            <div>
                {
                    songList.map((song) => <>
                        <table className='w-full text-left' key={song.id}>
                            <tr>
                                <td>
                                    <img className='w-12 h-12' src={song.img} alt="" />
                                </td>
                                <td>
                                    <p>{song.title}</p>
                                    <p>{song.singer}</p>
                                </td>
                                <td>{song.time}</td>
                            </tr>
                        </table>
                    </>)
                }
            </div>
        </div>
    );
};

export default RightSidebar;