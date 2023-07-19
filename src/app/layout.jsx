import './globals.css'
import { Inter, Rubik, Golos_Text, Space_Mono } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: "--font-inter" });
const rubik = Rubik({ subsets: ['latin'], variable: "--font-rubik" });
const golos = Golos_Text({ subsets: ['cyrillic'], variable: "--font-golos" });
const spacemono = Space_Mono({ weight: ["400", "700"], subsets: ['latin'], variable: "--font-spacemono" });

export const metadata = {
  title: 'Hydrabank',
  description: 'A collective striving to provide the best security for people.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${golos.variable} ${rubik.variable} ${spacemono.variable} font-sans`}>
        <div className="backdrop-blur-sm h-16 flex flex-row sticky justify-around items-center w-screen top-0 z-[1]">
          <div className="flex-[.70_1_0%] sm:flex-[.35_1_0%]">
            <a className="btn btn-ghost normal-case text-xl">Logo</a>
          </div>
          <div className="flex-none hidden sm:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a>Link</a></li>
              <li>
                <details>
                  <summary>
                    Parent
                  </summary>
                  <ul className="p-2 bg-base-100">
                    <li><a>Link 1</a></li>
                    <li><a>Link 2</a></li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <div class="flex-none sm:hidden dropdown">
            <label tabindex="0" class="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 w-fit right-0">
              <li><a>Homepage</a></li>
              <li><a>Portfolio</a></li>
              <li><a>About</a></li>
            </ul>
          </div>
        </div>
        {children}
      </body>
    </html>
  )
}
