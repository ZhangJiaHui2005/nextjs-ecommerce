import {Mona_Sans} from "next/font/google";
import "./globals.css";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "AI Interview",
  description: "An Ai Interview practice platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={"dark"}>
      <body
        className={`${monaSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
