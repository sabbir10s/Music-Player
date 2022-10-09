import React from 'react';

import './HomePage.css'
import Player from './Player';
import Popular from './Popular';
import Sidebar from './Sidebar';

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
                        <Sidebar />
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default HomePage;