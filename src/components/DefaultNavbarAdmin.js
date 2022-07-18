import { React, useState, useRef, useEffect } from 'react';
import {  NavLink } from 'react-router-dom';
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
         <div className="overflow-y-auto rounded-none  px-3 bg-lightblue2 text-white  h-screen  dark:bg-gray-800">
            <div className='text-white ml-16 h-16 tracking-widest pt-3  text font-bold text-3xl'>
            <NavLink to="/">
            FBT
            </NavLink>
            </div>
            <div className='ml-2 uppercase mt-4 text-xs mb-5'>Main</div>
            <ul className="space-y-8">

               <li>
                  <NavLink activeStyle={{ backgroundColor: 'rgb(243 244 246)', color: 'black' }} to="/Admindashboard" className="flex hover:text-black items-center p-2 text-base font-normal  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <DashboardIcon className="w-6 h-6 text-gray-500 transition -mt-2 duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" />
                     <span className="ml-3">Dashboard</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink activeStyle={{ backgroundColor: 'rgb(243 244 246)', color: 'black' }} to="/PackageOrderManagement" className="flex items-center hover:text-black p-2 text-base font-normal  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <CardGiftcardIcon className="w-6 h-6 text-gray-500 transition -mt-2 duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" />
                     <span className="flex-1 ml-3 whitespace-nowrap">Order</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink activeStyle={{ backgroundColor: 'rgb(243 244 246)', color: 'black' }} to="/OrderInDay" className="flex items-center hover:text-black p-2 text-base font-normal  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <CardGiftcardIcon className="w-6 h-6 text-gray-500 transition -mt-2 duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" />
                     <span className="flex-1 ml-3 whitespace-nowrap">Order in Day</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink activeStyle={{ backgroundColor: 'rgb(243 244 246)', color: 'black' }} to="/UsersManagement" className="flex hover:text-black items-center p-2 text-base font-normal  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <GroupIcon className="w-6 h-6 text-gray-500 transition -mt-2 duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" />
                     <span className="ml-3">Customer</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink activeStyle={{ backgroundColor: 'rgb(243 244 246)', color: 'black' }} to="/AdminsManagement" className="flex hover:text-black items-center p-2 text-base font-normal  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <GroupIcon className="w-6 h-6 text-gray-500 transition -mt-2 duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" />
                     <span className="ml-3">Admin</span>
                  </NavLink>
               </li>
            </ul>
            <div className='ml-2 text-xs uppercase my-5'>Product</div>
            <ul className="space-y-8">


               <li>
                  <NavLink activeStyle={{ backgroundColor: 'rgb(243 244 246)', color: 'black' }} to="/PackageManagement" className="flex items-center hover:text-black p-2 text-base font-normal  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <AllInboxIcon className="w-6 h-6 text-gray-500 transition -mt-2 duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" />
                     <span className="flex-1 ml-3 whitespace-nowrap">Package</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink activeStyle={{ backgroundColor: 'rgb(243 244 246)', color: 'black' }} to="/ProductsManagement" className="flex items-center hover:text-black p-2 text-base font-normal  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <ShoppingCartIcon className="w-6 h-6 text-gray-500 transition -mt-2 duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" />
                     <span className="flex-1 ml-3 whitespace-nowrap">Product</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink activeStyle={{ backgroundColor: 'rgb(243 244 246)', color: 'black' }} to="/CategoriesManagement" className="flex items-center hover:text-black p-2 text-base font-normal  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <CategoryIcon className="w-6 h-6 text-gray-500 transition -mt-2 duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" />
                     <span className="flex-1 ml-3 whitespace-nowrap">Category</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink activeStyle={{ backgroundColor: 'rgb(243 244 246)', color: 'black' }} to="/AreasManagement" className="flex items-center hover:text-black p-2 text-base font-normal  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <LocationOnIcon className="w-6 h-6 text-gray-500 transition -mt-2 duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" />
                     <span className="flex-1 ml-3 whitespace-nowrap">Station</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink activeStyle={{ backgroundColor: 'rgb(243 244 246)', color: 'black' }} to="/DeliveryBoyManagement" className="flex items-center hover:text-black p-2 text-base font-normal  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <ManIcon className="w-6 h-6 text-gray-500 transition -mt-2 duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" />
                     <span className="flex-1 ml-3 whitespace-nowrap">Delivery Boy</span>
                  </NavLink>
               </li>
            </ul>
         </div>
      </aside>
   );
}
