'use client';
import Header from '../header';
import Background from '../../../../public/images/logistica-background.jpg';
import Image from 'next/image';
import Footer from '../footer';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/app/services/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import signUpIcon from '../../../../public/svg/signup.svg';

export default function SignUp() {
    const [userName, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const router = useRouter();

    const regexEmail = new RegExp(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/i);
    const regexPassword = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,15}$/);

    async function register(event: any) {
        event.preventDefault();

        const data = {
            userName, email, password, confirmPassword
        };

        if (!data.userName || !data.email || !data.password || !data.confirmPassword) {
            toast.info("Todos os campos são obrigatórios.");
        } else if (!regexPassword.test(data.password)) {
            toast.info("A senha deve conter entre 8 e 15 caracteres, ao menos um número, uma letra maiúscula e um caracter especial.");
        } else if (!regexEmail.test(data.email)) {
            toast.info("Informe um E-mail valido.")
        } else if (data.password != data.confirmPassword) {
            toast.info("As senhas não conferem")
        } else {
            try {
                const response = await api.post('api/Account/CreateUser', data)
                    .then(response => {
                        toast.info("Conta Criada com Sucesso");
                    });

                router.push('/signin');
            } catch (error) {
                toast.error('Não foi possivel realizar o cadastro' + error)
            }
        }

    }
    return (
        <>
            <head>
                <title>Cadastrar - Logistica</title>
            </head>
            <Header />

            <main >
                <div style={{ zIndex: -1, position: 'fixed', width: "100vw", height: "100vh" }}>
                    <Image
                        src={Background}
                        alt="background"
                        layout="fill"
                        objectFit="cover"
                        className='opacity-50'
                    />
                </div>
                <div className="w-full h-screen font-sans bg-cover bg-landscape">
                    <div className="container flex items-center justify-center flex-1 h-full mx-auto">
                        <div className="w-full max-w-lg">
                            <div className="leading-loose">
                                <form onSubmit={register} className="max-w-sm p-10 m-auto rounded shadow-xl bg-white/25">
                                    <div className='flex flex-col justify-center items-center'>
                                        <Image src={signUpIcon} alt="signUp" />
                                    </div>
                                    <p className="mb-8 text-2xl font-light text-center">
                                        SignUp
                                    </p>
                                    <div className="mb-2">
                                        <div className=" relative ">
                                            <input
                                                value={userName}
                                                onChange={e => setUsername(e.target.value)}
                                                type="text" id="login-with-bg-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                placeholder="Nome de Usuário" />
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <div className=" relative ">
                                            <input
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
                                                type="text" id="login-with-bg-password" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                placeholder="E-mail" />
                                        </div>
                                    </div>
                                    <div className="flex gap-4 mb-2">
                                        <div className=" relative ">
                                            <input
                                                value={password}
                                                onChange={e => setPassword(e.target.value)}
                                                type="password" id="login-with-bg-password" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                placeholder="Senha" />
                                        </div>
                                        <div className=" relative ">
                                            <input
                                                value={confirmPassword}
                                                onChange={e => setConfirmPassword(e.target.value)}
                                                type="password" id="login-with-bg-password" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                placeholder="Repita a senha" />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between mt-4">
                                        <button type="submit" className="py-2 px-4  bg-white dark:bg-gray-800 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                            Nova Conta
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}