import { DeliverableGroup, DeliverableItem } from "@prisma/client";

interface Props {
  groups: (DeliverableGroup & { items: DeliverableItem[] })[];
}

export function DeliverablesList({ groups }: Props) {
  if (groups.length === 0) return null;

  return (
    <section aria-labelledby="deliverables-title" className="mb-16">
      <h2 id="deliverables-title" className="text-2xl font-bold mb-8">O que entregamos</h2>
      <div className="space-y-8">
        {groups.map((group) => (
          <div key={group.id}>
            <h3 className="text-xl font-bold text-upiii-orange border-b border-gray-200 pb-2 mb-4">
              {group.name}
            </h3>
            <ul className="grid sm:grid-cols-2 gap-4">
              {group.items.map((item) => (
                <li key={item.id} className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <span className="block font-semibold text-gray-900 mb-1">{item.name}</span>
                  {item.description && (
                    <p className="text-sm text-gray-600">{item.description}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
