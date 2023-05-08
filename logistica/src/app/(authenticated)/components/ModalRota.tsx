'use client';

import { useState } from "react";
import axios from "axios";
import api from "@/app/services/api";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ModalRota({ isVisible, onClose, pedidoId }: any) {
    const [local, setLocal] = useState('');

    const date = new Date();
    const date_format = date.toISOString();

    const token = localStorage.getItem('token');
    const authorization = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    function handleChangeLocal(event: any) {
        const cep = event.target.value;
        if (cep.length == 9) {
            axios.get(`https://viacep.com.br/ws/${cep}/json/`)
                .then(response => {
                    console.log(response.data);
                    setLocal(`${response.data.localidade} - ${response.data.uf}`);
                }).catch((error) => {
                    console.log('Whoops! Houve um erro.', error.message || error)
                });
        }
    }

    async function save(event: any) {
        event.preventDefault();

        const data = {
            nomeCidade: local,
            dataRota: date_format,
            idPedido: pedidoId,
        }

        try {
            console.log(data);
            await api.post('api/Rota', data, authorization)
                .then(response => {
                    toast.info("Rota Adicionada com sucesso.");
                })
        } catch (error) {
            alert(error);
        }
    }
    if (!isVisible) return null;

    console.log(pedidoId);

    return (
        <div
            id="popup-modal"
            tabIndex={-1}
            className="fixed w-full top-0 left-0 sm:left-1/3 sm:top-0 z-50 backdrop-blur-sm p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
            <div
                id="authentication-modal"
                tabIndex={-1}
                aria-hidden="true"
                className="relative w-full max-w-md max-h-full top-1/3 left-0 sm:left-1/3 sm:top-1/3"
            >
                <div className="relative w-full max-w-md max-h-full">
                    {/* Modal content */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button
                            type="button"
                            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                            data-modal-hide="authentication-modal"
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
                        <div className="px-6 py-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                                Create Order
                            </h3>
                            <form className="space-y-6" action="#" onSubmit={(e) => { save(e); return onClose() }}>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Local
                                    </label>
                                    <input
                                        name="origem"
                                        id="origem"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        placeholder="Digite seu Cep..."
                                        onChange={handleChangeLocal}
                                    />
                                    <p className="text-white">{local}</p>
                                </div>
                                <div className="flex justify-between">
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Create
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}