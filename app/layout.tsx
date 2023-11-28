import Header from '@/components/header/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SectionContainer from '@/components/SectionContainer';
import Footer from '@/components/Footer';


const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="" lang="en">
      <body>
      <div className='mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0'>
          <div className="flex h-screen flex-col justify-between">
            {/* <Header navLinks={headerNavLinks} /> */}
            <Header />
            <main className="mb-auto">{children}</main>
          </div>
        </div>
        </body>
    </html>
  )
}
