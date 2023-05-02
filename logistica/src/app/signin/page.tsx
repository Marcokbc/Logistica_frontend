import Link from 'next/link';
import Header from '../header';
import ImageLogistic from '../../../public/images/logistic.png';
import Image from 'next/image';

export default function Signin() {
    return (
        <>
            <Header />
            <main className='bg-gray-100'>
                <div className="flex flex-wrap w-full">
                    <div className="flex flex-col w-full md:w-1/2 h-screen">
                        <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
                            <div className='flex flex-col justify-center items-center'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="40"
                                    height="40"
                                    version="1.1"
                                    viewBox="0 0 512 512"
                                    xmlSpace="preserve"
                                >
                                    <path
                                        d="M359.51 367.614c-19.106-7.148-40.877-18.276-40.877-32.676v-37.782c6.996-19.393 17.51-20.781 22.768-50.546 12.254-4.379 19.258-11.384 28.009-42.026 6.574-23.064-3.112-29.254-9.382-30.905.128-1.229.256-2.466.359-3.917 2.369-34.543 22.425-137.078-47.012-149.332-18.38-14.296-30.043-20.774-69.437-18.38-24.937-.008-43.892 5.497-70.306-2.05-35.245 29.565-25.561 126.66-20.63 173.504-6.199 1.388-16.889 7.148-10.052 31.08 8.744 30.641 15.748 37.646 28.001 42.026 5.258 29.765 21.252 39.322 22.417 50.546v37.782c0 14.4-23.494 26.55-40.877 32.676C119.058 379.397 25.911 414.275 34.073 512h443.856c8.161-97.725-85.217-131.965-118.419-144.386z"
                                        className="st0"
                                    ></path>
                                </svg>
                            </div>
                            <p className="text-3xl text-center">SignIn</p>
                            <form className="flex flex-col pt-3 md:pt-8">
                                <div className="flex flex-col pt-4">
                                    <div className="flex relative ">
                                        <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                            <svg
                                                width={15}
                                                height={15}
                                                fill="currentColor"
                                                viewBox="0 0 1792 1792"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
                                            </svg>
                                        </span>
                                        <input
                                            type="text"
                                            id="design-login-email"
                                            className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                            placeholder="Email"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col pt-4 mb-12">
                                    <div className="flex relative ">
                                        <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                            <svg
                                                width={15}
                                                height={15}
                                                fill="currentColor"
                                                viewBox="0 0 1792 1792"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
                                            </svg>
                                        </span>
                                        <input
                                            type="password"
                                            id="design-login-password"
                                            className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                            placeholder="Password"
                                        />
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2"
                                >
                                    <span className="w-full">Submit</span>
                                </button>
                            </form>
                            <div className="pt-12 pb-12 text-center">
                                <p>
                                    Don't have an account?
                                    <a href="#" className="font-semibold underline">
                                        <Link href="/signup">
                                            Register here.
                                        </Link>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 shadow-2xl hidden md:flex flex-col justify-center items-center">
                        <Image 
                        src={ImageLogistic} 
                        alt="Picture of the author"
                        className=''
                        />
                    </div>
                </div>
            </main>
        </>
    )
}