import './globals.css'
import BgGradient from "./components/ui/bg";
import { LenisProvider } from './components/contexts/LenisContext';

export const metadata = {
  title: 'PRESSA - Fashion Digital Elevation',
  description: 'Where Fashion Meets Digital Elevation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="text-white">
        <LenisProvider>
          <BgGradient/>
          {children}
        </LenisProvider>
      </body>
    </html>
  )
}