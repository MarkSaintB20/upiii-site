import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { DeliverablesList } from "@/components/site/DeliverablesList";
import { ServiceCTA } from "@/components/site/ServiceCTA";
import { generateFAQSchema } from "@/lib/schema";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const services = await prisma.service.findMany({
    where: { isActive: true },
    select: { slug: true }
  });
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = await prisma.service.findUnique({
    where: { slug: params.slug },
  });
  if (!service) return {};
  return {
    title: service.metaTitle ?? `${service.name} | Agência Upiii`,
    description: service.metaDescription ?? service.shortDescription,
  };
}



export default async function ServicePage({ params }: Props) {
  const service = await prisma.service.findUnique({
    where: { slug: params.slug, isActive: true },
    include: {
      category: true,
      deliverableGroups: {
        include: { items: { where: { isActive: true }, orderBy: { order: "asc" } } },
        orderBy: { order: "asc" },
      },
      faqs: { orderBy: { order: "asc" } },
    },
  });

  if (!service) notFound();

  const faqSchema = generateFAQSchema(service.faqs);

  return (
    <>
      {/* JSON-LD FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main>
        {/* Breadcrumb */}
        <nav aria-label="Navegação estrutural" className="max-w-7xl mx-auto px-4 py-4 text-sm text-gray-500">
          <ol className="flex gap-2" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a href="/" itemProp="item" className="hover:text-upiii-orange"><span itemProp="name">Home</span></a>
              <meta itemProp="position" content="1" />
            </li>
            <li aria-hidden="true">/</li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a href="/servicos" itemProp="item" className="hover:text-upiii-orange"><span itemProp="name">Serviços</span></a>
              <meta itemProp="position" content="2" />
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name">{service.name}</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </nav>

        {/* Header do serviço */}
        <section aria-labelledby="service-title" className="bg-gray-950 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-upiii-orange text-sm font-semibold uppercase tracking-wide mb-3">
              {service.category.name}
            </p>
            <h1 id="service-title" className="text-4xl md:text-5xl font-extrabold mb-6">
              {service.name}
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl">{service.shortDescription}</p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-16">
          {/* Descrição completa */}
          <section aria-labelledby="desc-title" className="mb-16">
            <h2 id="desc-title" className="text-2xl font-bold mb-6">
              O que é e como funciona
            </h2>
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: service.fullDescription }}
            />
          </section>

          {/* Benefícios */}
          {service.benefits.length > 0 && (
            <section aria-labelledby="benefits-title" className="mb-16">
              <h2 id="benefits-title" className="text-2xl font-bold mb-6">
                Benefícios para o seu negócio
              </h2>
              <ul className="space-y-3">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-upiii-orange/20 text-upiii-orange flex items-center justify-center text-xs font-bold" aria-hidden="true">✓</span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Entregáveis */}
          <DeliverablesList groups={service.deliverableGroups} />

          {/* FAQ */}
          {service.faqs.length > 0 && (
            <section aria-labelledby="faq-title" className="mb-16">
              <h2 id="faq-title" className="text-2xl font-bold mb-8">
                Perguntas frequentes
              </h2>
              <FAQAccordion faqs={service.faqs} />
            </section>
          )}

          {/* CTA */}
          <ServiceCTA
            label={service.ctaLabel ?? "Falar com um especialista"}
            href={service.ctaUrl ?? `/contato?servico=${service.slug}`}
          />
        </div>
      </main>
    </>
  );
}
