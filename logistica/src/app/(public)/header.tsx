'use client';
import Link from "next/link";
import { useState } from "react";
import Image from 'next/image';
import logoIcon from '../../../public/svg/logo.svg';
import loginIcon from '../../../public/svg/login.svg';
import signUpIcon from '../../../public/svg/signup.svg';
import sidebarIcon from '../../../public/svg/sidebar.svg';

export default function Header() {
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <>
            <header className="relative z-40">
                <div className="fixed top-0 left-0 right-0">
                    <nav className={`bg-white dark:bg-gray-800 shadow ${showSidebar ? "translate-x-0 h-auto" : "h-16"}`}>
                        <div className="px-8 mx-auto max-w-7xl">
                            <div className="flex items-center justify-between h-16">
                                <div className="w-full justify-between flex items-center">
                                    <button>
                                        <Link href="/">
                                            <div className='border-2 rounded-full bg-gray-100'>
                                                <Image src={logoIcon} alt="logo" />
                                            </div>
                                        </Link>
                                    </button>
                                    <div className="hidden md:block">
                                        <div className="flex items-baseline ml-10 space-x-4">
                                            <button>
                                                <Link href="/signin">
                                                    <Image src={loginIcon} alt="login" />
                                                </Link>
                                            </button>
                                            <button>
                                                <Link href="/signup">
                                                    <Image src={signUpIcon} alt="signUp" />
                                                </Link>
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
                            <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3`}>
                                <button>
                                    <Link href="/signin">
                                        <Image src={loginIcon} alt="login" />
                                    </Link>
                                </button>
                                <button>
                                    <Link href="/signup">
                                        <Image src={signUpIcon} alt="signUp" />
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}