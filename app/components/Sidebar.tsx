import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#780b0b] text-white min-h-screen p-6 flex flex-col justify-between hidden md:flex fixed left-0 top-0">
      <div>
        {/* LOGO & NAMA KOMISARIAT */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#780b0b] font-bold">
            IMM
          </div>
          <div>
            <h2 className="text-sm font-bold tracking-wide">LOGO IMM</h2>
            <p className="text-xs text-slate-300">[Nama Komisariat]</p>
          </div>
        </div>

        {/* MENU NAVIGASI */}
        <nav className="flex flex-col gap-2">
          <Link href="/beranda" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/10 font-medium hover:bg-white/20 transition">
            <span>🏠</span> Beranda
          </Link>
          <Link href="/agenda" className="flex items-center gap-3 px-4 py-3 rounded-lg font-medium hover:bg-white/10 transition">
            <span>📅</span> Agenda
          </Link>
          <Link href="/kader" className="flex items-center gap-3 px-4 py-3 rounded-lg font-medium hover:bg-white/10 transition">
            <span>👥</span> Kader
          </Link>
          <Link href="/iuran" className="flex items-center gap-3 px-4 py-3 rounded-lg font-medium hover:bg-white/10 transition">
            <span>💳</span> Iuran
          </Link>
          <Link href="/dokumen" className="flex items-center gap-3 px-4 py-3 rounded-lg font-medium hover:bg-white/10 transition">
            <span>📄</span> Dokumen
          </Link>
          <Link href="/profil" className="flex items-center gap-3 px-4 py-3 rounded-lg font-medium hover:bg-white/10 transition">
            <span>👤</span> Profil
          </Link>
        </nav>
      </div>
    </aside>
  );
}