import './globals.css'

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
      <body className="bg-black text-white">{children}</body>
    </html>
  )
}