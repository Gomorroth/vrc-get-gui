import localFont from 'next/font/local'
import { Noto_Sans_JP} from 'next/font/google'

export const SourceHanSans = localFont({
  src: '../fonts/SourceHanSans-VF.otf',
  variable: "--font-shs",
  display: "block"
});
export const NotoSans = Noto_Sans_JP({
    subsets: ["latin"],
    variable: "--font-ns",
    display: "swap",
    preload: true,
  });