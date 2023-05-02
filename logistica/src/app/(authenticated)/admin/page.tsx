import Footer from "../footer";
import Header from "../header";

export default function Admin() {
    return (
        <>
            <Header />
            <main className='bg-gray-100'>
                <div className="lg:mt-0 lg:flex-shrink-0">
                    <div className="flex flex-col space-y-4 h-screen justify-center items-center ">
                        <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                            <table className="table p-4 bg-white rounded-lg shadow">
                                <thead>
                                    <tr>
                                        <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                                            #
                                        </th>
                                        <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                                            First name
                                        </th>
                                        <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                                            Last name
                                        </th>
                                        <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                                            Username
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-gray-700">
                                        <td className="border-b-2 p-4 dark:border-dark-5">1</td>
                                        <td className="border-b-2 p-4 dark:border-dark-5">Jean Marc</td>
                                        <td className="border-b-2 p-4 dark:border-dark-5">Louis</td>
                                        <td className="border-b-2 p-4 dark:border-dark-5">Jl987</td>
                                    </tr>
                                    <tr className="text-gray-700">
                                        <td className="border-b-2 p-4 dark:border-dark-5">2</td>
                                        <td className="border-b-2 p-4 dark:border-dark-5">Eric</td>
                                        <td className="border-b-2 p-4 dark:border-dark-5">Prouve</td>
                                        <td className="border-b-2 p-4 dark:border-dark-5">prouveE</td>
                                    </tr>
                                    <tr className="text-gray-700">
                                        <td className="border-b-2 p-4 dark:border-dark-5">3</td>
                                        <td className="border-b-2 p-4 dark:border-dark-5">Julien</td>
                                        <td className="border-b-2 p-4 dark:border-dark-5">Clai</td>
                                        <td className="border-b-2 p-4 dark:border-dark-5">CJUL87</td>
                                    </tr>
                                    <tr className="text-gray-700">
                                        <td className="border-b-2 p-4 dark:border-dark-5">4</td>
                                        <td className="border-b-2 p-4 dark:border-dark-5">Igor</td>
                                        <td className="border-b-2 p-4 dark:border-dark-5">Louth</td>
                                        <td className="border-b-2 p-4 dark:border-dark-5">IGL89_9</td>
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

        </>
    )
}