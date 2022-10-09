import React from 'react';
import { BsWindowSidebar } from 'react-icons/bs';

import logo from '../img/logo.png'
import './HomePage.css'
import Player from './Player';
import Popular from './Popular';

const HomePage = () => {
    return (
        <div className='bg-base-200'>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-base-100 border-l grid grid-cols-3 ">
                    <div className='col-span-2 pt-3 '>
                        <Popular />
                        <Player />
                    </div>
                    <div className='col-span-1 border-l'>
                    </div>
                </div>
                <div className="drawer-side">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-72 bg-base-100 shadow-xl text-base-content">
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
                            <div className=' font-medium text-2xl'><span className='text-primary'>Sazhe</span><span>Sound</span></div>
                        </div>

                        <div className='mt-10'>
                            <div className='flex items-center gap-5 font-bold'>
                                <BsWindowSidebar className='text-lg text-error ' />
                                <p>Home</p>
                            </div>
                            <div className='flex items-center gap-5 mt-5 text-base-300'>
                                <BsWindowSidebar className='text-lg' />
                                <p>Trends</p>
                            </div>
                            <div className='flex items-center gap-5 mt-5 text-base-300'>
                                <BsWindowSidebar className='text-lg' />
                                <p>Library</p>
                            </div>

                            <p className='mt-6 text-sm text-base-300'>Discover</p>
                            <div className='flex items-center gap-5 mt-3 text-base-300'>
                                <BsWindowSidebar className='text-lg' />
                                <p>Discover Weekly</p>
                            </div>
                            <div className='flex items-center gap-5 mt-3 text-base-300'>
                                <BsWindowSidebar className='text-lg' />
                                <p>Made For You</p>
                            </div>
                            <div className='flex items-center gap-5 mt-3 text-base-300'>
                                <BsWindowSidebar className='text-lg' />
                                <p>Daily Mix</p>
                            </div>

                            <p className='mt-6 text-sm text-base-300'>Your Collection</p>
                            <div className='flex items-center gap-5 mt-3 text-base-300'>
                                <BsWindowSidebar className='text-lg' />
                                <p>Liked Songs</p>
                            </div>
                            <div className='flex items-center gap-5 mt-3 text-base-300'>
                                <BsWindowSidebar className='text-lg' />
                                <p>Favorite Artist
                                </p>
                            </div>
                            <div className='flex items-center gap-5 mt-3 text-base-300'>
                                <BsWindowSidebar className='text-lg' />
                                <p>Playlist </p>
                            </div>
                        </div>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default HomePage;