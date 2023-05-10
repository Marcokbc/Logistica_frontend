"use client";
import { useEffect, useState } from "react";
import ModalDelete from "../components/ModalDelete";
import Footer from "../footer";
import Header from "../header";
import ModalCreate from "../components/ModalCreate";
import ModalUpdate from "../components/ModalUpdate";
import ModalRota from "../components/ModalRota";
import ModalLogout from "../components/ModalLogout";
import axios from "axios";
import api from "@/app/services/api";
import { Order } from "@/app/models/Order";


export default function Admin() {
    const [pedidos, setPedidos] = useState<Order>();
    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize, setPageSize] = useState(4);
    const [totalPages, setTotalPages] = useState(0);
    const token = localStorage.getItem('token');

    const [requestSuccess, setRequestSuccess] = useState(false);

    const validateRequest = (success: boolean) => {
        setRequestSuccess(success);
    }

    const authorization = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const [showModalDelete, setShowModalDelete] = useState({ isOpen: false, pedidoId: 0 });
    const handleCloseDelete = () => setShowModalDelete({ isOpen: false, pedidoId: 0 });

    const [showModalCreate, setShowModalCreate] = useState(false);
    const handleCloseCreate = () => setShowModalCreate(false);

    const [showModalUpdate, setShowModalUpdate] = useState({ isOpen: false, pedidoId: 0 });
    const handleCloseUpdate = () => setShowModalUpdate({ isOpen: false, pedidoId: 0 });

    const [showModalRota, setShowModalRota] = useState({ isOpen: false, pedidoId: 0 });
    const handleCloseRota = () => setShowModalRota({ isOpen: false, pedidoId: 0 });

    const [showModalLogout, setShowModalLogout] = useState(false);


    const modalOn = (modalOn: boolean) => {
        setShowModalLogout(modalOn);
    }

    const modalOff = (modalOff: boolean) => {
        setShowModalLogout(modalOff);
    }

    useEffect(() => {
        try {
            api.get(`api/Pedido?pageNumber=${pageNumber}&pageSize=${pageSize}`, authorization)
                .then(
                    response => {
                        setPedidos(response.data.items);
                        setTotalPages(response.data.totalPages);
                        // console.log(response.data.totalPages);
                    });
        } catch (error) {
            console.log(error);
        }
    }, [pageNumber, requestSuccess])

    console.log("renderizou");

    const renderButtons = () => {
        const buttons = [];
        for (let i = 1; i <= totalPages; i++) {
            buttons.push(<button
                type="button"
                onClick={() => setPageNumber(i)}
                className="w-full px-4 py-2 text-base text-indigo-500 bg-white border hover:bg-gray-100"
            >
                {i}
            </button>);
        }
        return buttons;
    };

    return (
        <>
            <Header modalOn={modalOn} />
            <main className='bg-gray-100'>
                <div className="lg:mt-0 lg:flex-shrink-0">
                    <div className="flex flex-col space-y-4 h-screen justify-center items-center">
                        <div className="overflow-auto flex flex-col justify-center items-center text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                            <div className="flex flex-col justify-start items-start mt-48 sm:mt-0">
                                <button
                                    type="button"
                                    className="py-2 mb-2 px-4 content-start bg-gray-800 hover:bg-sky-700 focus:ring-sky-500 focus:ring-offset-sky-200 text-white w-18 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                    onClick={() => setShowModalCreate(true)}
                                >
                                    Create new Pedido
                                </button>
                            </div>
                            <table className="table ml-72 sm:ml-0 p-4 bg-white rounded-lg shadow">
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
                                    {pedidos?.map(pedido =>
                                        <tr className="text-gray-700">
                                            <td className="border-b-2 p-4 dark:border-dark-5">{pedido.id}</td>
                                            <td className="border-b-2 p-4 dark:border-dark-5">{pedido.nome}</td>
                                            <td className="border-b-2 p-4 dark:border-dark-5">{pedido.status}</td>
                                            <td className="border-b-2 p-4 dark:border-dark-5">{pedido.codigoRastreio}</td>
                                            <td className="border-b-2 p-4 dark:border-dark-5">
                                                <button
                                                    onClick={() => setShowModalRota({ isOpen: true, pedidoId: pedido.id })}
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
                                                                d="M8 12h4m0 0h4m-4 0v4m0-4V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </button>
                                            </td>
                                            <td className="border-b-2 p-4 dark:border-dark-5">
                                                <button
                                                    onClick={() => setShowModalUpdate({ isOpen: true, pedidoId: pedido.id })}
                                                >
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
                                                    onClick={() => setShowModalDelete({ isOpen: true, pedidoId: pedido.id })}
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
                                    )}
                                </tbody>
                            </table>
                            <div className="flex flex-col items-center px-5 py-5 xs:flex-row xs:justify-between">
                                <div className="flex items-center">
                                    <button
                                        onClick={() => { pageNumber > 1 ? setPageNumber(pageNumber - 1) : setPageNumber(pageNumber) }}
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
                                    {renderButtons()}
                                    <button
                                        type="button"
                                        onClick={() => { pageNumber < totalPages ? setPageNumber(pageNumber + 1) : setPageNumber(pageNumber) }}
                                        className="w-full p-4 text-base text-gray-600 bg-white border rounded-r-xl hover:bg-gray-100"
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

            <ModalDelete
                onClose={handleCloseDelete} isVisible={showModalDelete.isOpen}
                pedidoId={showModalDelete.pedidoId}
                validateDelete={validateRequest}/>
            <ModalCreate onClose={handleCloseCreate} isVisible={showModalCreate}
                validatePost={validateRequest} />
            <ModalUpdate
                onClose={handleCloseUpdate} isVisible={showModalUpdate.isOpen}
                pedidoId={showModalUpdate.pedidoId}
                validatePut={validateRequest} />
            <ModalRota
                onClose={handleCloseRota} isVisible={showModalRota.isOpen} pedidoId={showModalRota.pedidoId} />
            <ModalLogout onClose={modalOff} isVisible={showModalLogout} />
        </>
    )
}