import { Inter } from 'next/font/google'
import './styles/main.css'
import './styles/globals.css'
import Navbar from '@/components/nav/Navbar'
import Script from 'next/script'
import Head from 'next/head'
import Footer from '@/components/footer/Footer'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next App',
  description: 'Next.js starter app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>
      <body className={inter.className}>
        <nav className='mb-5'>
          <Navbar/>
        </nav>
        {children}
        <footer>
          <Footer/>
        </footer>
        <Script src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js'/>
        </body>
    </html>
  )
}