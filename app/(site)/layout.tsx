import { Header } from "@/components/shared/Header";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12 px-4 border-t border-gray-800 text-sm text-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p>&copy; {new Date().getFullYear()} Agência Upiii. Todos os direitos reservados.</p>
        <div className="flex gap-4">
          <Link href="/sobre" className="hover:text-white transition-colors">Sobre Nós</Link>
          <Link href="/servicos" className="hover:text-white transition-colors">Serviços</Link>
          <Link href="/contato" className="hover:text-white transition-colors">Contato</Link>
        </div>
      </div>
    </footer>
  );
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="flex-1">
        {children}
      </div>
      <Footer />
    </>
  );
}
