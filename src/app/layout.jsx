import './globals.css'
import { Inter, Rubik, Golos_Text, Space_Mono } from 'next/font/google'
import Image from 'next/image'
import { Footer } from './Footer';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { BiSolidInfoCircle } from 'react-icons/bi';

const inter = Inter({ subsets: ['latin'], variable: "--font-inter" });
const rubik = Rubik({ subsets: ['latin'], variable: "--font-rubik" });
const golos = Golos_Text({ subsets: ['cyrillic'], variable: "--font-golos" });
const spacemono = Space_Mono({ weight: ["400", "700"], subsets: ['latin'], variable: "--font-spacemono" });

export const metadata = {
  title: 'Hydrabank',
  description: 'Striving to provide the best security for your cloud systems. Part of the Hydride Collective.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${golos.variable} ${rubik.variable} ${spacemono.variable} font-sans min-h-screen`}>
        {header()}
        {children}
        <Footer />
      </body>
    </html>
  );
}

const header = () => (
    <div className="flex flex-col sticky top-0 left-0 z-[1] gap-y-2 backdrop-blur-sm ">
        <div className="flex flex-row items-center top-0 left-0 justify-between gap-x-2 w-full p-3 bg-gray-800">
            <h1 className="font-rubik flex flex-row items-center gap-x-2">
                <BiSolidInfoCircle className="text-xl" /> 
                <b>Pardon our mess!</b> 
                We&apos;re currently in the process of redesigning hydrabank.systems. This is a preliminary version of the site, and is subject to massive changes.
            </h1>
        </div>
        <div className="header flex flex-row justify-around items-center w-full top-0">
            <div className="flex items-center flex-[.70_1_0%] sm:flex-[.35_1_0%]">
            <a href="/" className="btn btn-ghost">
                <Image 
                    src="/assets/img/hb.short.transparent.png" 
                    width={64} height={64}
                    className="w-12"
                    alt="Hydrabank logo"
                />
            </a>
            </div>
            <ul className="hidden sm:flex menu menu-horizontal px-1">
            {renderListItems()}
            </ul>
            <div className="sm:hidden dropdown">
            <label tabIndex="0" className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 w-fit right-0">
                {renderListItems()}
            </ul>
            </div>
        </div>
    </div>
); 

const renderListItems = () => <>
  <li><a href="/packages">Pricing</a></li>
  <li><a href="/team">Team</a></li>
  <li><a href="https://hydride.dev/contact" className="flex flex-row items-center gap-x-2">Contact <FaExternalLinkAlt className="text-sm" /></a></li>
  {/* <li>
    <details>
      <summary>
        Parent
      </summary>
      <ul className="p-2 bg-base-100">
        <li><a href="/contact">Contact Us</a></li>
        <li><a href="/packages">Prices and Services</a></li>
      </ul>
    </details>
  </li> */}
</>;
