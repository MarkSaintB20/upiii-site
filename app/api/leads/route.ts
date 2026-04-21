import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const LeadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  segment: z.string().optional(),
  approximateRevenue: z.string().optional(),
  mainChallenge: z.string().optional(),
  servicesInterest: z.array(z.string()).default([]),
  preferredTime: z.string().optional(),
  funnelStage: z.enum(["TOP", "MID", "BOTTOM"]).default("TOP"),
  originPage: z.string().optional(),
  originCta: z.string().optional(),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = LeadSchema.parse(body);

    const lead = await prisma.lead.create({ data });

    return NextResponse.json({ success: true, id: lead.id }, { status: 201 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ errors: err.errors }, { status: 422 });
    }
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const status = searchParams.get("status");
  const stage = searchParams.get("stage");

  const leads = await prisma.lead.findMany({
    // @ts-ignore
    where: {
      ...(status && { status: status as any }),
      ...(stage && { funnelStage: stage as any }),
    },
    orderBy: { createdAt: "desc" },
    take: 100,
  });

  return NextResponse.json(leads);
}
