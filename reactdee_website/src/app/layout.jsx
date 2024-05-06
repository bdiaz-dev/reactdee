import { Montserrat } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata = {
  title: "ReactDee",
  description: "Simply, easy, and ready for use React Components for your apps.",
}

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}