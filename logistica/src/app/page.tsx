import Image from 'next/image'

export default function Home() {
  return (
    <>
      <body className='bg-blue-100'>
        <header>
          <div>
            <nav className="bg-white dark:bg-gray-800  shadow ">
              <div className="px-8 mx-auto max-w-7xl">
                <div className="flex items-center justify-between h-16">
                  <div className="w-full justify-between flex items-center">
                    <div className='border-2 rounded-full bg-blue-100'>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        version="1.1"
                        viewBox="0 0 512 512"
                        xmlSpace="preserve"
                      >
                        <path
                          d="M311.069 130.515a11.744 11.744 0 00-11.578-9.768H35.43c-7.61 0-13.772 6.169-13.772 13.765 0 7.61 6.162 13.772 13.772 13.772h64.263c7.61 0 13.772 6.17 13.772 13.773s-6.162 13.772-13.772 13.772H13.772C6.169 175.829 0 181.998 0 189.601c0 7.603 6.169 13.764 13.772 13.764h117.114c6.72 0 12.172 5.46 12.172 12.18s-5.452 12.172-12.172 12.172H68.665c-7.61 0-13.772 6.17-13.772 13.773 0 7.602 6.162 13.772 13.772 13.772h45.857c6.726 0 12.179 5.452 12.179 12.172 0 6.719-5.453 12.172-12.179 12.172H51.215c-7.61 0-13.772 6.169-13.772 13.772 0 7.603 6.162 13.772 13.772 13.772h87.014l5.488 31.042h31.52c-1.854 4.504-2.911 9.421-2.911 14.598 0 21.245 17.218 38.464 38.464 38.464 21.237 0 38.456-17.219 38.456-38.464 0-5.177-1.057-10.094-2.911-14.598h100.04l-35.306-207.677zm-83.727 222.274c0 9.146-7.407 16.553-16.553 16.553-9.152 0-16.56-7.407-16.56-16.553 0-6.364 3.627-11.824 8.892-14.598h15.329c5.264 2.774 8.892 8.233 8.892 14.598zM511.598 314.072l-15.799-77.941-57.689-88.759H333.074l32.534 190.819h38.42c-1.846 4.504-2.904 9.421-2.904 14.598 0 21.245 17.219 38.464 38.456 38.464 21.246 0 38.464-17.219 38.464-38.464 0-5.177-1.057-10.094-2.91-14.598h16.741a20.119 20.119 0 0019.723-24.119zm-119.069-131.19h26.314l34.162 52.547h-51.512l-8.964-52.547zm63.611 169.907c0 9.146-7.407 16.553-16.56 16.553-9.138 0-16.552-7.407-16.552-16.553 0-6.364 3.635-11.824 8.892-14.598h15.329c5.264 2.774 8.891 8.233 8.891 14.598z"
                          className="st0"
                        ></path>
                      </svg>
                    </div>
                    <div className="hidden md:block">
                      <div className="flex items-baseline ml-10 space-x-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          version="1.1"
                          viewBox="0 0 512 512"
                          xmlSpace="preserve"
                        >
                          <path
                            d="M359.51 367.614c-19.106-7.148-40.877-18.276-40.877-32.676v-37.782c6.996-19.393 17.51-20.781 22.768-50.546 12.254-4.379 19.258-11.384 28.009-42.026 6.574-23.064-3.112-29.254-9.382-30.905.128-1.229.256-2.466.359-3.917 2.369-34.543 22.425-137.078-47.012-149.332-18.38-14.296-30.043-20.774-69.437-18.38-24.937-.008-43.892 5.497-70.306-2.05-35.245 29.565-25.561 126.66-20.63 173.504-6.199 1.388-16.889 7.148-10.052 31.08 8.744 30.641 15.748 37.646 28.001 42.026 5.258 29.765 21.252 39.322 22.417 50.546v37.782c0 14.4-23.494 26.55-40.877 32.676C119.058 379.397 25.911 414.275 34.073 512h443.856c8.161-97.725-85.217-131.965-118.419-144.386z"
                            className="st0"
                          ></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          version="1.1"
                          viewBox="0 0 512 512"
                          xmlSpace="preserve"
                        >
                          <path
                            d="M316.16 438.479c0-28.392 12.205-53.92 31.551-71.838-18.452-7.164-38.356-17.934-38.356-31.703v-37.782c6.996-19.393 17.51-20.781 22.768-50.546 12.254-4.379 19.258-11.384 28.009-42.026 6.574-23.064-3.112-29.254-9.382-30.905.128-1.229.256-2.466.359-3.917 2.369-34.543 22.425-137.078-47.012-149.332-18.38-14.296-30.043-20.774-69.436-18.38-24.938-.008-43.893 5.497-70.306-2.05-35.245 29.565-25.561 126.66-20.63 173.504-6.199 1.388-16.889 7.148-10.052 31.08 8.743 30.642 15.747 37.646 28.001 42.026 5.258 29.765 21.253 39.322 22.418 50.546v37.782c0 14.4-23.494 26.55-40.877 32.676C109.78 379.397 16.634 414.275 24.795 512h324.766c-20.43-17.982-33.401-44.235-33.401-73.521z"
                            className="st0"
                          ></path>
                          <path
                            d="M414.188 364.958c-40.606 0-73.521 32.916-73.521 73.521S373.582 512 414.188 512s73.521-32.916 73.521-73.521-32.915-73.521-73.521-73.521zm40.845 83.732h-30.634v30.634h-20.422V448.69h-30.634v-20.422h30.634v-30.634h20.422v30.634h30.634v20.422z"
                            className="st0"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="block">
                    <div className="flex items-center ml-4 md:ml-6">
                    </div>
                  </div>
                  <div className="flex -mr-2 md:hidden">
                    <button className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                      <svg width="20" height="20" fill="currentColor" className="w-8 h-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                        </path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    version="1.1"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                  >
                    <path
                      d="M359.51 367.614c-19.106-7.148-40.877-18.276-40.877-32.676v-37.782c6.996-19.393 17.51-20.781 22.768-50.546 12.254-4.379 19.258-11.384 28.009-42.026 6.574-23.064-3.112-29.254-9.382-30.905.128-1.229.256-2.466.359-3.917 2.369-34.543 22.425-137.078-47.012-149.332-18.38-14.296-30.043-20.774-69.437-18.38-24.937-.008-43.892 5.497-70.306-2.05-35.245 29.565-25.561 126.66-20.63 173.504-6.199 1.388-16.889 7.148-10.052 31.08 8.744 30.641 15.748 37.646 28.001 42.026 5.258 29.765 21.252 39.322 22.417 50.546v37.782c0 14.4-23.494 26.55-40.877 32.676C119.058 379.397 25.911 414.275 34.073 512h443.856c8.161-97.725-85.217-131.965-118.419-144.386z"
                      className="st0"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    version="1.1"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                  >
                    <path
                      d="M316.16 438.479c0-28.392 12.205-53.92 31.551-71.838-18.452-7.164-38.356-17.934-38.356-31.703v-37.782c6.996-19.393 17.51-20.781 22.768-50.546 12.254-4.379 19.258-11.384 28.009-42.026 6.574-23.064-3.112-29.254-9.382-30.905.128-1.229.256-2.466.359-3.917 2.369-34.543 22.425-137.078-47.012-149.332-18.38-14.296-30.043-20.774-69.436-18.38-24.938-.008-43.893 5.497-70.306-2.05-35.245 29.565-25.561 126.66-20.63 173.504-6.199 1.388-16.889 7.148-10.052 31.08 8.743 30.642 15.747 37.646 28.001 42.026 5.258 29.765 21.253 39.322 22.418 50.546v37.782c0 14.4-23.494 26.55-40.877 32.676C109.78 379.397 16.634 414.275 24.795 512h324.766c-20.43-17.982-33.401-44.235-33.401-73.521z"
                      className="st0"
                    ></path>
                    <path
                      d="M414.188 364.958c-40.606 0-73.521 32.916-73.521 73.521S373.582 512 414.188 512s73.521-32.916 73.521-73.521-32.915-73.521-73.521-73.521zm40.845 83.732h-30.634v30.634h-20.422V448.69h-30.634v-20.422h30.634v-30.634h20.422v30.634h30.634v20.422z"
                      className="st0"
                    ></path>
                  </svg>
                </div>
              </div>
            </nav>
          </div>
        </header>
        <div className="flex flex-col h-screen justify-center items-center ">
          <h2>ENCONTRE SEU PEDIDO:</h2>
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
              placeholder="DIGITE O CODIGO DE RASTREIO..."
            />
          </div>
        </div>
      </body>
    </>
  )
}
