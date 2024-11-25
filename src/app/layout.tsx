import { Footer } from "@/components/footer/footer";
import { TopBar } from "@/components/top-bar/top-bar";
import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const mono = IBM_Plex_Mono({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

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
      <link rel="icon" type="image/png" href="/logo.png" />
      <body className={mono.className}>
        <TopBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
