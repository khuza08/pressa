import './globals.css'
import BgGradient from "./components/ui/bg";

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
      <body className=" text-white">
        <BgGradient/>
          {children}
        </body>
    </html>
  )
}