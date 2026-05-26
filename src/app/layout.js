import { Shantell_Sans } from "next/font/google"
import "./globals.css"

const shantellSans = Shantell_Sans({
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: "Happy Birthday, Mom!",
  description: "A special birthday countdown and celebration for Mom",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={shantellSans.className}>{children}</body>
    </html>
  )
}
