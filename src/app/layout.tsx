import type { Metadata } from "next";
import { Poppins, Space_Mono } from "next/font/google";
import { elektrodukasiMetadata } from "@/lib/metadata";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/themeprovider";
import "./globals.css";

const fontPoppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600"]
});

const fontMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata: Metadata = elektrodukasiMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <head />
      <body
        className={`${fontPoppins.variable} ${fontMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange={false}
        >
          {children}
          <Toaster />
        </ThemeProvider>        
        <GoogleAnalytics gaId="G-L8GSWK5Z7C" />
      </body>
    </html>
  );
}
