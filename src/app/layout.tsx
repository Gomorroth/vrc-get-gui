import { NotoSans, SourceHanSans } from '@/lib/Fonts'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className='min-h-full min-w-full'>
      <body className={`${NotoSans.variable} font-ns min-h-full min-w-full`}>
        {children}
      </body>
    </html>
  )
}
