import React from 'react';
import Link from 'next/link';

// ==========================================
// 1. KOMPONEN SIDEBAR UTAMA DESKTOP
// ==========================================
function SidebarDesktop() {
  return (
    <aside className="w-64 bg-[#780b0b] text-white min-h-screen p-6 flex flex-col justify-between fixed left-0 top-0 border-r border-black/10">
      <div>
        {/* LOGO & IDENTITAS */}
        <div className="flex items-center space-x-3 mb-10">
          <img src="/assets/logo.png" className="w-10 h-10 flex items-center justify-center"/>
          <div>
            <h2 className="text-xs font-bold tracking-wider uppercase">IMM</h2>
            <p className="text-[11px] text-slate-300 font-medium">[Nama Komisariat]</p>
          </div>
        </div>

        {/* MENU NAVIGASI DESKTOP */}
        <nav className="flex flex-col gap-1">
          <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 font-semibold text-xs tracking-wide transition">
            <span>🏠</span> Beranda
          </Link>
          
          {/* Menu lainnya diarahkan ke sub-folder rute masing-masing */}
          <Link href="/agenda" className="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-xs text-slate-300 hover:text-white hover:bg-white/5 tracking-wide transition">
            <span>📅</span> Agenda
          </Link>
          
          <Link href="/kader" className="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-xs text-slate-300 hover:text-white hover:bg-white/5 tracking-wide transition">
            <span>👥</span> Kader
          </Link>
          
          <Link href="/iuran" className="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-xs text-slate-300 hover:text-white hover:bg-white/5 tracking-wide transition">
            <span>💳</span> Iuran
          </Link>
          
          <Link href="/dokumen" className="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-xs text-slate-300 hover:text-white hover:bg-white/5 tracking-wide transition">
            <span>📄</span> Dokumen
          </Link>
          
          <Link href="/profil" className="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-xs text-slate-300 hover:text-white hover:bg-white/5 tracking-wide transition">
            <span>👤</span> Profil
          </Link>
        </nav>
      </div>
    </aside>
  );
}

export default function BerandaPage() {
  return (
    <div className="w-full min-h-screen bg-[#FDF8F5]">
      
      <div className="hidden md:flex">
        {/* Sidebar Kiri */}
        <SidebarDesktop />

        {/* Konten Sisi Kanan */}
        <div className="flex-1 ml-64 p-10 flex flex-col font-sans">
          
          {/* TOP BAR: Salam & Search Input */}
          <div className="flex items-center justify-between gap-6 mb-8">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">[Nama Anggota]</h1>
              <p className="text-xs text-slate-500 mt-0.5">[Nama Komisariat] · [Nama Cabang]</p>
            </div>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Cari kader atau kegiatan" 
                className="pl-4 pr-10 py-2 border border-slate-200 rounded-lg text-xs text-slate-400 w-64 focus:outline-none bg-white shadow-sm"
              />
              <span className="absolute right-3 top-2.5 text-xs text-slate-400">🔍</span>
            </div>
          </div>

          {/* 3 KARTU UTAMA (Total Kader, Kegiatan, Iuran) */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase">Total kader</p>
              <p className="text-3xl font-extrabold text-slate-900 mt-2">[000]</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase">Kegiatan bulan ini</p>
              <p className="text-3xl font-extrabold text-slate-900 mt-2">[000]</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase">Iuran terkumpul</p>
              <p className="text-3xl font-extrabold text-slate-900 mt-2">[000]</p>
            </div>
          </div>

          {/* KONTEN DUA KOLOM */}
          <div className="grid grid-cols-3 gap-6 items-start">
            
            {/* Kolom Kiri & Tengah: Agenda & Trikompetensi */}
            <div className="col-span-2 space-y-6">
              {/* Agenda Terdekat */}
              <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-[#780b0b] tracking-wider uppercase block">
                    AGENDA TERDEKAT
                  </span>
                  <h2 className="text-base font-bold text-slate-900">
                    Kajian Rutin Kader
                  </h2>
                  <p className="text-[11px] text-slate-400">
                    [Tanggal] · [Waktu] · [Lokasi]
                  </p>
                </div>
                <button className="px-6 py-2.5 bg-[#780b0b] text-white hover:bg-[#5f0808] transition-all text-xs font-bold rounded-xl shadow-md shadow-[#780b0b]/10">
                  Konfirmasi Hadir
                </button>
              </div>

              {/* Trikompetensi */}
              <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                <h3 className="text-sm font-bold text-slate-900 mb-4">Trikompetensi</h3>
                <div className="grid grid-cols-3 gap-3">
                  {['Religiusitas', 'Intelektualitas', 'Humanitas'].map((item, index) => (
                    <div key={index} className="bg-[#FDF8F5] border border-slate-100 text-center py-3 rounded-xl text-xs font-semibold text-[#780b0b]">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Kolom Kanan: Pengumuman & Iuran */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-6">
              {/* Pengumuman */}
              <div className="border-b border-slate-100 pb-5">
                <h3 className="text-sm font-bold text-slate-900 mb-3">Pengumuman</h3>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-slate-800">
                    Pendaftaran Darul Arqam Dasar dibuka
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    [Tanggal] · [Nama Komisariat]
                  </p>
                </div>
              </div>

              {/* Iuran */}
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-2">Iuran bulan ini</h3>
                <p className="text-xs text-slate-500 font-medium">
                  Jatuh tempo <span className="text-slate-800 font-semibold">[Tanggal]</span>
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>

      <div className="block md:hidden w-full flex flex-col font-sans pb-24">
        {/* Header Utama (Merah Maroon) */}
        <header className="bg-[#801D24] text-white px-6 pt-10 pb-8 rounded-b-[2.5rem] shadow-md">
          <div className="flex items-center space-x-2.5 mb-6">
            <img src="/assets/logo.png" className="w-12 h-12 flex items-center justify-center flex-shrink-0" alt="Logo" />
            <span className="text-xs font-bold tracking-wider text-amber-400 uppercase">
              Ikatan Mahasiswa Muhammadiyah
            </span>
          </div>
          
          <div className="space-y-1">
            <h1 className="text-2xl font-extrabold tracking-wide leading-tight">
              [Nama Anggota]
            </h1>
            <p className="text-xs text-slate-300 font-medium">
              [Nama Komisariat] • [Nama Cabang]
            </p>
          </div>
        </header>

        {/* Konten Utama Mobile */}
        <main className="flex-1 px-6 mt-6 space-y-6">
          {/* Trilogi IMM */}
          <div className="grid grid-cols-3 gap-2.5">
            {['Religiusitas', 'Intelektualitas', 'Humanitas'].map((trilogi, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-200 text-slate-700 text-center py-2.5 px-1 rounded-xl text-xs font-semibold shadow-sm cursor-default"
              >
                {trilogi}
              </div>
            ))}
          </div>

          {/* Agenda Terdekat */}
          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-[#801D24] tracking-wider uppercase block">
                AGENDA TERDEKAT
              </span>
              <h2 className="text-base font-bold text-slate-900">
                Kajian Rutin Kader
              </h2>
              <p className="text-[11px] text-slate-400">
                [Tanggal] • [Waktu] • [Lokasi]
              </p>
            </div>
            <button className="w-full py-3 bg-[#801D24] text-white hover:bg-[#6b181e] active:scale-[0.99] transition-all text-xs font-bold rounded-xl tracking-wide shadow-md shadow-[#801D24]/10">
              Konfirmasi Hadir
            </button>
          </div>
          </main>
          </div>
          </div>)}

