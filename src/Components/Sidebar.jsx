import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { CiMenuBurger } from "react-icons/ci"
import { FaUser } from "react-icons/fa"
import { HiOutlinePlusCircle } from "react-icons/hi"
import { MdDashboard } from "react-icons/md"

export default function SidebarWithNavbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <div className={`fixed lg:static z-40 top-0 left-0 h-full w-64 lg:w-56 xl:w-64 bg-gray-800 text-white p-4 transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
                <div className="flex  justify-between  mb-6">
                    <h1 className="text-2xl font-bold">Task</h1>
                    <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
                        <CiMenuBurger className='w-6 h-6' />
                    </button>
                </div>
                <div className="space-y-4">
                    <Link to="/" className="flex items-center hover:text-gray-300">
                        <MdDashboard className='mr-2' /> Dashboard
                    </Link>
                    <Link to="/users" className="flex items-center hover:text-gray-300">
                        <FaUser className='mr-2' /> Users
                    </Link>
                    <Link to="/posts" className="flex items-center hover:text-gray-300">
                        <HiOutlinePlusCircle className='mr-2' /> Posts
                    </Link>
                </div>
            </div>



            <div className="flex-1 flex flex-col overflow-auto">
                <div className="flex items-center justify-between bg-grey-800 shadow px-4 py-3 md:ml-0">
                    <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden">
                        <CiMenuBurger className="w-6 h-6 text-gray-800" />
                    </button>
                    <h2 className="text-xl font-semibold">Dashboard</h2>
                </div>


                <div className="flex-1 p-0 md:p-3 overflow-y-auto
                ">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
