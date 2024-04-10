import ReactQueryProvider from "@/components/providers/react-query-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import NextAuthProvider from "@/components/providers/next-auth-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Open Starter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <ReactQueryProvider>
            <Toaster />
            <main>{children}</main>
          </ReactQueryProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
