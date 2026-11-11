"use client"; 

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
  const pathname = usePathname();

  // Fungsi untuk mengecek apakah tab sedang aktif
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200 flex justify-around py-2 z-50">
      
      {/* Beranda */}
      <Link href="/" className={`flex flex-col items-center ${isActive('/') ? 'text-blue-600' : 'text-gray-500'}`}>
        <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <span className="text-[10px]">Beranda</span>
      </Link>

      {/* Agenda */}
      <Link href="/agenda" className={`flex flex-col items-center ${isActive('/agenda') ? 'text-blue-600' : 'text-gray-500'}`}>
        <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-[10px]">Agenda</span>
      </Link>

      {/* Kader */}
      <Link href="/kader" className={`flex flex-col items-center ${isActive('/kader') ? 'text-blue-600' : 'text-gray-500'}`}>
        <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        <span className="text-[10px]">Kader</span>
      </Link>

      {/* Profil */}
      <Link href="/profil" className={`flex flex-col items-center ${isActive('/profil') ? 'text-blue-600' : 'text-gray-500'}`}>
        <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <span className="text-[10px]">Profil</span>
      </Link>

    </nav>
  );
}
