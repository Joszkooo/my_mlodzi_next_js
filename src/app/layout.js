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

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
