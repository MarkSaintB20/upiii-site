"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

const serviceOptions = [
  { value: "video", label: "Produção de Vídeo" },
  { value: "design-digital", label: "Design Digital" },
  { value: "copy", label: "Copy / Redação" },
  { value: "gestao-de-trafego", label: "Gestão de Tráfego" },
  { value: "desenvolvimento", label: "Desenvolvimento Web" },
  { value: "seo", label: "SEO" },
  { value: "gestao-de-redes-sociais", label: "Gestão de Redes Sociais" },
  { value: "mentoria", label: "Mentoria / Autoridade" },
];

export function ContactForm() {
  const searchParams = useSearchParams();
  const preSelectedService = searchParams.get("servico") ?? "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    segment: "",
    approximateRevenue: "",
    mainChallenge: "",
    servicesInterest: preSelectedService ? [preSelectedService] : [] as string[],
    preferredTime: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleCheckbox = (value: string) => {
    setForm((prev) => ({
      ...prev,
      servicesInterest: prev.servicesInterest.includes(value)
        ? prev.servicesInterest.filter((v) => v !== value)
        : [...prev.servicesInterest, value],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          originPage: window.location.pathname,
          originCta: searchParams.get("origem") ?? "contato-form",
          funnelStage: searchParams.get("etapa") === "proposta" ? "BOTTOM" : "TOP",
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div role="alert" className="text-center py-16">
        <p className="text-2xl font-bold text-gray-900 mb-3">Recebemos seu contato! 🎯</p>
        <p className="text-gray-600">Em até 1 dia útil entraremos em contato para agendar sua conversa estratégica.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
            Nome completo <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-upiii-orange"
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
            E-mail corporativo <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-upiii-orange"
            aria-required="true"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-1">
            Empresa
          </label>
          <input
            id="company"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-upiii-orange"
          />
        </div>
        <div>
          <label htmlFor="segment" className="block text-sm font-semibold text-gray-700 mb-1">
            Segmento de atuação
          </label>
          <input
            id="segment"
            type="text"
            placeholder="Ex.: Saúde, Educação, Varejo..."
            value={form.segment}
            onChange={(e) => setForm({ ...form, segment: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-upiii-orange"
          />
        </div>
      </div>

      <div>
        <label htmlFor="revenue" className="block text-sm font-semibold text-gray-700 mb-1">
          Faturamento anual aproximado
        </label>
        <select
          id="revenue"
          value={form.approximateRevenue}
          onChange={(e) => setForm({ ...form, approximateRevenue: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-upiii-orange bg-white"
        >
          <option value="">Prefiro não informar</option>
          <option value="ate-500k">Até R$ 500 mil</option>
          <option value="500k-2m">R$ 500 mil – R$ 2 milhões</option>
          <option value="2m-10m">R$ 2 milhões – R$ 10 milhões</option>
          <option value="acima-10m">Acima de R$ 10 milhões</option>
        </select>
      </div>

      <div>
        <fieldset>
          <legend className="block text-sm font-semibold text-gray-700 mb-3">
            Quais serviços te interessam?
          </legend>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {serviceOptions.map((opt) => (
              <label
                key={opt.value}
                className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-colors ${
                  form.servicesInterest.includes(opt.value)
                    ? "border-upiii-orange bg-orange-50 text-upiii-orange"
                    : "border-gray-200 text-gray-600 hover:border-gray-300"
                }`}
              >
                <input
                  type="checkbox"
                  className="sr-only"
                  value={opt.value}
                  checked={form.servicesInterest.includes(opt.value)}
                  onChange={() => handleCheckbox(opt.value)}
                />
                <span className="text-sm font-medium">{opt.label}</span>
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <div>
        <label htmlFor="challenge" className="block text-sm font-semibold text-gray-700 mb-1">
          Qual é o seu maior desafio de marketing hoje?
        </label>
        <textarea
          id="challenge"
          rows={4}
          value={form.mainChallenge}
          onChange={(e) => setForm({ ...form, mainChallenge: e.target.value })}
          placeholder="Descreva brevemente o contexto e o que você precisa resolver..."
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-upiii-orange resize-none"
        />
      </div>

      <div>
        <label htmlFor="preferredTime" className="block text-sm font-semibold text-gray-700 mb-1">
          Melhor horário para uma call
        </label>
        <input
          id="preferredTime"
          type="text"
          placeholder="Ex.: Terças e quintas, das 10h às 12h"
          value={form.preferredTime}
          onChange={(e) => setForm({ ...form, preferredTime: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-upiii-orange"
        />
        <p className="text-xs text-gray-500 mt-1">
          Enviaremos o link da reunião por e-mail após confirmar a disponibilidade.
        </p>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 rounded-lg bg-upiii-orange text-white font-bold text-base hover:bg-orange-600 transition-colors disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-upiii-orange focus-visible:ring-offset-2"
        aria-busy={status === "loading"}
      >
        {status === "loading" ? "Enviando..." : "Solicitar diagnóstico gratuito →"}
      </button>
    </form>
  );
}
