import { Inter } from 'next/font/google'
import './styles/main.css'
import './styles/globals.css'
import Navbar from '@/components/nav/Navbar'
import Script from 'next/script'
import Head from 'next/head'
import Footer from '@/components/footer/Footer'
// import script from '../../node_modules/bootstrap/dist/js/bootstrap.bundle'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AYEN',
  description: 'Next.js starter app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head key={`layout`}>
        <link rel="icon" type="image/png" href="/ayenlogo.png"/>
        <meta name="google-site-verification" content="ESCA8ZADmoxuz6ctenSWsEVYRG-jXoxP1SY1hBGSzrU" />
      </Head>
      <body className={inter.className}>
        <nav className='mb-3'>
          <Navbar/>
        </nav>
        {children}
        <footer>
          <Footer/>
        </footer>
        {/* <Script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js' strategy="beforeInteractive"/> */}
        <Script src="/bootstrap.bundle.min.js" strategy="beforeInteractive"/>
        </body>
    </html>
  )
}