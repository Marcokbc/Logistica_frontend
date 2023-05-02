import Header from '../header';

export default function Pedido() {
    return (
        <>
            <Header />
            <main className='bg-gray-100'>
                <div className="flex flex-col space-y-4 h-screen justify-center items-center ">
                    <div className="flex flex-col w-1/2 gap-5 p-2 mx-auto bg-white shadow-lg select-none sm:p-4 sm:h-70 rounded-2xl sm:flex-row ">
                        <div className="flex flex-col flex-1 gap-5 sm:p-2">
                            <div className="flex flex-col flex-1 gap-3">
                                <div className="flex flex-col items-center w-full animate-pulse h-14 rounded-2xl">
                                    <h2 className='text-2xl'>NOME DO PEDIDO</h2>
                                </div>
                                <div className="w-full h-7 animate-pulse rounded-2xl">
                                    <p>ORIGEM : DESTINO</p>
                                </div>
                                <div className="w-full h-12 animate-pulse rounded-2xl">
                                    <p>Rotas</p>
                                    <p>ROTA : DATA</p>
                                </div>
                            </div>
                            <div>
                                <p className="animate-pulse">Status</p>
                            </div>
                            <div className="flex gap-3 xl:gap-24 2xl:gap-28 md:gap-5 mt-auto">
                                <div className="flex flex-col justify-center items-center w-10 h-15 bg-red-400 rounded-full animate-pulse">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        fill="#000"
                                        version="1.1"
                                        viewBox="0 0 98.25 98.25"
                                        xmlSpace="preserve"
                                        className=''
                                    >
                                        <path d="M49.125 0C22.037 0 0 22.038 0 49.125S22.037 98.25 49.125 98.25 98.25 76.212 98.25 49.125 76.213 0 49.125 0zm0 88.25C27.551 88.25 10 70.699 10 49.125S27.551 10 49.125 10 88.25 27.551 88.25 49.125 70.699 88.25 49.125 88.25z"></path>
                                        <path d="M77.296 33.027L71.02 26.75c-.442-.442-1.227-.442-1.668 0L39.67 56.432 28.898 45.661c-.441-.442-1.225-.442-1.668 0l-6.276 6.276a1.178 1.178 0 000 1.668l17.882 17.881a1.18 1.18 0 001.668 0l36.792-36.792a1.177 1.177 0 000-1.667z"></path>
                                    </svg>
                                </div>
                                <div className="flex flex-col justify-center items-center w-10 h-15 bg-red-400 rounded-full animate-pulse">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="#000"
                                            fillRule="evenodd"
                                            d="M3.394 2.205a1 1 0 011.074-.089l17 9a1 1 0 010 1.768l-17 9a1 1 0 01-1.444-1.1L4.976 12 3.024 3.217a1 1 0 01.37-1.012zM6.802 13l-1.356 6.103L16.974 13H6.802zm10.172-2H6.802L5.446 4.897 16.974 11z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                                <div className="flex flex-col justify-center items-center w-10 h-15 bg-red-400 rounded-full animate-pulse">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        fill="#000"
                                        version="1.1"
                                        viewBox="0 0 70.074 70.074"
                                        xmlSpace="preserve"
                                    >
                                        <path d="M70.074 39.215h-2.512V16.847H23.335l-7.589 13.092H1.896v9.276H0v5.237h1.896v3.271h9.276c.614 3.134 3.375 5.504 6.687 5.504s6.071-2.374 6.68-5.504h20.169c.615 3.134 3.371 5.504 6.681 5.504a6.82 6.82 0 006.687-5.504h9.482v-3.271h2.511l.005-5.237zM17.859 50.616a4.206 4.206 0 01-4.202-4.197 4.207 4.207 0 014.202-4.202 4.199 4.199 0 010 8.399zm33.536 0a4.205 4.205 0 01-4.197-4.197 4.208 4.208 0 014.197-4.202 4.208 4.208 0 014.204 4.202 4.205 4.205 0 01-4.204 4.197zm13.551-5.507h-6.861c-.616-3.134-3.374-5.504-6.688-5.504-3.31 0-6.072 2.374-6.684 5.504H24.546c-.614-3.134-3.368-5.504-6.68-5.504s-6.078 2.374-6.687 5.504H4.518V32.562H17.26l7.586-13.095h40.105v25.646h-.005v-.004zM20.443 32.284l5.913-10.2h8.784v10.2H20.443z"></path>
                                    </svg>
                                </div>
                                <div className="flex flex-col justify-center items-center w-10 h-15 bg-red-400 rounded-full animate-pulse">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="25"
                                        height="25"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <rect
                                            width="18"
                                            height="18"
                                            x="3"
                                            y="3"
                                            stroke="#000"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            rx="3"
                                        ></rect>
                                        <path
                                            stroke="#000"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 3v6l3-2 3 2V3"
                                        ></path>
                                    </svg>
                                </div>
                                <div className="flex flex-col justify-center items-center w-10 h-10 bg-red-400 rounded-full animate-pulse">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="25"
                                        height="25"
                                        viewBox="0 0 50 50"
                                    >
                                        <path d="M8.188 0A3.18 3.18 0 005 3.188v7.718h.813c1.218 0 2.304.57 3.093 1.438.77-3.457 5.727-5.156 15.094-5.156 10.559 0 16.293 1.804 17.094 5.312a4.282 4.282 0 013.218-1.469H45V3.187C45 1.423 43.508 0 41.687 0zM24 9.188c-4.84 0-12.988.523-13.188 3.968l-.718 5.531-.563 4.094L9.125 26h-.938c-.332 0-.624.04-.937.094a5.195 5.195 0 00-.5.125c-.125.035-.254.082-.375.125-.21.078-.398.148-.594.25-.047.023-.078.07-.125.093-.222.13-.453.25-.656.407a5.67 5.67 0 00-.75.75c-.043.05-.086.074-.125.125a5.028 5.028 0 00-.375.562c-.086.145-.18.313-.25.469-.047.102-.082.207-.125.313-.094.246-.191.484-.25.75-.016.062-.02.125-.031.187a5.26 5.26 0 00-.094.938V38h25.063A10.57 10.57 0 0028 39c0 .336.031.672.063 1H3v5h26.781c1.965 3.012 5.364 5 9.219 5 .21 0 .418-.02.625-.031.121.015.25.031.375.031h4c1.652 0 3-1.348 3-3h-.469A10.956 10.956 0 0047 31.469v-.282c0-.324-.04-.632-.094-.937l-.031-.188a5.195 5.195 0 00-.219-.75c-.039-.105-.11-.21-.156-.312-.07-.156-.133-.324-.219-.469a5.13 5.13 0 00-.406-.562c-.04-.055-.086-.078-.125-.125-.23-.27-.469-.535-.75-.75-.203-.157-.43-.278-.656-.407-.047-.023-.078-.07-.125-.093-.196-.106-.383-.172-.594-.25-.121-.043-.246-.09-.375-.125A4.954 4.954 0 0041.812 26h-.937l-.438-3.406-.406-3.125-.843-6.219C38.956 9.402 26.495 9.187 24 9.187zm0 2c8.43 0 12.84 1.496 13.219 2.25l1 7.687c-1.48.25-5.875.875-13.219.875-7.344 0-11.738-.621-13.219-.875l1.031-7.781c.024-.43 2.083-2.156 11.188-2.156zM4.187 12.905c-1.195 0-2.28 1.086-2.28 2.281v5.5c0 1.27 1.066 2.407 2.28 2.407h1.5c1.27 0 2.407-1.063 2.407-2.282v-5.5c0-1.269-1.067-2.406-2.281-2.406zm40.126.125a2.284 2.284 0 00-2.282 2.281v5.5a2.281 2.281 0 002.282 2.282h1.5c1.195 0 2.28-1.086 2.28-2.282v-5.5a2.284 2.284 0 00-2.28-2.28zM19.593 27h10.813c.688 0 1.239.406 1.469 1 .074.188.125.379.125.594v1.937A10.956 10.956 0 0028.781 35h-9.187A1.571 1.571 0 0118 33.406v-4.812c0-.215.055-.407.125-.594.23-.594.781-1 1.469-1zM39 30c4.98 0 9 4.02 9 9s-4.02 9-9 9-9-4.02-9-9 4.02-9 9-9zM8.687 31h4.626c.398 0 .687.29.687.688v2.625c0 .398-.29.687-.688.687H8.689A.665.665 0 018 34.312v-2.624c0-.399.29-.688.688-.688zM44 35.344l-5.688 5.687-3.562-3.562-1.438 1.406 4.313 4.281.688.719.718-.719 6.407-6.375zM3 47c0 1.652 1.348 3 3 3h4c1.652 0 3-1.348 3-3z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </main>
        </>
    )
}