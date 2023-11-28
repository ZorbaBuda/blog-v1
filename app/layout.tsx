import Header from '@/components/header/Header'
import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="" lang="en">
      <body className='bg-black text-white'>

      <div className='mx-auto px-4 sm:px-6  xl:px-0'>
          <div className=" ">
            <Header />
            <main className="px-10">{children}</main>
          </div>
        </div>
        </body>
    </html>
  )
}
