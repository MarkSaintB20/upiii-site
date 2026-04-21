import { prisma } from "./lib/prisma";

async function main() {
  const categories = await prisma.serviceCategory.findMany();
  console.log("Categories:", categories.length);
}
main().catch(console.error).finally(() => prisma.$disconnect());
