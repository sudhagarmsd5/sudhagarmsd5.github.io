import '@styles/globals.scss'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sudhagar Murugesan | Developer',
  description: 'FullStack Web Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className='app'>
          {children}
        </main>
      </body>
    </html>
  )
}
