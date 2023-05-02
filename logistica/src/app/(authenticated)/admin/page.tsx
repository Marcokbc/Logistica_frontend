"use client";
import { useState } from "react";
import ModalDelete from "../components/ModalDelete";
import Footer from "../footer";
import Header from "../header";

export default function Admin() {
    const [showModalDelete,setShowModalDelete] = useState(false);
    const handleClose = () => setShowModalDelete(false);
    
    return (
        <>
            <Header />
            <main className='bg-gray-100'>
                <div className="lg:mt-0 lg:flex-shrink-0">
                    <div className="flex flex-col space-y-4 h-screen justify-center ">
                        <div className="flex flex-col justify-center items-center text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                            <div className="flex flex-col justify-start items-start w-1/2">
                                <button
                                    type="button"
                                    className="py-2 mb-2 px-4 content-start bg-gray-800 hover:bg-sky-700 focus:ring-sky-500 focus:ring-offset-sky-200 text-white w-18 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                >
                                    Create new Pedido
                                </button>
                            </div>
                            <table className="table p-4 bg-white rounded-lg shadow">

                                <thead>
                                    <tr>
                                        <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                                            #
                                        </th>
                                        <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                                            Name
                                        </th>
                                        <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                                            Status
                                        </th>
                                        <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                                            Codigo
                                        </th>
                                        <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                                            Rotas
                                        </th>
                                        <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                                            Alterar
                                        </th>
                                        <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                                            Deletar
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-gray-700">
                                        <td className="border-b-2 p-4 dark:border-dark-5">1</td>
                                        <td className="border-b-2 p-4 dark:border-dark-5">Roupas</td>
                                        <td className="border-b-2 p-4 dark:border-dark-5">Pedido Efetuado</td>
                                        <td className="border-b-2 p-4 dark:border-dark-5">Jl987</td>
                                        <td className="border-b-2 p-4 dark:border-dark-5">
                                            <button>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="25"
                                                    height="25"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <g>
                                                        <path
                                                            stroke="#000"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M8 12h4m0 0h4m-4 0v4m0-4V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                                                        ></path>
                                                    </g>
                                                </svg>
                                            </button>
                                        </td>
                                        <td className="border-b-2 p-4 dark:border-dark-5">
                                            <button>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="25"
                                                    height="25"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M20.7 5.2a1.024 1.024 0 010 1.448l-2.626 2.628-3.35-3.35L17.35 3.3a1.024 1.024 0 011.448 0zm-4.166 5.614l-3.35-3.35-8.509 8.511L3 21l5.025-1.675z"></path>
                                                </svg>
                                            </button>
                                        </td>
                                        <td className="border-b-2 p-4 dark:border-dark-5">
                                            <button
                                                type="button"
                                                data-modal-target="popup-modal"
                                                data-modal-toggle="popup-modal"
                                                onClick={()=>setShowModalDelete(true)}
                                                >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="25"
                                                    height="25"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <g>
                                                        <path
                                                            stroke="#000"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M14 10v7m-4-7v7M6 6v11.8c0 1.12 0 1.68.218 2.108a2 2 0 00.874.874c.427.218.987.218 2.105.218h5.606c1.118 0 1.677 0 2.104-.218.377-.192.683-.498.875-.874.218-.428.218-.987.218-2.105V6M6 6h2M6 6H4m4 0h8M8 6c0-.932 0-1.398.152-1.765a2 2 0 011.082-1.083C9.602 3 10.068 3 11 3h2c.932 0 1.398 0 1.765.152a2 2 0 011.083 1.083C16 4.602 16 5.068 16 6m0 0h2m0 0h2"
                                                        ></path>
                                                    </g>
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="flex flex-col items-center px-5 py-5 xs:flex-row xs:justify-between">
                                <div className="flex items-center">
                                    <button
                                        type="button"
                                        className="w-full p-4 text-base text-gray-600 bg-white border rounded-l-xl hover:bg-gray-100"
                                    >
                                        <svg
                                            width={9}
                                            fill="currentColor"
                                            height={8}
                                            className=""
                                            viewBox="0 0 1792 1792"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
                                        </svg>
                                    </button>
                                    <button
                                        type="button"
                                        className="w-full px-4 py-2 text-base text-indigo-500 bg-white border-t border-b hover:bg-gray-100 "
                                    >
                                        1
                                    </button>
                                    <button
                                        type="button"
                                        className="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100"
                                    >
                                        2
                                    </button>
                                    <button
                                        type="button"
                                        className="w-full px-4 py-2 text-base text-gray-600 bg-white border-t border-b hover:bg-gray-100"
                                    >
                                        3
                                    </button>
                                    <button
                                        type="button"
                                        className="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100"
                                    >
                                        4
                                    </button>
                                    <button
                                        type="button"
                                        className="w-full p-4 text-base text-gray-600 bg-white border-t border-b border-r rounded-r-xl hover:bg-gray-100"
                                    >
                                        <svg
                                            width={9}
                                            fill="currentColor"
                                            height={8}
                                            className=""
                                            viewBox="0 0 1792 1792"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />

            <ModalDelete onCLose={handleClose} isVisible={showModalDelete}/>

        </>
    )
}