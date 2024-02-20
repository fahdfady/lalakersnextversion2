
import Navbar from '@/components/navbar'
import '~/public/globals.css'
import { Rubik } from 'next/font/google'
import { Suspense } from 'react'
// import Loading from './loading'
import Footer from '@/components/footer'
import { Metadata } from 'next'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LA Lakers unofficial (fan) website',
  description: 'Made by Fahd Ashour, A front-end developer, using Next js',
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='dark'>
      <body className={rubik.className} >
        <Navbar />

        {/* < Suspense fallback={< Loading />}> */}
        <main className="min-h-[45vh]" >
          {children}
        </main>

        < Footer />
        {/* </Suspense> */}

        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.js" /> */}
      </body>
    </html>
  )
}
