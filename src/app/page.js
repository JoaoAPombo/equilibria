'use client'
import { useState, useRef } from "react";
import Image from "next/image";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const services = [
	{
		title: "Quem Somos Nós",
		description:
			"A Equilibria é uma clínica de psicologia dedicada a promover o bem-estar emocional através de abordagens terapêuticas inovadoras. Nossa equipe de profissionais altamente qualificados está comprometida em ajudar indivíduos, famílias e casais a superarem desafios e fortalecerem seus vínculos emocionais.",
	},
	{
		title: "Nossa visão",
		description:
			"Promover o equilíbrio emocional e fortalecer os laços familiares, grupais e conjugais, tornando a psicoterapia acessível a todos, para construir comunidades mais saudáveis e relacionamentos mais sólidos.",
	},
	{
		title: "Nossa missão",
		description:
			"Atuamos comprometidos em oferecer suporte psicológico de alta qualidade, valorizando a singularidade de cada indivíduo e relacionamento. Buscamos facilitar o acesso à psicoterapia, tornando-a uma ferramenta acessível para o desenvolvimento humano e o aprimoramento das relações.",
	},
];

const professionals = [
  {
    name: "Dra. Jéssica Pires",
    specialty: "Psicóloga Clínica",
    description1:
      "Psicóloga clínica pela abordagem analítica-junguiana, com pós-graduação em psicologia clínica e psicologia da infância e adolescência.",
    description2:
      "Atendimento de crianças, adolescentes e adultos com enfoque em luto, relações abusivas e processos de induviduação",
    image: "/imgs/fotoJes.jpg",
  },
  {
    name: "Dra. Sabrina Reichardt",
    specialty: "Psicóloga Clínica",
    description1:
      "Psicóloga clínica pela abordagem terapia cognitivo-comportamental, com pós-graduação em testagens psicológicas.",
    description2:
      "Atendimento de crianças, adolescentes, adultos e idosos, com foco em testagens neuropsicológicas e neuroatipicidades (TDAH), conflitos da infância e adolescência e dependência química.",
    image: "/imgs/fotoSa.jpg",
  },
  {
    name: "Dra. Maria Eduarda",
    specialty: "Psicóloga",
    description1: "a.",
    description2: "b.",
    image: "/imgs/fotoMadu.jpg",
  },
  {
    name: "Dra. Brenda Vieira",
    specialty: "Psicóloga Clinica",
    description1:
      "Psicóloga clínica pela abordagem analítica-junguiana, com pós-graduação em Psicologia Analítica Junguiana e Psicologia em Educação",
    description2:
      "Atendimento de adultos e idosos com foco em relacionamentos amorosos, relações familiares, análise de sonhos, autoconhecimento, autoestima, processos de transição pessoal, ansiedade, TEA I, sexualidade.",
    image: "/imgs/fotoBrenda.jpg",
  },
];

const faqs = [
  {
    question: "Como funcionam os atendimentos?",
    answer:
      "A sessão geralmente começa com a discussão de questões que o cliente deseja abordar, podendo ser ansiedade, depressão, conflitos interpessoais, entre outros. O psicólogo utiliza diferentes abordagens terapêuticas para explorar pensamentos, emoções e comportamentos, promovendo autoconhecimento e reflexão. Ao longo das sessões, o psicólogo fornece suporte, orientação e ferramentas para enfrentar desafios, promovendo a saúde mental e o bem-estar emocional do cliente. O número de sessões e a frequência variam de acordo com a complexidade do caso e os objetivos terapêuticos estabelecidos.",
  },
  {
    question: "Quais são as especialidades da clínica?",
    answer:
      "Relacionamentos familiares e conjugais, neuroatipicidades e testagens psicológicas, questões da infância e adolescência e processos de individuação.",
  },
  {
    question: "O atendimento é presencial ou online?",
    answer:
      "Oferecemos apenas atendimentos online pela plataforma google meet.",
  },
  {
    question: "Quais são os horários de atendimento?",
    answer:
      "Funcionamos de segunda a sexta de 10h00 às 22h00 e sábados de 10h00 ás 13h00 (Consulte nossa agenda).",
  },
  {
    question: "Quais planos de saúde são aceitos?",
    answer:
      "Não aceitamos plano de saúde, mas os planos oferecem reembolso para atendimentos particulares (Entre em contato conosco para mais informações).",
  },
];

