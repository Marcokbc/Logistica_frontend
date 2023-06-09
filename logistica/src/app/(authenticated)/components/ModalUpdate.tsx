'use client';

import { OrderById } from "@/app/models/OrderById";
import api from "@/app/services/api";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ModalUpdate({ isVisible, onClose, pedidoId, validatePut }: any) {
    const [pedido, setPedido] = useState<OrderById>();
    const [name, setName] = useState(pedido?.nome);
    const [status, setStatus] = useState(pedido?.status);

    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : '';
    
    const authorization = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {
        if (isVisible) {
            try {
                api.get(`api/Pedido/${pedidoId}`)
                    .then(
                        response => {
                            setPedido(response.data);
                        });
            } catch (error) {
                console.log(error);
            }
        }
    }, [])

    async function update(event: any) {
        event.preventDefault();

        const data = {
            id: pedidoId,
            nome: name ? name : pedido?.nome,
            origem: pedido?.origem,
            destino: pedido?.destino,
            status: status ? status : pedido?.status
        }

        try {
            console.log(data);
            await api.put(`api/Pedido/${pedidoId}`, data, authorization)
                .then(response => {
                    toast.info("Pedido alterado com sucesso!");
                    validatePut(true);
                })
        } catch (error) {
            alert(error);
        }
    }

    if (!isVisible) return null;

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
                className="relative w-full max-w-md max-h-full top-0 left-0 sm:left-1/3"
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
                                Alterar Pedido
                            </h3>
                            <form className="space-y-6" action="#" onSubmit={(e) => { update(e); return onClose(); }}>
                                <div>
                                    <label
                                        htmlFor="id"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        ID
                                    </label>
                                    <input
                                        name="id"
                                        id="id"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        placeholder={pedidoId}
                                        disabled
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Nome
                                    </label>
                                    <input
                                        name="name"
                                        id="name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        placeholder={pedido?.nome}
                                        onChange={e => setName(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Origem
                                    </label>
                                    <input
                                        name="origem"
                                        id="origem"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        placeholder={pedido?.origem}
                                        disabled
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="destino"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Destino
                                    </label>
                                    <input
                                        name="destino"
                                        id="destino"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        placeholder={pedido?.destino}
                                        disabled
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Status
                                    </label>
                                    <select
                                        onChange={(e) => setStatus(e.target.value)}
                                        value={status}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                                        <option value="PedidoEfetuado">Pedido Efetuado</option>
                                        <option value="Enviado">Enviado</option>
                                        <option value="Transito">Transito</option>
                                        <option value="Despachado">Despachado</option>
                                        <option value="Retirado">Retirado</option>
                                    </select>
                                </div>
                                <div className="flex justify-between">
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Alterar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}