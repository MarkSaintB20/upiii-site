import Link from "next/link";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-headline"
      className="relative bg-gray-950 text-white overflow-hidden"
    >
      {/* Background decorativo — substitua por vídeo/imagem real */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-transparent pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        <div className="max-w-3xl">
          {/* Badge */}
          <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-upiii-orange/20 text-upiii-orange rounded-full">
            Abordagem Híbrida
          </span>

          {/* H1 */}
          <h1
            id="hero-headline"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
          >
            Sua marca presente onde importa —{" "}
            <span className="text-upiii-orange">na rua, na tela e no feed</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl">
            A Upiii combina ações de guerrilha de alto impacto, campanhas digitais
            orientadas a resultado e produção profissional de vídeo em um único
            ecossistema. Mais demanda. Leads melhores. Menos desperdício de verba.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Topo/Meio de funil */}
            <Link
              href="/contato?origem=hero&etapa=diagnostico"
              className="inline-flex items-center justify-center px-6 py-4 rounded-lg bg-upiii-orange text-white font-bold text-base hover:bg-orange-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-upiii-orange focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
            >
              Quero meu diagnóstico gratuito
            </Link>
            {/* Fundo de funil */}
            <Link
              href="/contato?origem=hero&etapa=proposta"
              className="inline-flex items-center justify-center px-6 py-4 rounded-lg border border-white/30 text-white font-semibold text-base hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Pedir proposta comercial
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
