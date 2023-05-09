'use client';
import Link from "next/link";
import { useState } from "react";
import ModalLogout from "./components/ModalLogout";
import Image from "next/image";
import logoIcon from '../../../public/svg/logo.svg';
import sidebarIcon from '../../../public/svg/sidebar.svg';
import logoutIcon from '../../../public/svg/logout.svg';

export default function Header({ modalOn }: any) {
    const username = localStorage.getItem('userName');
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <>
            <header className="relative z-40">
                <div className="fixed top-0 left-0 right-0">
                    <nav className={`bg-white dark:bg-gray-800 shadow ${showSidebar ? "translate-x-0 h-auto" : "h-16"}`}>
                        <div className="px-8 mx-auto max-w-7xl">
                            <div className="flex items-center justify-between h-16">
                                <div className="w-full justify-between flex items-center font-extrabold text-gray-100">
                                    <button>
                                        <Link href="/admin">
                                            <div className='border-2 rounded-full bg-gray-100'>
                                                <Image src={logoIcon} alt="logo" />
                                            </div>
                                        </Link>
                                    </button>

                                    <h1 className="ml-10 sm:ml-0">Bem vindo, {username}</h1>
                                    <div className="hidden md:block">
                                        <div className="flex items-baseline ml-10 space-x-4">
                                            <button
                                                onClick={() => modalOn(true)}
                                            >
                                                <Image src={logoutIcon} alt="logout" />
                                            </button>

                                        </div>
                                    </div>
                                </div>
                                <div className="block">
                                    <div className="flex items-center ml-4 md:ml-6">
                                    </div>
                                </div>
                                <div className="flex -mr-2 md:hidden">
                                    <button
                                        onClick={() => setShowSidebar(!showSidebar)}
                                        className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                                        <Image src={sidebarIcon} alt="sidebar" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={`md:hidden ${showSidebar ? "translate-x-0 " : "translate-x-full"}`}>
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <button
                                    onClick={() => modalOn(true)}
                                >
                                    <Image src={logoutIcon} alt="logout" />
                                </button>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

        </>
    )
}