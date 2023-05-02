import Image from 'next/image';
import Header from './header';
import Link from 'next/link';
import Footer from './footer';

export default function Home() {
  return (
    <>
      <body>
        <Header />
        <main className='bg-gray-100'>
          <div>

            <div className="lg:mt-0 lg:flex-shrink-0">
              <div className="flex flex-col space-y-4 h-screen justify-center items-center ">
                <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                  <h2 className="flex flex-col justify-center items-center text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                    <div className='bg-gray-800 rounded-lg w-2/5'>
                      <span className="block">Want to find your order?</span>
                    </div>
                    <span className="block text-gray-800">It's today or never.</span>
                  </h2>
                </div>
                <h2>FIND YOUR ORDER:</h2>
                <div className="flex relative ">
                  <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                    >
                      <path d="M10.035 18.069a7.981 7.981 0 003.938-1.035l3.332 3.332a2.164 2.164 0 003.061-3.061l-3.332-3.332a8.032 8.032 0 00-12.68-9.619 8.034 8.034 0 005.681 13.715zM5.768 5.768A6.033 6.033 0 114 10.035a5.989 5.989 0 011.768-4.267z"></path>
                    </svg>
                  </span>
                  <input
                    type="text"
                    id="find-with-icon"
                    className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    name="codigo"
                    placeholder="DIGITE O CODIGO..."
                  />
                </div>
                <Link href="/pedido">
                  <button
                    type="button"
                    className=" pg-2 py-2 px-4  bg-white dark:bg-gray-800 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-w-1/6 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Find
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </body>
    </>
  )
}
