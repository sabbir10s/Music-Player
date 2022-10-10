import React from 'react';
import { MdPlaylistAdd, MdOutlineSkipNext, MdOutlineSkipPrevious, MdPauseCircleFilled, MdOutlineRssFeed } from 'react-icons/md';
import { TiArrowLoop } from 'react-icons/ti';
import { BsVolumeOff } from 'react-icons/bs';
import { RiVolumeDownLine } from 'react-icons/ri';
import { FaRandom } from 'react-icons/fa';

const AudioPlayer = () => {
    return (
        <div className='mt-6 px-5 w-full border-t'>
            <div className='text-3xl grid grid-cols-4 pt-4'>
                <div className=' col-span-1 flex items-center gap-3'>
                    <MdPlaylistAdd className='hover:text-primary duration-300 cursor-pointer' />
                    <MdOutlineRssFeed className='hover:text-primary duration-300 cursor-pointer text-2xl' />
                </div>
                <div className=' col-span-2 flex items-center justify-center gap-5'>

                    <MdOutlineSkipPrevious className='hover:text-primary duration-300 cursor-pointer' />
                    <FaRandom className='text-xl hover:text-primary duration-300 cursor-pointer' />

                    <MdPauseCircleFilled className='hover:text-primary duration-300 cursor-pointer' />

                    <MdOutlineSkipNext className='hover:text-primary duration-300 cursor-pointer' />
                    <TiArrowLoop className='hover:text-primary duration-300 cursor-pointer' />

                </div>
                <div className=' col-span-1 flex items-center justify-end gap-1'>
                    <BsVolumeOff className='hover:text-primary duration-300 cursor-pointer' />
                    <div className='bg-gray-300 w-20 h-1 rounded-full'>
                        <div className='bg-primary w-12 h-1 rounded-full'></div>
                    </div>
                    <RiVolumeDownLine className='text-2xl hover:text-primary duration-300 cursor-pointer' />
                </div>
            </div>

            <div className='mt-4 flex items-center gap-3'>
                <p className='text-sm'>1:40</p>
                <div className='bg-gray-300 w-full h-1 rounded-full'>
                    <div className='bg-primary w-1/2 h-1 rounded-full'></div>
                </div>
                <p className='text-sm'>3:15</p>
            </div>
        </div>
    );
};

export default AudioPlayer;