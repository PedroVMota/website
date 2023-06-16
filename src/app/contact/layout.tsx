import '../globals.css'
import { Inter } from 'next/font/google'
import Menu from '../../components/menu'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
		<Menu />
		{children}
	  </body>
    </html>
  )
}
