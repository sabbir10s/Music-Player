import React from 'react';
const HomePage = () => {
    return (
        <div className='bg-base-200'>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-base-100 grid grid-cols-2">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nesciunt! Assumenda rem iste temporibus corrupti facilis consectetur itaque reprehenderit minus accusantium ipsum quibusdam excepturi nam aut nobis et, est harum.
                    </p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid eos sed temporibus eligendi atque! Impedit quisquam deleniti, facilis nemo assumenda ratione laborum vitae! Minus aliquid ratione magnam alias quibusdam neque!</p>
                </div>
                <div className="drawer-side">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-56 bg-base-100 shadow-xl text-base-content">

                        <p className='p-3'>Add New Product</p>
                        <p className='p-3'>Menage Products</p>
                        <p className='p-3'>Menage Orders</p>
                        <p className='p-3'>Menage Users</p>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default HomePage;