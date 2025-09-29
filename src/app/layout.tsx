import Header from "@/component/header";
import "./globals.css";
import { LoaderProvider } from "@/context/LoaderContext";
import { Inter } from "next/font/google";
import { Noto_Sans_Tamil } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoTamil = Noto_Sans_Tamil({
  subsets: ["tamil"],
  variable: "--font-tamil",
});


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${notoTamil.variable}`}>
      <body>
        <LoaderProvider>
          <div className="flex sm:min-h-screen flex-col sm:flex-row">
            <div className="sm:h-screen">
              <Header />
            </div>
            <main className="flex-1 h-screen overflow-auto">
              {children}
            </main>
          </div>
          </LoaderProvider>
      </body>
    </html>
  );
}
