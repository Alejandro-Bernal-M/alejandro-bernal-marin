import '../styles/globals.css'
import fondo from '../resources/images/background4.svg'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Alejandro',
  description: 'My portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
        style={{
        backgroundImage: `url(${fondo.src})`,
        backgroundSize: 'fit',
        backgroundRepeat: 'repeat',
      }}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
