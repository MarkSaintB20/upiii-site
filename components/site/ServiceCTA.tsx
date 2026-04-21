import Link from "next/link";

export function ServiceCTA({ label, href }: { label: string; href: string }) {
  return (
    <div className="mt-16 text-center bg-gray-50 p-8 md:p-12 rounded-2xl border border-gray-100">
      <h3 className="text-2xl font-bold mb-4">Pronto para dar o próximo passo?</h3>
      <p className="text-gray-600 mb-8 max-w-xl mx-auto">
        Agende uma conversa com nossos especialistas e descubra como podemos acelerar seus resultados.
      </p>
      <Link
        href={href}
        className="inline-flex items-center px-8 py-4 rounded-lg bg-upiii-orange text-white font-bold hover:bg-orange-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-upiii-orange focus-visible:ring-offset-2"
      >
        {label}
      </Link>
    </div>
  );
}
