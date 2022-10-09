import React from 'react';
import logo from '../img/logo.png'
import { BsWindowSidebar } from 'react-icons/bs';
import { AiFillHome, AiOutlineHeart } from 'react-icons/ai';
import { TbFocus } from 'react-icons/tb';
import { MdOutlineLibraryMusic, MdQueueMusic } from 'react-icons/md';
import { BsCalendar2Week } from 'react-icons/bs';
import { RiMedal2Line, RiMusic2Line, RiUserHeartLine } from 'react-icons/ri';

const LeftSidebar = () => {
    return (
        <div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <div className='bg-error w-4 h-4 rounded-full'></div>
                    <div className='bg-warning w-4 h-4 rounded-full'></div>
                    <div className='bg-success w-4 h-4 rounded-full'></div>
                </div>
                <BsWindowSidebar className='text-lg' />
            </div>
            <div className='flex items-center gap-2 mt-10'>
                <img className='w-[40px]' src={logo} alt="" />
                <div className=' font-medium text-2xl'><span className='text-primary'>Play</span><span>Station</span></div>
            </div>

            <div className='mt-8'>
                <div className='flex items-center gap-5 font-semibold text-base-300 hover:text-primary cursor-pointer'>
                    <AiFillHome className='text-lg text-primary ' />
                    <p className='text-black'>Home</p>
                </div>
                <div className='flex items-center gap-5 mt-5 font-semibold text-base-300 hover:text-primary cursor-pointer'>
                    <RiMedal2Line className='text-lg' />
                    <p className='hover:text-black'>Trends</p>
                </div>
                <div className='flex items-center gap-5 mt-5 font-semibold text-base-300 hover:text-primary cursor-pointer'>
                    <RiMusic2Line className='text-lg' />
                    <p className='hover:text-black'>Library</p>
                </div>

                <p className='mt-6 text-sm text-base-300'>Discover</p>
                <div className='flex items-center gap-5 mt-5 font-semibold text-base-300 hover:text-primary cursor-pointer'>
                    <BsCalendar2Week className='text-lg' />
                    <p className='hover:text-black'>Discover Weekly</p>
                </div>
                <div className='flex items-center gap-5 mt-5 font-semibold text-base-300 hover:text-primary cursor-pointer'>
                    <TbFocus className='text-lg' />
                    <p className='hover:text-black'>Made For You</p>
                </div>
                <div className='flex items-center gap-5 mt-5 font-semibold text-base-300 hover:text-primary cursor-pointer'>
                    <MdOutlineLibraryMusic className='text-lg' />
                    <p className='hover:text-black'>Daily Mix</p>
                </div>

                <p className='mt-6 text-sm text-base-300'>Your Collection</p>
                <div className='flex items-center gap-5 mt-5 font-semibold text-base-300 hover:text-primary cursor-pointer'>
                    <AiOutlineHeart className='text-lg' />
                    <p className='hover:text-black'>Liked Songs</p>
                </div>
                <div className='flex items-center gap-5 mt-5 font-semibold text-base-300 hover:text-primary cursor-pointer'>
                    <RiUserHeartLine className='text-lg' />
                    <p className='hover:text-black'>Favorite Artist</p>
                </div>
                <div className='flex items-center gap-5 mt-5 font-semibold text-base-300 hover:text-primary cursor-pointer'>
                    <MdQueueMusic className='text-lg' />
                    <p className='hover:text-black'>Playlist </p>
                </div>
            </div>
        </div>
    );
};

export default LeftSidebar;