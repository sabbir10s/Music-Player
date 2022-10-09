import React, { useEffect, useState } from 'react';
import profilePic from '../img/person2.png'
import { RiVipCrownFill } from 'react-icons/ri';
import { AiOutlineBell, AiTwotoneHeart } from 'react-icons/ai';
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
                        <img className='w-10 h-10 rounded-full border border-primary' src={profilePic} alt="" />
                    </div>
                    <div>
                        <h2 className='font-medium'>Sabbir Ahmed</h2>
                        <div className='flex items-center gap-2'><span className='text-sm text-base-300'>Premium Member</span> <RiVipCrownFill className='text-orange-300' /></div>
                    </div>
                </div>
                <div>
                    <AiOutlineBell className='text-2xl relative' />
                    <div className='bg-red-500 w-2 h-2 border border-black  rounded-full mt-[-18px] ml-[15px] absolute'></div>
                </div>
            </div>
            <div className='flex justify-between my-4'>
                <h3 className='text-3x font-bold'>Recent Played</h3>
                <small>See All</small>
            </div>
            <div>
                {
                    songList.map((song) => <>
                        <table className='w-full' key={song.id}>
                            <tr className='text-sm'>
                                <td className='pb-1 w-14'>
                                    <img className='w-8 h-8' src={song.img} alt="" />
                                </td>
                                <td className='pb-1'>
                                    <p>{song.title}</p>
                                    <p className='text-base-300/70'>{song.singer}</p>
                                </td>
                                <td className='pb-1 w-20 text-right'>{song.time}</td>
                            </tr>
                        </table>
                    </>)
                }
            </div>

            <div>
                <div className='w-full h-[190px] justinImg rounded-lg my-2'>
                    <img className='w-full' src="" alt="" />
                </div>
                <div className='flex justify-between items-center mt-2'>
                    <div>
                        <h2 className=' font-semibold text-sm'>My World 2.0</h2>
                        <p className='text-sm text-base-300/80'>Justin Bieber</p>
                    </div>
                    <div><AiTwotoneHeart className='text-red-500' /></div>
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;