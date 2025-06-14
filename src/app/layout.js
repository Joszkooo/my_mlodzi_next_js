import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "400",
});

export const metadata = {
  title: "Rozkwit",
  description: "Fundacja Rozkwit",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
