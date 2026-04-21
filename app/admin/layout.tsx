import Link from "next/link";
import { LayoutDashboard, FolderKanban, Rss, Users } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  // In a real app, this layout would be wrapped in an Auth Guard checking NextAuth session.
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-gray-100">
          <Link href="/admin/dashboard" className="font-bold text-xl text-upiii-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-upiii-orange rounded">
            Upiii Admin
          </Link>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-1">
          <Link href="/admin/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 hover:text-upiii-orange transition-colors">
            <LayoutDashboard size={20} /> Dashboard
          </Link>
          <Link href="/admin/servicos" className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 hover:text-upiii-orange transition-colors">
            <FolderKanban size={20} /> Serviços
          </Link>
          <Link href="/admin/publicacoes" className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 hover:text-upiii-orange transition-colors">
            <Rss size={20} /> Publicações
          </Link>
          <Link href="/admin/leads" className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 hover:text-upiii-orange transition-colors">
            <Users size={20} /> Leads
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col min-h-0 overflow-auto">
        {/* Mobile Header */}
        <header className="md:hidden h-16 bg-white border-b border-gray-200 flex items-center px-4">
           <span className="font-bold text-xl text-upiii-orange">Upiii Admin</span>
        </header>
        <div className="p-6 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
