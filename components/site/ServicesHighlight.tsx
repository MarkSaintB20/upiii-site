import Link from "next/link";
import { ServiceCategory } from "@prisma/client";

export function ServicesHighlight({ categories }: { categories: ServiceCategory[] }) {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Serviços em Destaque
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/servicos/${category.slug}`}
              className="group block p-6 bg-white rounded-xl border border-gray-200 hover:border-upiii-orange hover:shadow-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-upiii-orange"
            >
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-upiii-orange transition-colors">
                {category.name}
              </h3>
              {category.description && (
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                  {category.description}
                </p>
              )}
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/servicos"
            className="inline-flex items-center text-upiii-orange font-semibold hover:text-orange-600 transition-colors"
          >
            Ver todos os serviços &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
