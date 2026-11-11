import type { Metadata } from "next";
import "./globals.css";
import BottomNav from "./components/BottomNav";
import SplashWrapper from "./components/SplashWrapper";

export const metadata: Metadata = {
  title: "Aplikasi KTA IMM",
  description: "Ikatan Mahasiswa Muhammadiyah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="bg-slate-100 antialiased min-h-screen text-slate-800">
        
        <SplashWrapper>
          {/* Konten Utama Aplikasi */}
          <main className="w-full min-h-screen flex flex-col">
            {children}
          </main>
          
          {/* Navigasi Bawah (Hanya muncul di layar HP / mobile) */}
          <div className="block md:hidden">
            <BottomNav />
          </div>
        </SplashWrapper>

      </body>
    </html>
  );
}