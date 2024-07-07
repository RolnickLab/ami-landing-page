import { TopBar } from "@/components/top-bar/top-bar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Automated Monitoring of Insects (AMI)",
  description:
    "Timestamped, Geolocated, and Labelled Observational Insect Data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
