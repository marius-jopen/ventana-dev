import Footer from "./components/footer"
import Header from "./components/header"
import Grid from "./components/grid"
import '@/app/styles.css'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        {/* <Grid /> */}
      </body>
    </html>
  )
}
