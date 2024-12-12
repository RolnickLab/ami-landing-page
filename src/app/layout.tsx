import { Footer } from "@/components/footer/footer";
import { TopBar } from "@/components/top-bar/top-bar";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang="en">
      <link rel="icon" type="image/png" href="/logo.png" />
      <body className={mono.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <TopBar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
