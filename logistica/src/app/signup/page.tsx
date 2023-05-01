import Header from '../header';

export default function SignUp() {
    return (
        <>
            <Header />
            <main className="bg-hero bg-no-repeat bg-cover bg-center bg-fixed">
                <div className="w-full h-screen font-sans bg-cover bg-landscape">
                    <div className="container flex items-center justify-center flex-1 h-full mx-auto">
                        <div className="w-full max-w-lg">
                            <div className="leading-loose">
                                <form className="max-w-sm p-10 m-auto rounded shadow-xl bg-white/25">
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
                                                d="M316.16 438.479c0-28.392 12.205-53.92 31.551-71.838-18.452-7.164-38.356-17.934-38.356-31.703v-37.782c6.996-19.393 17.51-20.781 22.768-50.546 12.254-4.379 19.258-11.384 28.009-42.026 6.574-23.064-3.112-29.254-9.382-30.905.128-1.229.256-2.466.359-3.917 2.369-34.543 22.425-137.078-47.012-149.332-18.38-14.296-30.043-20.774-69.436-18.38-24.938-.008-43.893 5.497-70.306-2.05-35.245 29.565-25.561 126.66-20.63 173.504-6.199 1.388-16.889 7.148-10.052 31.08 8.743 30.642 15.747 37.646 28.001 42.026 5.258 29.765 21.253 39.322 22.418 50.546v37.782c0 14.4-23.494 26.55-40.877 32.676C109.78 379.397 16.634 414.275 24.795 512h324.766c-20.43-17.982-33.401-44.235-33.401-73.521z"
                                                className="st0"
                                            ></path>
                                            <path
                                                d="M414.188 364.958c-40.606 0-73.521 32.916-73.521 73.521S373.582 512 414.188 512s73.521-32.916 73.521-73.521-32.915-73.521-73.521-73.521zm40.845 83.732h-30.634v30.634h-20.422V448.69h-30.634v-20.422h30.634v-30.634h20.422v30.634h30.634v20.422z"
                                                className="st0"
                                            ></path>
                                        </svg>
                                    </div>
                                    <p className="mb-8 text-2xl font-light text-center text-white">
                                        SignUp
                                    </p>
                                    <div className="flex gap-4 mb-2">
                                        <div className=" relative ">
                                            <input type="text" id="login-with-bg-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="First Name" />
                                        </div>
                                        <div className=" relative ">
                                            <input type="text" id="login-with-bg-password" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Last Name" />
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <div className=" relative ">
                                            <input type="text" id="login-with-bg-password" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="E-mail" />
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <div className=" relative ">
                                            <input type="text" id="login-with-bg-password" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Password" />
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <div className=" relative ">
                                            <input type="text" id="login-with-bg-password" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Confirm Password" />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between mt-4">
                                        <button type="submit" className="py-2 px-4  bg-white dark:bg-gray-800 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                            Create Account
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}