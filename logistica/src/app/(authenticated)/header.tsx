import Link from "next/link";

export default function Header() {
    return (
        <>
            <header className="relative z-40">
                <div className="fixed top-0 left-0 right-0">
                    <nav className="bg-white dark:bg-gray-800  shadow ">
                        <div className="px-8 mx-auto max-w-7xl">
                            <div className="flex items-center justify-between h-16">
                                <div className="w-full justify-between flex items-center">
                                    <h1>Bem vindo, USERNAME</h1>
                                    <div className="hidden md:block">
                                        <div className="flex items-baseline ml-10 space-x-4">

                                            <button>
                                                <Link href="/admin">
                                                    <div className='border-2 rounded-full bg-gray-100'>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="50"
                                                            height="50"
                                                            version="1.1"
                                                            viewBox="0 0 512 512"
                                                            xmlSpace="preserve"
                                                        >
                                                            <path
                                                                d="M311.069 130.515a11.744 11.744 0 00-11.578-9.768H35.43c-7.61 0-13.772 6.169-13.772 13.765 0 7.61 6.162 13.772 13.772 13.772h64.263c7.61 0 13.772 6.17 13.772 13.773s-6.162 13.772-13.772 13.772H13.772C6.169 175.829 0 181.998 0 189.601c0 7.603 6.169 13.764 13.772 13.764h117.114c6.72 0 12.172 5.46 12.172 12.18s-5.452 12.172-12.172 12.172H68.665c-7.61 0-13.772 6.17-13.772 13.773 0 7.602 6.162 13.772 13.772 13.772h45.857c6.726 0 12.179 5.452 12.179 12.172 0 6.719-5.453 12.172-12.179 12.172H51.215c-7.61 0-13.772 6.169-13.772 13.772 0 7.603 6.162 13.772 13.772 13.772h87.014l5.488 31.042h31.52c-1.854 4.504-2.911 9.421-2.911 14.598 0 21.245 17.218 38.464 38.464 38.464 21.237 0 38.456-17.219 38.456-38.464 0-5.177-1.057-10.094-2.911-14.598h100.04l-35.306-207.677zm-83.727 222.274c0 9.146-7.407 16.553-16.553 16.553-9.152 0-16.56-7.407-16.56-16.553 0-6.364 3.627-11.824 8.892-14.598h15.329c5.264 2.774 8.892 8.233 8.892 14.598zM511.598 314.072l-15.799-77.941-57.689-88.759H333.074l32.534 190.819h38.42c-1.846 4.504-2.904 9.421-2.904 14.598 0 21.245 17.219 38.464 38.456 38.464 21.246 0 38.464-17.219 38.464-38.464 0-5.177-1.057-10.094-2.91-14.598h16.741a20.119 20.119 0 0019.723-24.119zm-119.069-131.19h26.314l34.162 52.547h-51.512l-8.964-52.547zm63.611 169.907c0 9.146-7.407 16.553-16.56 16.553-9.138 0-16.552-7.407-16.552-16.553 0-6.364 3.635-11.824 8.892-14.598h15.329c5.264 2.774 8.891 8.233 8.891 14.598z"
                                                                className="st0"
                                                            ></path>
                                                        </svg>
                                                    </div>
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
                                    <button className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                                        <svg width="20" height="20" fill="currentColor" className="w-8 h-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="md:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <button>
                                    <Link href="/">
                                        <div className='border-2 rounded-full bg-gray-100'>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="50"
                                                height="50"
                                                version="1.1"
                                                viewBox="0 0 512 512"
                                                xmlSpace="preserve"
                                            >
                                                <path
                                                    d="M311.069 130.515a11.744 11.744 0 00-11.578-9.768H35.43c-7.61 0-13.772 6.169-13.772 13.765 0 7.61 6.162 13.772 13.772 13.772h64.263c7.61 0 13.772 6.17 13.772 13.773s-6.162 13.772-13.772 13.772H13.772C6.169 175.829 0 181.998 0 189.601c0 7.603 6.169 13.764 13.772 13.764h117.114c6.72 0 12.172 5.46 12.172 12.18s-5.452 12.172-12.172 12.172H68.665c-7.61 0-13.772 6.17-13.772 13.773 0 7.602 6.162 13.772 13.772 13.772h45.857c6.726 0 12.179 5.452 12.179 12.172 0 6.719-5.453 12.172-12.179 12.172H51.215c-7.61 0-13.772 6.169-13.772 13.772 0 7.603 6.162 13.772 13.772 13.772h87.014l5.488 31.042h31.52c-1.854 4.504-2.911 9.421-2.911 14.598 0 21.245 17.218 38.464 38.464 38.464 21.237 0 38.456-17.219 38.456-38.464 0-5.177-1.057-10.094-2.911-14.598h100.04l-35.306-207.677zm-83.727 222.274c0 9.146-7.407 16.553-16.553 16.553-9.152 0-16.56-7.407-16.56-16.553 0-6.364 3.627-11.824 8.892-14.598h15.329c5.264 2.774 8.892 8.233 8.892 14.598zM511.598 314.072l-15.799-77.941-57.689-88.759H333.074l32.534 190.819h38.42c-1.846 4.504-2.904 9.421-2.904 14.598 0 21.245 17.219 38.464 38.456 38.464 21.246 0 38.464-17.219 38.464-38.464 0-5.177-1.057-10.094-2.91-14.598h16.741a20.119 20.119 0 0019.723-24.119zm-119.069-131.19h26.314l34.162 52.547h-51.512l-8.964-52.547zm63.611 169.907c0 9.146-7.407 16.553-16.56 16.553-9.138 0-16.552-7.407-16.552-16.553 0-6.364 3.635-11.824 8.892-14.598h15.329c5.264 2.774 8.891 8.233 8.891 14.598z"
                                                    className="st0"
                                                ></path>
                                            </svg>
                                        </div>
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