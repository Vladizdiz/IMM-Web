import React from 'react';

// ==========================================
// 1. KOMPONEN SIDEBAR UTAMA DESKTOP
// ==========================================
function SidebarDesktop() {
  return (
    <aside className="w-64 bg-[#780b0b] text-white min-h-screen p-6 flex flex-col justify-between fixed left-0 top-0 border-r border-black/10 z-30">
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
          <a href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-xs text-slate-300 hover:text-white hover:bg-white/5 tracking-wide transition">
            <span>🏠</span> Beranda
          </a>
          <a href="/agenda" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 font-semibold text-xs tracking-wide transition">
            <span>📅</span> Agenda
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-xs text-slate-300 hover:text-white hover:bg-white/5 tracking-wide transition">
            <span>👥</span> Kader
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-xs text-slate-300 hover:text-white hover:bg-white/5 tracking-wide transition">
            <span>💳</span> Iuran
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-xs text-slate-300 hover:text-white hover:bg-white/5 tracking-wide transition">
            <span>📄</span> Dokumen
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-xs text-slate-300 hover:text-white hover:bg-white/5 tracking-wide transition">
            <span>👤</span> Profil
          </a>
        </nav>
      </div>
    </aside>
  );
}

export default function AgendaPage() {
  // Data dummy untuk daftar agenda sesuai gambar bawaan Anda
  const daftarAgenda = [
    {
      kategori: 'PERKADERAN',
      judul: 'Darul Arqam Dasar (DAD)',
      waktu: '[Waktu]',
      lokasi: '[Lokasi]',
      tanggal: '00',
      bulan: 'BLN'
    },
    {
      kategori: 'KAJIAN',
      judul: 'Diskusi Kader Pekanan',
      waktu: '[Waktu]',
      lokasi: '[Lokasi]',
      tanggal: '00',
      bulan: 'BLN'
    },
    {
      kategori: 'SOSIAL',
      judul: 'Aksi Peduli Lingkungan',
      waktu: '[Waktu]',
      lokasi: '[Lokasi]',
      tanggal: '00',
      bulan: 'BLN'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#FDF8F5]">
      
    
      <div className="hidden md:flex">
        {/* Sidebar Kiri */}
        <SidebarDesktop />

        {/* Konten Sisi Kanan Desktop */}
        <div className="flex-1 ml-64 p-10 flex flex-col font-sans">
          
          {/* TOP BAR: Judul & Search Input */}
          <div className="flex items-center justify-between gap-6 mb-8">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Agenda</h1>
              <p className="text-xs text-slate-500 mt-0.5">Kegiatan perkaderan dan organisasi</p>
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

          {/* FILTER KATEGORI (Pil Bulat) */}
          <div className="flex gap-2 mb-8">
            <button className="px-5 py-1.5 bg-[#780b0b] text-white text-xs font-semibold rounded-full shadow-sm">
              Semua
            </button>
            <button className="px-5 py-1.5 bg-white text-slate-600 border border-slate-200 text-xs font-medium rounded-full hover:bg-slate-50">
              Perkaderan
            </button>
            <button className="px-5 py-1.5 bg-white text-slate-600 border border-slate-200 text-xs font-medium rounded-full hover:bg-slate-50">
              Kajian
            </button>
            <button className="px-5 py-1.5 bg-white text-slate-600 border border-slate-200 text-xs font-medium rounded-full hover:bg-slate-50">
              Sosial
            </button>
          </div>

          {/* DAFTAR LIST AGENDA DESKTOP (Tata Letak Menyamping Sebaris) */}
          <div className="space-y-4">
            {daftarAgenda.map((agenda, index) => (
              <div 
                key={index} 
                className="bg-white border border-slate-100 rounded-2xl p-4 flex items-center justify-between shadow-sm hover:shadow-md transition-all"
              >
                {/* Sisi Kiri: Tanggal & Teks */}
                <div className="flex items-center gap-4">
                  {/* Kotak Tanggal */}
                  <div className="w-14 h-14 bg-[#780b0b] text-white flex flex-col items-center justify-center rounded-xl flex-shrink-0 shadow-sm">
                    <span className="text-base font-bold leading-tight">{agenda.tanggal}</span>
                    <span className="text-[9px] font-bold tracking-wider text-amber-400 uppercase leading-none">{agenda.bulan}</span>
                  </div>

                  {/* Detail Judul */}
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold text-[#780b0b] tracking-wider uppercase block">
                      {agenda.kategori}
                    </span>
                    <h3 className="text-sm font-bold text-slate-800 leading-snug">
                      {agenda.judul}
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      {agenda.waktu} • {agenda.lokasi}
                    </p>
                  </div>
                </div>

                {/* Sisi Kanan: Tombol Daftar */}
                <div>
                  <button className="px-6 py-2 border border-[#780b0b] text-[#780b0b] hover:bg-slate-50 transition-all text-xs font-bold rounded-xl shadow-sm">
                    Daftar
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>

     
      <div className="block md:hidden min-h-screen bg-[#FDF8F5] text-slate-800 flex flex-col font-sans max-w-md mx-auto shadow-2xl relative pb-24">
        
        {/* Header Mobile */}
        <header className="px-6 pt-8 pb-4">
          <h1 className="text-2xl font-bold text-slate-900">Agenda</h1>
          <p className="text-xs text-slate-500 mt-0.5">Kegiatan perkaderan dan organisasi</p>
        </header>

        {/* Konten Utama Mobile */}
        <main className="flex-1 px-6 flex flex-col gap-5">
          
          {/* Filter Kategori Mobile */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            <button className="px-4 py-1.5 bg-[#801D24] text-white text-xs font-semibold rounded-full shadow-sm whitespace-nowrap">
              Semua
            </button>
            <button className="px-4 py-1.5 bg-white text-slate-600 border border-slate-200 text-xs font-medium rounded-full hover:bg-slate-50 whitespace-nowrap">
              Perkaderan
            </button>
            <button className="px-4 py-1.5 bg-white text-slate-600 border border-slate-200 text-xs font-medium rounded-full hover:bg-slate-50 whitespace-nowrap">
              Kajian
            </button>
            <button className="px-4 py-1.5 bg-white text-slate-600 border border-slate-200 text-xs font-medium rounded-full hover:bg-slate-50 whitespace-nowrap">
              Sosial
            </button>
          </div>

          {/* Daftar Kartu Agenda Mobile */}
          <div className="space-y-4">
            {daftarAgenda.map((agenda, index) => (
              <div key={index} className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm space-y-4">
                
                {/* Info Atas Konten Mobile */}
                <div className="flex items-start gap-4">
                  {/* Kotak Tanggal Marun */}
                  <div className="w-14 h-14 bg-[#801D24] text-white flex flex-col items-center justify-center rounded-xl flex-shrink-0 shadow-sm">
                    <span className="text-base font-bold leading-tight">{agenda.tanggal}</span>
                    <span className="text-[9px] font-bold tracking-wider text-amber-400 uppercase leading-none">{agenda.bulan}</span>
                  </div>

                  {/* Detail Teks Mobile */}
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold text-[#801D24] tracking-wider uppercase block">
                      {agenda.kategori}
                    </span>
                    <h3 className="text-sm font-bold text-slate-800 leading-snug">
                      {agenda.judul}
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      {agenda.waktu} • {agenda.lokasi}
                    </p>
                  </div>
                </div>

                {/* Tombol Outline Daftar Mobile */}
                <button className="w-full py-2 border border-[#801D24] text-[#801D24] hover:bg-[#801D24]/5 active:scale-[0.99] transition-all text-xs font-bold rounded-xl tracking-wide">
                  Daftar
                </button>

              </div>
            ))}
          </div>

        </main>
      </div>

    </div>
  );
}