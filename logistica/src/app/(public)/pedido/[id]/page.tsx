'use client';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import Footer from '../../footer';
import Header from '../../header';
import api from '@/app/services/api';
import { OrderById } from '@/app/models/OrderById';
import Image from "next/image";
import pedidoIcon from '../../../../../public/svg/pedidoEfetuado.svg';
import enviadoIcon from '../../../../../public/svg/enviado.svg';
import transitoIcon from '../../../../../public/svg/transito.svg';
import despachadoIcon from '../../../../../public/svg/despachado.svg';
import retiradoIcon from '../../../../../public/svg/retirado.svg';

export default function Pedido({ params }: { params: { id: string } }) {
    const [pedido, setPedido] = useState<OrderById>();

    useEffect(() => {
        try {
            api.get(`api/Pedido/${params.id}`)
                .then(
                    response => {
                        setPedido(response.data);
                    });
        } catch (error) {
            console.log(error);
        }
    }, [])

    console.log("renderizou");


    return (
        <>
            <Header />
            <main className='bg-gray-100'>
                <div className="flex flex-col space-y-4 h-screen justify-center items-center ">
                    <div className="flex flex-col w-1/2 gap-5 p-2 mx-auto bg-white shadow-lg select-none sm:p-4 sm:h-70 rounded-2xl sm:flex-row ">
                        <div className="flex flex-col flex-1 gap-5 sm:p-2">
                            <div className="flex flex-col flex-1 gap-3">
                                <div className="flex flex-col items-center w-full animate-pulse h-14 rounded-2xl">
                                    <h2 className='text-2xl font-bold'>{pedido?.nome}</h2>
                                </div>
                                <div className="w-full h-7 animate-pulse rounded-2xl">
                                    <p>{pedido?.origem} : {pedido?.destino}</p>
                                </div>
                                <div className="w-full h-12 animate-pulse rounded-2xl">
                                    <p>Rotas</p>
                                    {pedido?.rotas.map(rota => (
                                        <p className='ml-6'>{rota.nomeCidade} : {format(new Date(rota.dataRota), 'dd/MM/yyyy HH:mm:ss') }</p>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="animate-pulse">Status</p>
                            </div>
                            {pedido?.status == "Retirado" &&
                                <div className="flex gap-3 xl:gap-24 2xl:gap-28 md:gap-5 mt-auto">

                                    < div className="flex flex-col justify-center items-center w-10 h-15 bg-red-400 rounded-full animate-pulse">
                                        <Image src={pedidoIcon} alt='Pedido Efetuado' />
                                    </div>

                                    <div className="flex flex-col justify-center items-center w-10 h-15 bg-red-400 rounded-full animate-pulse">
                                        <Image src={enviadoIcon} alt='Pedido Enviado' />
                                    </div>

                                    <div className="flex flex-col justify-center items-center w-10 h-15 bg-red-400 rounded-full animate-pulse">
                                        <Image src={transitoIcon} alt='Em transito' />
                                    </div>
                                    <div className="flex flex-col justify-center items-center w-10 h-15 bg-red-400 rounded-full animate-pulse">
                                        <Image src={despachadoIcon} alt='Pedido despachado' />
                                    </div>
                                    <div className="flex flex-col justify-center items-center w-10 h-10 bg-red-400 rounded-full animate-pulse">
                                        <Image src={retiradoIcon} alt='Pedido retirado' />
                                    </div>

                                </div>
                            }
                            {pedido?.status == "Despachado" &&
                                <div className="flex gap-3 xl:gap-24 2xl:gap-28 md:gap-5 mt-auto">

                                    < div className="flex flex-col justify-center items-center w-10 h-10 bg-red-400 rounded-full animate-pulse">
                                        <Image src={pedidoIcon} alt='Pedido Efetuado' />
                                    </div>

                                    <div className="flex flex-col justify-center items-center w-10 h-15 bg-red-400 rounded-full animate-pulse">
                                        <Image src={enviadoIcon} alt='Pedido Enviado' />
                                    </div>

                                    <div className="flex flex-col justify-center items-center w-10 h-15 bg-red-400 rounded-full animate-pulse">
                                        <Image src={transitoIcon} alt='Em transito' />
                                    </div>
                                    <div className="flex flex-col justify-center items-center w-10 h-15 bg-red-400 rounded-full animate-pulse">
                                        <Image src={despachadoIcon} alt='Pedido despachado' />
                                    </div>
                                </div>
                            }
                            {pedido?.status == "Transito" &&
                                <div className="flex gap-3 xl:gap-24 2xl:gap-28 md:gap-5 mt-auto">

                                    < div className="flex flex-col justify-center items-center w-10 h-10 bg-red-400 rounded-full animate-pulse">
                                        <Image src={pedidoIcon} alt='Pedido Efetuado' />
                                    </div>

                                    <div className="flex flex-col justify-center items-center w-10 h-15 bg-red-400 rounded-full animate-pulse">
                                        <Image src={enviadoIcon} alt='Pedido Enviado' />
                                    </div>

                                    <div className="flex flex-col justify-center items-center w-10 h-15 bg-red-400 rounded-full animate-pulse">
                                        <Image src={transitoIcon} alt='Em transito' />
                                    </div>
                                </div>
                            }
                            {pedido?.status == "Enviado" &&
                                <div className="flex gap-3 xl:gap-24 2xl:gap-28 md:gap-5 mt-auto">

                                    < div className="flex flex-col justify-center items-center w-10 h-10 bg-red-400 rounded-full animate-pulse">
                                        <Image src={pedidoIcon} alt='Pedido Efetuado' />
                                    </div>

                                    <div className="flex flex-col justify-center items-center w-10 h-15 bg-red-400 rounded-full animate-pulse">
                                        <Image src={enviadoIcon} alt='Pedido Enviado' />
                                    </div>
                                </div>
                            }
                            {pedido?.status == "PedidoEfetuado" &&
                                <div className="flex xl:gap-24 2xl:gap-28 md:gap-5 mt-auto">

                                    < div className="flex flex-col justify-center items-center w-10 h-10 bg-red-400 rounded-full animate-pulse">
                                        <Image src={pedidoIcon} alt='Pedido Efetuado' />
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>

            </main >
            <Footer />
        </>
    )
}