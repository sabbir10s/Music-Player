import React, { useEffect, useState } from 'react';
import { GoVerified } from 'react-icons/go';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import person from '../img/person.png'

const Popular = () => {
    const [songList, setSongList] = useState([])
    useEffect(() => {
        fetch('popular.json')
            .then(res => res.json())
            .then(data => setSongList(data))
    }, [])
    console.log(songList);
    return (
        <div>
            <div className='px-5 flex justify-between items-center gap-14'>
                <div className='flex items-center gap-10'><span><AiOutlineLeft /></span> <span><AiOutlineRight className='text-base-300/70' /></span></div>
                <input className='border rounded-full py-1 px-3 w-full bg-base-200/50' type="text" name="" id="" />
            </div>
            <div className='px-5 mt-[60px] '>
                <div className='bgImg rounded-xl grid grid-cols-2'>
                    <div className='flex items-center pl-5'>
                        <div>
                            <div className='text-sm flex items-center gap-2'><span className='text-blue-400'><GoVerified /></span> <span className='text-base-200'>Verified artist</span></div>
                            <h1 className='text-4xl text-base-100 font-bold mb-5'>Justin Bieber</h1>
                            <p className='text-sm text-base-200'>48,584,752 monthly listener</p>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <img className='w-[200px] mt-[-70px]' src={person} alt="" />
                    </div>
                </div>
            </div>

            <div>
                <div className='flex justify-between px-5 my-5'>
                    <h3 className='text-3x font-bold'>Popular</h3>
                    <small>See All</small>
                </div>

                <div className=''>
                    <table className='w-full'>
                        <tr>
                            <th className='text-left font-medium pl-3 pb-2 text-sm uppercase'>#</th>
                            <t></t>
                            <th className='text-left font-medium pb-2 text-sm uppercase'>Title</th>
                            <th className='text-left font-medium pb-2 text-sm uppercase'>Playing</th>
                            <th className='text-left font-medium pb-2 text-sm uppercase'>Time</th>
                            <th className='text-left font-medium pb-2 text-sm uppercase'>Album</th>
                        </tr>
                        {
                            songList?.map((song) => <tr key={song.id} className='cursor-pointer border-l-2 border-base-100 hover:bg-base-200/50 hover:border-l-2 hover:border-primary text-base-300/80 hover:text-black'>
                                <td className='text-left text-sm p-3'>{song.id}</td>
                                <td className='text-center'><img className='w-[35px]' src={song.img} alt="" /></td>
                                <td className='text-left text-sm'>{song.title}</td>
                                <td className='text-left text-sm'>{song.playing}</td>
                                <td className='text-left text-sm'>{song.time}</td>
                                <td className='text-left text-sm'>{song.album}</td>
                            </tr>)
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Popular;