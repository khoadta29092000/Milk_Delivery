import { React, useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import CategoryIcon from '@mui/icons-material/Category';
import ManIcon from '@mui/icons-material/Man';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GroupIcon from '@mui/icons-material/Group';
import DashboardIcon from '@mui/icons-material/Dashboard';

export default function DefaultNavbarAdmin() {

   return (
      <aside className='fixed h-screen w-64 rounded-none' aria-label="Sidebar">
         <div class="overflow-y-auto rounded-none  px-3 bg-lightblue2 text-white  h-screen  dark:bg-gray-800">
            <div className='text-white ml-16 h-16 pt-3  font-bold text-3xl'>
               FBT
            </div>
            <div className='ml-2 uppercase mt-4 text-xs mb-5'>Main</div>
            <ul class="space-y-8">

               <li>
                  <NavLink activeStyle={{ backgroundColor: 'rgb(243 244 246)', color: 'black' }} to="/Admindashboard" class="flex hover:text-black items-center p-2 text-base font-normal  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <DashboardIcon class="w-6 h-6 text-gray-500 transition -mt-2 duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" />
                     <span class="ml-3">Dashboard</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink activeStyle={{ backgroundColor: 'rgb(243 244 246)', color: 'black' }} to="/UsersManagement" class="flex hover:text-black items-center p-2 text-base font-normal  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <GroupIcon class="w-6 h-6 text-gray-500 transition -mt-2 duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" />
                     <span class="ml-3">Users</span>
                  </NavLink>
               </li>
            </ul>
            <div className='ml-2 text-xs uppercase my-5'>Product</div>
            <ul class="space-y-8">
               <li>
                  <a href="#" class="flex hover:text-black items-center p-2 text-base font-normal  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <CategoryIcon class="w-6 h-6 text-gray-500 transition -mt-2 duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" />
                     <span class="ml-3">Category</span>
                  </a>
               </li>
               <li>
                  <a href="#" class="flex items-center hover:text-black p-2 text-base font-normal  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <ShoppingCartIcon class="w-6 h-6 text-gray-500 transition -mt-2 duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" />
                     <span class="flex-1 ml-3 whitespace-nowrap">Product</span>
                  </a>
               </li>
               <li>
                  <a href="#" class="flex items-center hover:text-black p-2 text-base font-normal  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <AllInboxIcon class="w-6 h-6 text-gray-500 transition -mt-2 duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" />
                     <span class="flex-1 ml-3 whitespace-nowrap">Package</span>
                  </a>
               </li>

            </ul>
            <div className='ml-2 text-xs uppercase my-5'>Order</div>
            <ul class="space-y-8">
               <li>
                  <a href="#" class="flex hover:text-black items-center p-2 text-base font-normal  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <CardGiftcardIcon class="w-6 h-6 text-gray-500 transition -mt-2 duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" />
                     <span class="ml-3">Package Order</span>
                  </a>
               </li>
               <li>
                  <a href="#" class="flex items-center hover:text-black p-2 text-base font-normal  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <ManIcon class="w-6 h-6 text-gray-500 transition -mt-2 duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" />
                     <span class="flex-1 ml-3 whitespace-nowrap">Delivery Boy</span>
                  </a>
               </li>
               <li>
                  <a href="#" class="flex items-center hover:text-black p-2 text-base font-normal  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <LocationOnIcon class="w-6 h-6 text-gray-500 transition -mt-2 duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" />
                     <span class="flex-1 ml-3 whitespace-nowrap">Areas</span>
                  </a>
               </li>
            </ul>
         </div>
      </aside>
   );
}
