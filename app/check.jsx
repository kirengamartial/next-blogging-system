import Header from './Header'
import { usePathname } from 'next/navigation'

export default function RootLayout({ children }) {
  const pathname = usePathname()
  const isAdminPage = pathname.startsWith('/admin')

  return (
    <html>
      <body>
        {!isAdminPage && <Header />}
        {children}
      </body>
    </html>
  )
}