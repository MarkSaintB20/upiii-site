import { prisma } from "../lib/prisma";

async function main() {
  const categories = [
    { name: "Vídeo", slug: "video", order: 1 },
    { name: "Design Digital", slug: "design-digital", order: 2 },
    { name: "Copy", slug: "copy", order: 3 },
    { name: "Gestão de Tráfego", slug: "gestao-de-trafego", order: 4 },
    { name: "Desenvolvimento", slug: "desenvolvimento", order: 5 },
    { name: "SEO", slug: "seo", order: 6 },
    { name: "Diária de Gravação", slug: "diaria-de-gravacao", order: 7 },
    { name: "Curadoria e Engenharia Reversa", slug: "curadoria-e-engenharia-reversa", order: 8 },
    { name: "Linha Editorial", slug: "linha-editorial", order: 9 },
    { name: "Mentoria", slug: "mentoria", order: 10 },
    { name: "Central de Atendimento", slug: "central-de-atendimento", order: 11 },
    { name: "Treinamento de Equipe", slug: "treinamento-de-equipe", order: 12 },
    { name: "Gestão de Redes Sociais", slug: "gestao-de-redes-sociais", order: 13 },
    { name: "Gestão de Eventos", slug: "gestao-de-eventos", order: 14 },
  ];

  for (const cat of categories) {
    await prisma.serviceCategory.upsert({
      where: { slug: cat.slug },
      update: {},
      create: { ...cat, isActive: true },
    });
  }

  console.log("✅ Seed concluído: 14 categorias de serviço criadas.");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
