import "styles/tailwind.css"
import { Theme } from "@radix-ui/themes"
import { inter } from "fonts/fonts"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-slate-300`}>
        <Theme>{children}</Theme>
      </body>
    </html>
  )
}
