import { createFileRoute } from "@tanstack/react-router";
import {
  Gavel,
  Heart,
  FileText,
  ShoppingCart,
  Building2,
  ShieldCheck,
  Mail,
  MessageCircle,
  Menu,
} from "lucide-react";
import { useState } from "react";
import alanPhoto from "@/assets/alan-tremante.jpeg.asset.json";
import tremanteLogo from "@/assets/tremante-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tremante Advocacia e Assessoria Jurídica" },
      {
        name: "description",
        content:
          "Especialistas em Direito Forense e Consultoria Jurídica. Ética, transparência e excelência para proteger seus direitos.",
      },
      { property: "og:title", content: "Tremante Advocacia e Assessoria Jurídica" },
      {
        property: "og:description",
        content:
          "Especialistas em Direito Forense e Consultoria Jurídica. Ética e precisão na defesa de seus direitos.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

const WHATSAPP_URL = "https://wa.me/5511916400777";
const EMAIL = "advocacia@tremante.adv.br";

function Index() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "#servicos", label: "Serviços" },
    { href: "#sobre", label: "Sobre" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-background/80 border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img
              src={tremanteLogo.url}
              alt="Logotipo Tremante Advocacia"
              className="h-10 w-auto"
            />
            <span className="font-display text-2xl tracking-[0.25em] text-gold">
              TREMANTE
            </span>
            <span className="hidden sm:inline text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
              Advocacia
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm tracking-wide text-foreground/80 hover:text-gold transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="text-xs tracking-[0.2em] uppercase border border-gold text-gold px-5 py-2.5 hover:bg-gold hover:text-primary-foreground transition-colors"
            >
              Consulta
            </a>
          </nav>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gold"
            aria-label="Menu"
          >
            <Menu size={24} />
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-gold/20 bg-background">
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-foreground/80 hover:text-gold"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="top"
        className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden"
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, var(--gold) 0, transparent 40%), radial-gradient(circle at 80% 80%, var(--gold) 0, transparent 40%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 animate-fade-up">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-12 bg-gold" />
              <span className="text-[11px] tracking-[0.35em] uppercase text-gold">
                Excelência Jurídica
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-foreground">
              Especialistas em{" "}
              <span className="text-gold italic">Direito Forense</span> e
              Consultoria Jurídica.
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed text-justify">
              Comprometidos com a excelência e ética para proteger seus
              direitos com clareza e precisão.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 bg-gold text-primary-foreground px-8 py-4 text-sm tracking-[0.25em] uppercase font-medium hover:opacity-90 transition-all"
              >
                Agendar Consulta Jurídica
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#sobre"
                className="text-sm tracking-[0.2em] uppercase text-foreground/70 hover:text-gold transition-colors"
              >
                Conheça o Escritório
              </a>
            </div>
          </div>

          {/* Profile frame + bio */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end gap-8 animate-fade-up">
            <div className="relative w-full max-w-sm aspect-square">
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t border-l border-gold z-10" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b border-r border-gold z-10" />
              <div className="w-full h-full border border-gold/60 bg-navy-deep/40 overflow-hidden">
                <img
                  src={alanPhoto.url}
                  alt="Dr. Alan Kardec Tremante"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>
            </div>
            <div className="w-full max-w-md text-left">
              <h3 className="font-display text-2xl text-gold mb-4">
                Dr. Alan Kardec Tremante
              </h3>
              <div className="gold-divider w-16 mb-5" />
              <div className="space-y-4 text-[15px] text-muted-foreground leading-relaxed text-justify">
                <p>
                  Advogado inscrito nos quadros da Ordem dos Advogados do Brasil, fundador do escritório Tremante Advocacia e Assessoria Jurídica. Com sólida formação técnica e atuação especializada em Direito Forense e Consultoria Estratégica, dedica-se à defesa intransigente dos direitos e interesses de seus constituintes.
                </p>
                <p>
                  Pautando sua prática profissional nos pilares da ética fundamental, da transparência absoluta e do rigor científico, o Dr. Alan Kardec Tremante consolidou sua trajetória através do desenvolvimento de soluções jurídicas personalizadas de alta performance, aptas a responder com precisão e agilidade tanto a litígios complexos quanto a demandas de natureza preventiva.
                </p>
                <p>
                  Sua filosofia de atuação une o profundo conhecimento doutrinário e jurisprudencial a um atendimento humanizado, garantindo segurança jurídica, clareza processual e excelência técnica em cada etapa da jornada legal de seus clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section id="servicos" className="py-24 lg:py-32 border-t border-gold/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-16">
            <span className="text-[11px] tracking-[0.35em] uppercase text-gold">
              Áreas de Atuação
            </span>
            <h2 className="mt-4 font-display text-3xl lg:text-5xl text-foreground">
              Atuação estratégica em múltiplas frentes do Direito.
            </h2>
            <div className="gold-divider mt-8 w-24" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                Icon: Gavel,
                title: "Direito Penal e Processual Penal",
                text: "Atuação estratégica e verticalizada na defesa das garantias fundamentais e da dignidade da pessoa humana. O escritório oferece representação técnica em inquéritos policiais, procedimentos investigatórios criminais (PIC) e ações penais em todas as instâncias judiciais, incluindo os Tribunais Superiores. Com foco na análise minuciosa de provas, legalidade estrita dos atos processuais e impetração de remédios constitucionais, garantimos uma defesa combativa e de excelência tanto na seara do direito penal clássico quanto no direito penal econômico.",
              },
              {
                Icon: Heart,
                title: "Direito de Família e Sucessões",
                text: "Condução técnica de demandas de alta complexidade emocional e patrimonial, pautada pelo sigilo absoluto e pelo acolhimento humanizado. Especialização em divórcios judiciais e extrajudiciais, partilha complexa de bens, fixação e revisão de alimentos sob o binômio necessidade-possibilidade, além de disputas envolvendo a guarda e convivência familiar. No âmbito sucessório, atuamos com precisão na abertura de inventários, arrolamentos e na estruturação de planejamento sucessório, visando a preservação do patrimônio e a mitigação de litígios familiares.",
              },
              {
                Icon: ShoppingCart,
                title: "Direito do Consumidor",
                text: "Defesa intransigente do equilíbrio nas relações de consumo, com forte atuação contra o abuso do poder econômico e práticas comerciais desleais. Especializado na tutela de direitos individuais e homogêneos, o escritório combate falhas graves na prestação de serviços (notadamente nos setores bancário, de telecomunicações e de saúde suplementar) e vícios de produtos. Atuação focada na reparação integral de danos materiais e morais, inversão do ônus da prova e aplicação rigorosa das normas protetivas do Código de Defesa do Consumidor.",
              },
              {
                Icon: FileText,
                title: "Teoria Geral dos Contratos e Obrigações",
                text: "Engenharia jurídica aplicada à elaboração, análise e revisão de instrumentos contratuais civis, imobiliários e mercantis. Nosso foco consiste na precisa alocação de riscos, estabelecimento de cláusulas penais equilibradas, garantias eficientes e mecanismos claros de resolução de conflitos. Através de uma redação técnica e assertiva, asseguramos que o negócio jurídico possua plena validade, eficácia e esteja blindado contra futuras alegações de nulidade, imprevisão ou quebra da boa-fé objetiva.",
              },
              {
                Icon: Building2,
                title: "Direito Civil e Responsabilidade Civil",
                text: "Soluções jurídicas abrangentes na esfera das relações privadas, com ênfase na defesa da propriedade, posse, contratos e direitos de personalidade. Destaca-se nossa atuação em sede de Responsabilidade Civil, pleiteando ou contestando indenizações decorrentes de atos ilícitos que gerem danos morais, estéticos, materiais ou lucros cessantes. Atuamos de forma analítica na jurisprudência pátria para quantificar e fundamentar as demandas com o rigor técnico exigido pelos tribunais contemporâneos.",
              },
              {
                Icon: ShieldCheck,
                title: "Assessoria Jurídica Preventiva e Consultiva",
                text: "Consultoria de vanguarda focada no gerenciamento de riscos e na advocacia proativa. Através de auditorias jurídicas, pareceres fundamentados e análises prévias de cenários negociais, identificamos vulnerabilidades antes que elas se transformem em passivos judiciais onerosos. Esta modalidade de atuação proporciona aos nossos clientes segurança jurídica absoluta para a tomada de decisões estratégicas, economia de recursos e a garantia de que seus atos estejam em estrita conformidade com o ordenamento jurídico vigente.",
              },
            ].map(({ Icon, title, text }) => (
              <article
                key={title}
                className="group relative p-10 border border-gold/20 bg-card/40 hover:border-gold/60 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-14 h-14 border border-gold/50 flex items-center justify-center mb-8 group-hover:border-gold transition-colors">
                  <Icon
                    size={26}
                    strokeWidth={1.2}
                    className="text-gold"
                  />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-4">
                  {title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-[15px] text-justify">
                  {text}
                </p>
                <div className="mt-8 h-px w-10 bg-gold/60 group-hover:w-20 transition-all duration-500" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-16 lg:py-20 border-y border-gold/30 bg-navy-deep">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <p className="font-display text-2xl lg:text-3xl text-foreground leading-snug">
            Precisa de uma avaliação para o seu caso? Agende uma consulta e obtenha uma análise{" "}
            <span className="italic text-gold">técnica, sigilosa e especializada</span>{" "}
            para proteger seus direitos.
          </p>
          <div className="mt-10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-gold text-primary-foreground px-10 py-4 text-sm tracking-[0.25em] uppercase font-medium hover:opacity-90 transition-all"
            >
              Iniciar Agendamento
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-24 lg:py-32 bg-navy-deep/60">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <span className="text-[11px] tracking-[0.35em] uppercase text-gold">
            Sobre Nós
          </span>
          <h2 className="mt-6 font-display text-3xl lg:text-5xl text-foreground leading-tight">
            Uma atuação diária pautada em{" "}
            <span className="italic text-gold">ética</span> e{" "}
            <span className="italic text-gold">excelência</span>.
          </h2>
          <div className="gold-divider mt-10 mx-auto w-32" />
          <p className="mt-10 text-lg text-muted-foreground leading-[1.9] max-w-3xl mx-auto text-justify">
            O Escritório Tremante Advocacia e Assessoria Jurídica atua
            diariamente em Direito Forense, construindo uma reputação sólida
            sobre os pilares da transparência, dedicação e promoção da
            justiça. Tratamos cada caso com a profundidade que ele merece,
            unindo técnica apurada, sensibilidade humana e compromisso
            absoluto com os interesses de nossos clientes.
          </p>
          <p className="mt-6 text-base text-muted-foreground/80 leading-relaxed max-w-2xl mx-auto italic">
            Defender direitos é mais do que uma profissão — é um dever ético
            que conduzimos com responsabilidade e respeito.
          </p>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[0.35em] uppercase text-gold">
              Contato
            </span>
            <h2 className="mt-4 font-display text-3xl lg:text-5xl text-foreground">
              Agende sua Consulta
            </h2>
            <div className="gold-divider mt-6 mx-auto w-24" />
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto leading-relaxed text-justify">
              Os atendimentos são realizados de forma personalizada, presencial ou online, mediante agendamento prévio. Escolha o canal de sua preferência abaixo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href={`mailto:${EMAIL}`}
              className="group flex items-center gap-6 p-8 border border-gold/30 hover:border-gold bg-card/40 transition-all"
            >
              <div className="w-14 h-14 border border-gold/50 flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors">
                <Mail size={22} strokeWidth={1.3} className="text-gold" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-1">
                  E-mail
                </div>
                <div className="font-display text-xl text-foreground truncate group-hover:text-gold transition-colors">
                  {EMAIL}
                </div>
              </div>
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-6 p-8 border border-gold/30 hover:border-gold bg-card/40 transition-all"
            >
              <div className="w-14 h-14 border border-gold/50 flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors">
                <MessageCircle size={22} strokeWidth={1.3} className="text-gold" />
              </div>
              <div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-1">
                  WhatsApp
                </div>
                <div className="font-display text-xl text-foreground group-hover:text-gold transition-colors">
                  (11) 91640-0777
                </div>
              </div>
            </a>
          </div>

          <div className="mt-20 flex flex-col items-center gap-4">
            <img
              src={tremanteLogo.url}
              alt="Logotipo Tremante Advocacia"
              className="h-20 w-auto opacity-90"
            />
            <div className="gold-divider w-16" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gold/20 py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-lg tracking-[0.25em] text-gold">
            TREMANTE
          </span>
          <p className="text-xs text-muted-foreground tracking-wider">
            © {new Date().getFullYear()} Tremante Advocacia e Assessoria Jurídica.
            Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Conversar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg animate-pulse-ring hover:scale-105 transition-transform"
      >
        <svg viewBox="0 0 32 32" className="w-7 h-7" fill="currentColor" aria-hidden>
          <path d="M19.11 17.21c-.29-.15-1.7-.84-1.96-.93-.26-.1-.46-.15-.65.15s-.74.93-.91 1.12c-.17.19-.34.22-.62.07-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.43-1.71-1.6-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.57-.89-2.15-.23-.56-.47-.49-.65-.5l-.55-.01c-.19 0-.5.07-.77.36-.26.29-1 .98-1 2.39 0 1.41 1.03 2.78 1.17 2.97.15.19 2.02 3.08 4.89 4.32.68.29 1.22.47 1.63.6.68.22 1.31.19 1.8.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34zM16.02 5.33c-5.9 0-10.7 4.8-10.7 10.7 0 1.88.49 3.72 1.43 5.33L5 27l5.79-1.69a10.65 10.65 0 0 0 5.22 1.34h.01c5.9 0 10.7-4.8 10.7-10.7 0-2.86-1.11-5.55-3.14-7.57a10.62 10.62 0 0 0-7.56-3.05zm0 19.62h-.01a8.9 8.9 0 0 1-4.53-1.24l-.32-.19-3.44 1 .92-3.35-.21-.34a8.88 8.88 0 0 1-1.36-4.74c0-4.91 4-8.91 8.92-8.91 2.38 0 4.62.93 6.3 2.62a8.86 8.86 0 0 1 2.61 6.3c0 4.92-4 8.92-8.92 8.92z" />
        </svg>
      </a>
    </div>
  );
}
