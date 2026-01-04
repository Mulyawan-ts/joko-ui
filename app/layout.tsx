import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Joko UI - Free Tailwind CSS Components",
  description:
    "Free, open-source Tailwind CSS components. Copy-paste ready components to build beautiful, responsive websites faster. No installation required.",
  keywords: ["tailwind css", "components", "ui library", "free", "open source"],
  openGraph: {
    title: "Joko UI - Free Tailwind CSS Components",
    description: "Free, open-source Tailwind CSS components. Copy-paste ready components to build beautiful, responsive websites faster.",
    url: "https://joko-ui.com",
    siteName: "Joko UI",
    images: [
      {
        url: "/joko-ui.webp",
        width: 1200,
        height: 630,
        alt: "Joko UI - Free Tailwind CSS Components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joko UI - Free Tailwind CSS Components",
    description: "Free, open-source Tailwind CSS components. Copy-paste ready components to build beautiful, responsive websites faster.",
    images: ["/joko-ui.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased`} suppressHydrationWarning>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col bg-background">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
