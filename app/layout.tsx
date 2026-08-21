import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/footer/Footer";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Home | Energizese",
  description: "Your Trusted Partner in Every Step",
  icons: {
    icon: "/uploads/3af253d99bd04058.png",
    apple: "/uploads/3af253d99bd04058.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-white text-[#2c3248] m-0 p-0 overflow-x-hidden">
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}


