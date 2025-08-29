import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  variable: "--font-instrument-serif"
});

export const metadata: Metadata = {
  title: "Sophie Rong",
  description: "Sophie's creative portfolio",
};

// // export default function RootLayout({
// //   children,
// // }: {  // Removed ReadOnly
// //   children: React.ReactNode;
// // }) {
// //   return (
// //     <html lang="en" suppressHydrationWarning className={`scroll-smooth ${geistSans.className} antialiased`}>
// //       <body
// //         className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased
// //         bg-zinc-100 dark:bg-zinc-900`}
// //       >
// //         <ThemeProvider
// //             attribute="class"
// //             defaultTheme="light"
// //             enableSystem
// //             disableTransitionOnChange
// //         >
// //           <CustomNavbar />
// //           {children}
// //         </ThemeProvider>
// //       </body>
// //     </html>
// //   );
// // }


import CustomNavbar from "@/components/custom-navbar";
import { ThemeProvider } from "@/components/theme-provider"
 
type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning className={`scroll-smooth ${geistSans.className} antialiased`}>
        <head />
        <body className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased
        bg-zinc-100 dark:bg-zinc-900`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <CustomNavbar />
            <main className="w-full
              flex flex-col justify-center items-center
              mx-auto overflow-hidden
              px-10 md:px-20 lg:px-30 xl:px-40
              mb-10"
            >
              {children}
            </main>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}

