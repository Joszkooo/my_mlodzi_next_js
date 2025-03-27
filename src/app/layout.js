import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "400",
});

export const metadata = {
  title: "MyMlodzi",
  description: "Fundacja My Mlodzi",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}
export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
