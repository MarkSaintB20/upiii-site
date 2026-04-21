import { prisma } from "@/lib/prisma";
import { ServicesHighlight } from "@/components/site/ServicesHighlight";

export const metadata = {
  title: "Serviços de Marketing Híbrido",
  description: "Conheça os 14 serviços da Agência Upiii: vídeo profissional, SEO, tráfego pago, design digital, copy, gestão de eventos e muito mais.",
  alternates: { canonical: "https://upiiiagencia.com.br/servicos" },
};

export default async function ServicesPage() {
  const categories = await prisma.serviceCategory.findMany({
    where: { isActive: true },
    orderBy: { order: "asc" },
  });

  return (
    <main>
      <section className="py-20 bg-gray-950 text-white px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Nossos Serviços</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Um ecossistema completo para acelerar a geração de demanda e posicionar sua marca.
        </p>
      </section>
      <ServicesHighlight categories={categories} />
    </main>
  );
}
