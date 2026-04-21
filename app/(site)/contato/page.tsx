import { ContactForm } from "@/components/site/ContactForm";

export const metadata = {
  title: "Diagnóstico Gratuito | Agência Upiii",
  description: "Preencha o formulário para agendarmos uma conversa estratégica e entendermos o momento do seu negócio.",
};

export default function ContactPage() {
  return (
    <main className="py-20 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Diagnóstico Gratuito</h1>
        <p className="text-gray-600 mb-10">
          Preencha os dados abaixo. Um de nossos especialistas analisará seu perfil e entrará em contato para agendar uma conversa de 30 minutos, sem compromisso.
        </p>
        <ContactForm />
      </div>
    </main>
  );
}
