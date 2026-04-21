export function SocialProof() {
  return (
    <section id="depoimentos" className="py-20 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-12">O que dizem nossos clientes</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <p className="text-lg italic text-gray-300 mb-6">
              "A Upiii mudou completamente nossa presença digital. A integração de vídeo com tráfego pago multiplicou nossos leads B2B em 3 meses."
            </p>
            <div>
              <p className="font-bold text-white">— Cliente Anônimo</p>
              <p className="text-sm text-upiii-orange">Diretor de Marketing, Tech Corp</p>
            </div>
          </div>
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <p className="text-lg italic text-gray-300 mb-6">
              "Eles entregam o que prometem. Sem enrolação, sem métrica de vaidade. Resultado real."
            </p>
            <div>
              <p className="font-bold text-white">— Cliente Anônimo</p>
              <p className="text-sm text-upiii-orange">CEO, VarejoX</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
