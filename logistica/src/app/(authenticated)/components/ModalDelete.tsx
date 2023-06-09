'use client';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from "@/app/services/api";


export default function ModalDelete({ isVisible, onClose, pedidoId, validateDelete }: any) {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : '';

    const authorization = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    if (!isVisible) return null;

    async function deleteOrder() {
        try {
            await api.delete(`api/Pedido/${pedidoId}`, authorization)
                .then(response => {
                    toast.info("Venda Excluida com sucesso!");
                    validateDelete(true);
                });
                
        } catch (error) {
            alert(error);
        }

    }

    return (
        <div
            id="popup-modal"
            tabIndex={-1}
            className="backdrop-blur-sm fixed left-0 p-4 top-0 z-50 h-[calc(100%-1rem)] w-full overflow-y-auto overflow-x-hidden outline-none"
        >
            <div className="relative w-full max-w-md max-h-full top-1/3 left-0 sm:left-1/3">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button
                        type="button"
                        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                        data-modal-hide="popup-modal"
                        onClick={onClose}
                    >
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="p-6 text-center">
                        <svg
                            aria-hidden="true"
                            className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Você tem certza que deseja deletar esse pedido?
                        </h3>
                        <button
                            data-modal-hide="popup-modal"
                            type="button"
                            className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                            onClick={() => { deleteOrder(); return onClose() }}
                        >
                            Sim
                        </button>
                        <button
                            data-modal-hide="popup-modal"
                            type="button"
                            className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                            onClick={onClose}
                        >
                            Não, cancelar
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}