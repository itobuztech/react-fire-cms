import React from 'react';
import { BsCart3 } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

import { routes } from 'routes';
import { SearchField } from './SearchField';
import '../Styles/product-list-header.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'Store/store';

export default function ProductListHeader() {

  const cart = useSelector((state:RootState) => state.cart);

  return (
    <>
      <div className='bg-indigo-400'>
        <div className='pt-5 pb-5 text-white md:justify-around flex navbar'>
          <div className='md:text-2xl sm:text-xl break-words font-bold sm:pl-2 pr-2 pl-2 title'>
            React Fire Shopping Cart
          </div>
          <div className='text-black lg:pr-6 md:pr-6 sm:mr-4 sm:pl-2 search'>
            <SearchField label={'search here...'} />
          </div>
          <div className='flex justify-between nav-items'>
            {/*dropdown */}
            <div className='dropdown inline-block relative '>
              <button
                className='md:text-xl sm:text-xl font-medium md:pr-4 lg:pr-6 sm:pr-2 
              pr-2 inline-flex items-center'>
                <span>My Account</span>
                <MdOutlineKeyboardArrowDown />
              </button>
              <ul className='dropdown-menu absolute hidden text-gray-700 z-10 w-40 '>
                <li>
                  <div className='rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap'>
                    <Link to={routes.userProfile}>Profile</Link>
                  </div>
                </li>

                {/* only visible for admin*/}
                <li>
                  <div className='bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap'>
                    <Link to={routes.oderListScreen}>Order List</Link>
                  </div>
                </li>
                {/* only visible for admin end*/}

                {/* only visible for admin*/}
                <li>
                  <div className='bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap'>Categories</div>
                </li>
                {/* only visible for admin end*/}
                <li>
                  <div className='rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap'>
                    <Link to={routes.logOut}>Logout</Link>
                  </div>
                </li>
              </ul>
            </div>
            <div className='md:text-3xl sm:text-2xl text-white lg:pr-6 md:pr-2'>
              <Link to={routes.productCart}>
                {' '}
                <BsCart3 />
                  <div>
                  {cart.quantity !== 0 && <span>{cart.quantity}</span>}
                  </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}