function FaqAccordion() {
  const [open, setOpen] = useState(null);

  return (
    <div className="w-full max-w-2xl mx-auto">
      {faqs.map((faq, idx) => (
        <div key={idx} className="border-b last:border-b-0">
          <button
            type="button"
            onClick={() => setOpen(open === idx ? null : idx)}
            className={`w-full flex justify-between items-center py-4 px-2 text-lg font-medium transition-all duration-200
              ${open === idx ? "text-equilibriaGreen2" : "text-gray-900"}
              hover:scale-[1.03] hover:text-equilibriaGreen2 focus:outline-none`}
            style={{ background: "none" }}
          >
            <span>{faq.question}</span>
            <svg
              className={`w-5 h-5 ml-2 transition-transform duration-200 ${open === idx ? "rotate-180 text-equilibriaGreen2" : "text-gray-400"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
            </svg>
          </button>
          <div
            className={`overflow-auto transition-all duration-300 px-2 ${
              open === idx ? "max-h-40 py-2 opacity-100" : "max-h-0 opacity-0"
            }`}
            aria-expanded={open === idx}
          >
            <div className="text-gray-700 text-md">{faq.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
	const [current, setCurrent] = useState(0);

	const handlePrev = () =>
		setCurrent((prev) => (prev === 0 ? professionals.length - 1 : prev - 1));
	const handleNext = () =>
		setCurrent((prev) => (prev === professionals.length - 1 ? 0 : prev + 1));

  // State for copy popup and its position
  const [copyMsg, setCopyMsg] = useState("");
  const [popupPos, setPopupPos] = useState({ top: 0, left: 0 });
  const popupTimeout = useRef();

  // Copy handler with position
  const handleCopy = (text, event) => {
    event.preventDefault();
    navigator.clipboard.writeText(text);
    const rect = event.target.getBoundingClientRect();
    setPopupPos({
      top: rect.top + window.scrollY - 40,
      left: rect.left + window.scrollX,
    });
    setCopyMsg("Copiado para área de transferencia");
    clearTimeout(popupTimeout.current);
    popupTimeout.current = setTimeout(() => setCopyMsg(""), 3000);
  };

	// Exemplo de posts com descrição
	const instagramPosts = [
		{
			src: "https://www.instagram.com/p/DIg8VTSANyG/embed",
			title: "Instagram Post 1",
			description: "A psicóloga @dranahydamico em um podcast falou sobre a importância da identificação do relacionamento abusivo e seus fatores.",
		},
		{
			src: "https://www.instagram.com/p/DIg8My1A6eI/embed",
			title: "Instagram Post 2",
			description: "Amor de verdade não controla. Amor de verdade acolhe.",
		},
    {
			src: "https://www.instagram.com/p/DIeaf1uAUXd/embed",
			title: "Instagram Post 3",
			description: "Você pode receber. Você merece ser cuidado. Você não precisa ser útil pra ser amado.",
		},
	];

	return (
    <main className="scroll-pt-12 ">
      {/* Hero Section with background image */}
      <section className="min-h-screen flex items-center relative">
        <div className="absolute inset-0 bg-[url(/imgs/bgV.png)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Uma Clínica Sobre Relações Humanas
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Cuidamos da sua saúde mental com uma equipe especializada e
              atendimento personalizado
            </p>
            <a
              href="https://wa.me/554198245072?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta."
              className="bg-equilibriaGreen rounded-2xl text-black px-8 py-3 font-semibold hover:bg-emerald-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agende uma Consulta
            </a>
          </div>
        </div>
      </section>

      <section className="py-30 bg-white" id="sobre">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-semibold text-center mb-12">
            Sobre nós
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-gray-100 hover:shadow-lg hover:scale-105 transition-shadow bg-equilibriaGreen"
              >
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 font-semibold">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="profissionais" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Nossa Equipe
          </h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 max-w-4xl mx-auto">
            <div className="w-full md:w-1/2 flex flex-col items-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-gray-200 shadow">
                <Image
                  src={professionals[current].image}
                  alt={professionals[current].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center justify-center gap-8 mt-6">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
                  aria-label="Anterior"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
                  aria-label="Próximo"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex items-center justify-center gap-2 mt-4">
                {professionals.map((_, idx) => (
                  <span
                    key={idx}
                    className={`transition-all duration-300 rounded-full ${
                      idx === current
                        ? "w-8 h-1 bg-equilibriaGreen2"
                        : "w-4 h-1 bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
              <h3 className="text-2xl font-bold mb-2">
                {professionals[current].name}
              </h3>
              <p className="text-equilibriaGreen2 font-semibold mb-2">
                {professionals[current].specialty}
              </p>
              <p className="text-gray-800 font-semibold mb-4">
                {professionals[current].description1}
              </p>
              <p className="text-gray-700 font-semibold mb-4">
                {professionals[current].description2}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="duvidas" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Dúvidas Frequentes
          </h2>
          <FaqAccordion />
        </div>
      </section>
      <section id="redes" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Nossas Redes Sociais
          </h2>
          <p className="text-center text-lg text-gray-700 mb-8 font-semibold">
            Posts mais recentes
          </p>
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
            {instagramPosts.map((post, idx) => (
              <div
                key={idx}
                className="flex flex-col bg-white rounded-2xl shadow-xl border border-gray-100 max-w-xs mx-auto transition-transform hover:scale-105"
              >
                <div className="overflow-hidden rounded-t-2xl">
                  <iframe
                    src={post.src}
                    width="100%"
                    height="430"
                    frameBorder="0"
                    scrolling="no"
                    allow="encrypted-media"
                    className="w-full h-[430px] bg-white"
                    title={post.title}
                    style={{ minWidth: 250, maxWidth: 350 }}
                  ></iframe>
                </div>
                <div className="flex-1 flex flex-col justify-center bg-gray-50 px-4 py-4 rounded-b-2xl">
                  <p className="text-base text-gray-700 text-center font-medium">
                    {post.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-6 mt-12">
            <a
              href="https://www.instagram.com/equilibriapsicologia/l"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-tr from-pink-500 via-red-400 to-yellow-400 text-white font-semibold shadow hover:scale-105 transition-transform"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <rect width="24" height="24" rx="6" fill="url(#ig-gradient)" />
                <defs>
                  <linearGradient
                    id="ig-gradient"
                    x1="0"
                    y1="0"
                    x2="24"
                    y2="24"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F58529" />
                    <stop offset="0.5" stopColor="#DD2A7B" />
                    <stop offset="1" stopColor="#515BD4" />
                  </linearGradient>
                </defs>
                <path
                  d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2Zm0 7.8A3 3 0 1 1 12 9a3 3 0 0 1 0 6Zm5.25-8.1a1.05 1.05 0 1 1-2.1 0 1.05 1.05 0 0 1 2.1 0Z"
                  fill="#fff"
                />
              </svg>
              Siga-nos no Instagram
            </a>
          </div>
        </div>
      </section>
      {/* Footer/Contato Section */}
      <footer
        id="contato"
        className="bg-equilibriaGreen2 text-white py-12 mt-20 relative"
      >
        <div className="container mx-auto px-4 max-w-4xl flex flex-col md:flex-row gap-12 justify-between items-start">
          <div className="mb-8 md:mb-0 flex-1">
            <h2 className="text-2xl font-bold mb-4">Contato</h2>
            <p className="mb-4">
              A Equilibria está pronta para te ajudar a encontrar o equilíbrio
              emocional e fortalecer seus relacionamentos. Entre em contato
              conosco para agendar uma consulta ou tirar suas dúvidas.
            </p>
            <div className="space-y-2 text-base">
              <div>
                <span className="font-semibold">WhatsApp:</span>{" "}
                <a
                  href="https://wa.me/554198245072"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-black transition-colors cursor-pointer"
                  onClick={(e) => handleCopy("+55 41 98245-072", e)}
                >
                  +55 41 98245-072
                </a>
              </div>
              <div>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:contato@equilibria.com"
                  className="underline hover:text-black transition-colors cursor-pointer"
                  onClick={(e) => handleCopy("contato@equilibria.com", e)}
                >
                  contato@equilibria.com
                </a>
              </div>
              <div>
                <span className="font-semibold">Endereço:</span> Rua Exemplo,
                123 - Curitiba/PR
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-4">
              Horário de Atendimento
            </h3>
            <p className="mb-2">Segunda a Sexta: 08h às 18h</p>
            <p className="mb-2">Sábado: 08h às 12h</p>
            <p className="mb-2">Domingos e feriados: fechado</p>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <h4 className="text-xl font-semibold mb-4">Links Importantes</h4>
            <a
              href="https://site.cfp.org.br/wp-content/uploads/2012/07/codigo_etica.pdf."
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 hover:underline transition-colors"
            >
              Código de Ética do Psicólogo
            </a>
            <a
              href="https://site.cfp.org.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 hover:underline transition-colors"
            >
              Conselho Federal de Psicologia
            </a>
            <a
              href="https://atosoficiais.com.br/cfp/resolucao-do-exercicio-profissional-n-9-2024-regulamenta-o-exercicio-profissional-da-psicologia-mediado-por-tecnologias-digitais-da-informacao-e-da-comunicacao-tdics-em-territorio-nacional-e-revoga-as-resolucao-cfp-no-11-de-11-de-maio-de-2018-e-resolucao-cfp-no-04-de-26-de-marco-de-2020?origin=instituicao&q=09/2024"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 hover:underline transition-colors"
            >
              Resolução CFP 09/2024
            </a>
          </div>
        </div>
        <div className="text-center text-xs mt-8 opacity-80">
          &copy; {new Date().getFullYear()} Equilibria. Todos os direitos
          reservados.
        </div>
        {/* Popup */}
        {copyMsg && (
          <div
            className="fixed z-50 bg-black text-white px-4 py-2 rounded-lg shadow-lg text-base animate-fade-in"
            style={{
              top: popupPos.top,
              left: popupPos.left,
              pointerEvents: "none",
            }}
          >
            {copyMsg}
          </div>
        )}
      </footer>
    </main>
  );
}