import Image from 'next/image';
import linkedinIcon from '../../../public/svg/linkedin.svg';
import githubIcon from '../../../public/svg/github.svg';
import twitterIcon from '../../../public/svg/twitter.svg';

export default function Footer() {
    return (
        <>
            <footer className="px-3 py-8 text-gray-500 transition-colors duration-200 bg-white dark:bg-gray-800 text-2 dark:text-gray-200">
                <div className="flex flex-col">
                    <div className="h-px mx-auto rounded-full md:hidden mt-7 w-11"></div>
                    <div className="flex flex-col mt-4 md:mt-0 md:flex-row">
                        <div className="h-px mx-auto mt-4 rounded-full md:hidden w-11"></div>
                        <div className="flex items-center justify-center gap-10 flex-1 mt-4 border-gray-100 md:mt-0 md:border-r">
                            <a
                                className="hover:text-primary-gray-20"
                                href="https://github.com/Marcokbc"
                            >
                                <span className="sr-only">View on GitHub</span>
                                <Image src={githubIcon} alt='github' />
                            </a>
                            <a
                                href="https://twitter.com/bymarcodev"
                                className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                            >
                                <Image src={twitterIcon} alt='twitter' />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/marco-antônio-meira-dev"
                                className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                            >
                                <Image src={linkedinIcon} alt='linkedin'/>
                            </a>
                        </div>
                        <div className="h-px mx-auto mt-4 rounded-full md:hidden w-11 "></div>
                        <div className="flex flex-col items-center justify-center flex-1 mt-7 md:mt-0 md:items-start md:pl-5">
                            <span className="">© 2023</span>
                            <span className="mt-7 md:mt-1">
                                Created by
                                <a
                                    className="underline hover:text-primary-gray-20"
                                    href="https://www.linkedin.com/in/marco-antônio-meira-dev/"
                                >
                                    Marco
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}