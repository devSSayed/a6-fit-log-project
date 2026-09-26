import type { Metadata, Viewport } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Reusables/Navbar";
import Footer from "@/Components/Reusables/Footer";
import WorkProvider from '../WorkoutContext/workContext'
import { Toaster } from "react-hot-toast";

const oswald = Oswald({
  variable: "--font-Oswald",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-Inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FITLOG",
  description: "...",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme='dark'
      className={`${oswald.variable} ${inter.variable} h-full antialiased`}
      
    >

      <body className="min-h-full flex flex-col w-full max-w-full overflow-x-hidden">
        <WorkProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
                {children}
            </main>
            
            {/* Global Toaster Container */}
            <Toaster
              position="top-right"
              toastOptions={{
                // Custom dark theme styling
                style: {
                  background: '#000000',
                  color: '#ffffff',
                  fontWeight: 'bold',
                  border: '1px solid #27272a',
                  borderRadius: '12px',
                  padding: '12px 16px',
                },
                success: {
                  iconTheme: {
                    primary: '#C2F800', // Your lime/neon color
                    secondary: '#0F1115',
                  },
                },
              }}
            />

            <Footer />
          </div>

        </WorkProvider>
      </body>
    </html>
  );
}
