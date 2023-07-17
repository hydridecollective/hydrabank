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
        <div className="backdrop-blur-sm h-16 flex flex-row fixed justify-around items-center w-screen top-0" style={{zIndex: 1}}>
          <span>test</span>
          <span>test</span>
          <span>test</span>
        </div>
        {children}
      </body>
    </html>
  )
}
