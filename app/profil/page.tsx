import Image from "next/image";
import React from 'react';

export default function ProfilPage() {
  return (
    <div className="min-h-screen bg-[#FDF8F5] text-slate-800 flex flex-col font-sans max-w-md mx-auto shadow-2xl relative pb-24">
      
      {/* Header */}
      <header className="px-6 pt-8 pb-4">
        <h1 className="text-2xl font-bold text-slate-900">Profil</h1>
      </header>

      {/* Konten Utama */}
      <main className="flex-1 px-6 space-y-6">
        
        {/* Kartu Tanda Anggota */}
        <div className="bg-[#801D24] text-white p-6 rounded-2xl shadow-md relative overflow-hidden h-44 flex flex-col justify-between">
          <div className="flex items-center space-x-2">
            {/* Placeholder Logo */}
            <img src="/assets/logo.png" className="w-12 h-12 flex items-center justify-center flex-shrink-0">
        
          </img>
            <span className="text-xs font-semibold tracking-wider text-amber-400">
              KARTU TANDA ANGGOTA • IMM
            </span>
          </div>
          
          <div>
            <h2 className="text-xl font-bold tracking-wide">[Nama Anggota]</h2>
            <p className="text-xs text-slate-300 mt-1">
              No. [Nomor Anggota] • [Nama Komisariat]
            </p>
          </div>
        </div>

        {/* Seksi Jenjang Perkaderan */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
          <h3 className="text-sm font-bold text-slate-800 mb-4">Jenjang Perkaderan</h3>
          
          <div className="grid grid-cols-3 gap-2 relative">
            {/* Garis Penghubung Belakang */}
            <div className="absolute top-4 left-[16%] right-[16%] h-[2px] bg-slate-100 -z-0"></div>

            {/* Tahap 1 - DAD */}
            <div className="flex flex-col items-center text-center z-10">
              <div className="w-9 h-9 rounded-full bg-[#801D24] text-white flex items-center justify-center text-sm font-bold mb-2 shadow-sm">
                1
              </div>
              <span className="text-xs font-bold text-slate-700">DAD</span>
              <span className="text-[11px] text-slate-400 mt-0.5">Selesai</span>
            </div>

            {/* Tahap 2 - DAM */}
            <div className="flex flex-col items-center text-center z-10">
              <div className="w-9 h-9 rounded-full bg-amber-100 text-amber-700 border border-amber-200 flex items-center justify-center text-sm font-bold mb-2">
                2
              </div>
              <span className="text-xs font-bold text-slate-600">DAM</span>
              <span className="text-[11px] text-amber-600 font-medium mt-0.5">Berikutnya</span>
            </div>

            {/* Tahap 3 - DAP */}
            <div className="flex flex-col items-center text-center z-10">
              <div className="w-9 h-9 rounded-full bg-slate-50 text-slate-400 border border-slate-200 flex items-center justify-center text-sm font-bold mb-2">
                3
              </div>
              <span className="text-xs font-bold text-slate-400">DAP</span>
              <span className="text-[11px] text-slate-400 mt-0.5">Belum</span>
            </div>
          </div>
        </div>

        {/* Daftar Menu / List Pilihan */}
        <div className="space-y-1">
          {[
            { nama: 'Iuran dan Kas' },
            { nama: 'Dokumen Organisasi' },
            { nama: 'Pengaturan' }
          ].map((item, index) => (
            <button 
              key={index} 
              className="w-full flex items-center justify-between py-4 border-b border-slate-200/80 text-left hover:bg-slate-50/50 transition-colors px-1"
            >
              <span className="text-sm font-medium text-slate-700">{item.nama}</span>
              {/* Ikon Panah Kanan (Chevron Right) */}
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}
        </div>

      </main>
    </div>
  );
}