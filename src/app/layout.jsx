import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hydrabank',
  description: 'A collective striving to provide the best security for people.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
