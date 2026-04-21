export const dynamic = 'force-dynamic';
import { Metadata } from "next";
import { HeroSection } from "@/components/site/HeroSection";
import { HowWeWorkSection } from "@/components/site/HowWeWorkSection";
import { ServicesHighlight } from "@/components/site/ServicesHighlight";
import { SocialProof } from "@/components/site/SocialProof";
import { CTABanner } from "@/components/site/CTABanner";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Agência Upiii | Marketing Híbrido: Guerrilha, Digital e Vídeo",
  description:
    "Combine guerrilha, marketing digital e produção profissional de vídeo. A Upiii acelera sua geração de demanda e posiciona sua marca onde seu cliente está.",
  openGraph: {
    title: "Agência Upiii | Marketing Híbrido",
    description: "Guerrilha + Digital + Vídeo. Uma agência, um ecossistema.",
    url: "https://upiiiagencia.com.br",
    type: "website",
  },
};

export default async function HomePage() {
  const categories = await prisma.serviceCategory.findMany({
    where: { isActive: true },
    orderBy: { order: "asc" },
    take: 6,
  });

  return (
    <main>
      <HeroSection />
      <HowWeWorkSection />
      <ServicesHighlight categories={categories} />
      <SocialProof />
      <CTABanner
        headline="Pronto para crescer de verdade?"
        subline="Agende uma conversa estratégica de 30 minutos. Sem custo, sem compromisso."
        ctaLabel="Queromeu diagnóstico gratuito"
        ctaHref="/contato"
      />
    </main>
  );
}
