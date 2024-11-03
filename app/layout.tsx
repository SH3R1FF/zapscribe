import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Outfit({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'], 
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Zapscribe",
  description: "An AI content creator application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={poppins.variable}>
        <body className="bg-neutral-900">

            <div className="">
              {children}
            </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
