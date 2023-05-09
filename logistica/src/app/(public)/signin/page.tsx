'use client';
import Link from 'next/link';
import Header from '../header';
import ImageLogistic from '../../../../public/images/logistic.png';
import Image from 'next/image';
import Footer from '../footer';
import { useState } from 'react';
import axios from 'axios';
import api from '@/app/services/api';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loginIcon from '../../../../public/svg/login.svg';
import userNameIcon from '../../../../public/svg/username.svg';
import passwordIcon from '../../../../public/svg/password.svg';

export default function Signin() {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    async function login(event: any) {
        event.preventDefault();

        const data = {
            userName, password
        };

        try {

            const response = await api.post('api/Account/LoginUser', data);

            localStorage.setItem('userName', userName);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('expiration', response.data.expiration);

            router.push('/admin');
            toast.info('Login realizado com sucesso.');
        } catch (error) {
            alert('O login falhou ' + error)
        }
    }

    return (
        <>
            <Header />
            <main className='bg-gray-100'>
                <div>
                    <form onSubmit={login}>
                        <div className="flex flex-wrap w-full">
                            <div className="flex flex-col w-full md:w-1/2 h-screen">
                                <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
                                    <div className='flex flex-col justify-center items-center'>
                                        <Image src={loginIcon} alt="login" />
                                    </div>
                                    <p className="text-3xl text-center">SignIn</p>
                                    <form className="flex flex-col pt-3 md:pt-8">
                                        <div className="flex flex-col pt-4">
                                            <div className="flex relative ">
                                                <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                                    <Image src={userNameIcon} alt='username' />
                                                </span>
                                                <input
                                                    type="text"
                                                    id="design-login-email"
                                                    className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                    placeholder="Username"
                                                    value={userName}
                                                    onChange={e => setUsername(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col pt-4 mb-12">
                                            <div className="flex relative ">
                                                <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                                    <Image src={passwordIcon} alt='password' />
                                                </span>
                                                <input
                                                    type="password"
                                                    id="design-login-password"
                                                    className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                    placeholder="Password"
                                                    value={password}
                                                    onChange={e => setPassword(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <button
                                            type="submit"
                                            onClick={login}
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
                    </form>
                </div>
            </main>
            <Footer />
        </>
    )
}