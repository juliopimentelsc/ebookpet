import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero-pet.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Guia Não Puxa Mais — Protocolo de 14 dias para o cão parar de puxar a guia" },
      { name: "description", content: "Protocolo de 14 dias para o seu cão andar com a guia frouxa. Passo a passo diário, sem trancos e sem adestrador." },
      { property: "og:title", content: "Guia Não Puxa Mais" },
      { property: "og:description", content: "Seu cão andando ao seu lado com a guia frouxa em 14 dias." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ===== CONFIGURAÇÃO (edite aqui) ===== */
const CHECKOUT_URL = "#comprar"; // TODO: link do checkout
const PRICE_FROM = "R$ 296";
const PRICE_TO = "R$ 37";
const URGENCY: string | null = null; // ex.: "O Bônus 4 só vem junto até [data/hora]."

const MENTOR = {
  name: "[Nome do mentor]",
  bio: "[Formação ou experiência com cães, há quanto tempo atua, e algo pessoal que conecte com o tutor.]",
};

const FAQ_CONTACT = "[Defina o canal: e-mail ou WhatsApp de suporte.]";
const FAQ_ACCESS = "[Defina: vitalício ou prazo.]";
const FAQ_MENTOR_ACCESS = "[Defina: suporte por e-mail/WhatsApp ou não.]";

/* ====================================== */

const steps = [
  { days: "Dias 1 a 3", title: "Atenção", text: "Seu cão aprende a olhar para você antes de sair puxando." },
  { days: "Dias 4 a 10", title: "Guia frouxa", text: "Treino ao seu lado, primeiro em casa, depois na rua." },
  { days: "Dias 11 a 14", title: "Distrações", text: "Mantém a calma perto de cheiros, barulhos e outros cães." },
];

const summary = [
  "Protocolo de 14 Dias em PDF, com a tarefa de cada dia",
  "Vídeos curtos demonstrando cada exercício",
  "Guia dos Primeiros 3 Dias",
  "Treino Expresso de 5 Minutos",
  "Os 7 Erros Que Fazem o Cão Puxar Ainda Mais",
  "App/Planilha de Progresso do Adestramento",
];

const deliverables = [
  { tag: "Entregável 01", title: "Protocolo de 14 Dias (PDF)", text: "A tarefa de cada dia, na ordem certa. Você abre, lê e aplica no passeio do mesmo dia." },
  { tag: "Entregável 02", title: "Vídeos dos exercícios", text: "Vídeos curtos mostrando cada exercício na prática, para você não ficar na dúvida de como fazer." },
  { tag: "Bônus 1", title: "Guia dos Primeiros 3 Dias", q: "Mas eu não sei nem por onde começar?", text: "Aqui você vê o que fazer no exato momento em que sai de casa." },
  { tag: "Bônus 2", title: "Treino Expresso de 5 Minutos", q: "Mas eu não tenho tempo pra treinar?", text: "Versão relâmpago do protocolo para quem só tem o tempo do café da manhã." },
  { tag: "Bônus 3", title: "Os 7 Erros Que Fazem o Cão Puxar Ainda Mais", q: "Mas e se eu fizer errado e piorar?", text: "Você sabe de antemão o que nunca fazer na guia." },
  { tag: "Bônus 4", title: "App/Planilha de Progresso do Adestramento", q: "Como vou saber se está funcionando?", text: "Você marca o avanço do seu cão todo dia e vê o próximo passo do protocolo." },
];

const forWho = [
  "Para quem sente dor no braço e no ombro no fim do passeio.",
  "Para quem passa vergonha quando o cão arrasta, pula ou late para outros cães na rua.",
  "Para quem quer voltar a curtir o passeio com o cão, de guia frouxa.",
  "Para quem quer um método pronto, sem precisar contratar adestrador.",
];

const anchor = [
  ["Protocolo de 14 Dias (PDF)", "R$ 97"],
  ["Vídeos dos exercícios", "R$ 57"],
  ["Bônus 1, Guia dos Primeiros 3 Dias", "R$ 27"],
  ["Bônus 2, Treino Expresso de 5 Minutos", "R$ 27"],
  ["Bônus 3, Os 7 Erros", "R$ 27"],
  ["Bônus 4, App/Planilha de Progresso", "R$ 61"],
];

const accessSteps = [
  ["Faça sua compra", "Assim que finalizar, você recebe o acesso no seu e-mail."],
  ["Acesse tudo", "Protocolo, vídeos e bônus liberados de uma vez."],
  ["Tudo pronto", "Agora é só aplicar o Guia Não Puxa Mais no próximo passeio."],
];

const faqs = [
  { q: "Qual a diferença para um curso de adestramento?", a: "Um curso ensina adestramento em geral. Este guia resolve um problema só: o cão que puxa a guia. É curto, prático e você aplica no mesmo dia." },
  { q: "Como posso tirar dúvidas?", a: FAQ_CONTACT },
  { q: "Por quanto tempo terei acesso?", a: FAQ_ACCESS },
  { q: "Terei acesso a você?", a: FAQ_MENTOR_ACCESS },
  { q: "Meu cão é reativo ou agressivo. Serve?", a: "O protocolo ajuda com puxão e agitação na rua. Casos de agressividade pedem acompanhamento de um adestrador ou veterinário comportamental." },
];

function Cta({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={CHECKOUT_URL}
      className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-center font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {children}
    </a>
  );
}

function Testimonials({ title, description, items }: { title?: string; description?: string; items: { name: string; text: string }[] }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      {title && <h2 className="text-3xl">{title}</h2>}
      {description && <p className="mt-4 max-w-3xl text-muted-foreground">{description}</p>}
      <div className={`grid gap-4 ${items.length > 1 ? "md:grid-cols-3" : ""} ${title || description ? "mt-8" : ""}`}>
        {items.map((t, i) => (
          <blockquote key={i} className="rounded-2xl border bg-card p-6">
            <p className="text-muted-foreground">{t.text}</p>
            <footer className="mt-4 font-semibold">{t.name}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

function PriceBlock() {
  return (
    <div className="mx-auto max-w-xl rounded-2xl border bg-card p-10 text-center">
      <p className="text-muted-foreground line-through">{PRICE_FROM}</p>
      <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-primary">por apenas</p>
      <p className="font-display text-6xl text-primary">{PRICE_TO}</p>
      <p className="text-sm text-muted-foreground">à vista</p>
      {URGENCY && <p className="mt-4 text-sm font-medium">{URGENCY}</p>}
      <div className="mt-8">
        <Cta>Sim, quero garantir por {PRICE_TO}</Cta>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">Garantia incondicional de 7 dias</p>
    </div>
  );
}

function Index() {
  return (
    <main>
      {/* 1 — Headline */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">Guia Não Puxa Mais</p>
          <h1 className="text-4xl leading-[1.1] md:text-5xl">
            Tenha o <em className="text-primary">Protocolo de 14 Dias</em> para o seu cão parar de puxar a guia, mesmo que você já tenha tentado peitoral, coleira e trancos
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Copie o passo a passo diário e aplique já no próximo passeio, sem adestrador e sem equipamento caro.
          </p>
        </div>
        <img src={hero} alt="Cachorro" width={1280} height={1024} className="rounded-2xl object-cover shadow-xl" />
      </section>

      {/* 2 — Passo a passo */}
      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl md:text-4xl">Esses são os 3 passos para o seu cão andar com a guia frouxa:</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <article key={s.title} className="rounded-2xl bg-card p-6">
                <span className="font-display text-3xl text-primary">Passo {i + 1}</span>
                <p className="mt-1 text-sm font-semibold text-muted-foreground">{s.days}</p>
                <h3 className="mt-3 text-xl">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — Entregáveis (resumo) */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="text-3xl">No Guia Não Puxa Mais você tem acesso imediato a:</h2>
        <ul className="mt-8 space-y-3">
          {summary.map((s) => (
            <li key={s} className="flex gap-3 rounded-xl bg-card p-4">
              <span className="text-primary">✓</span>
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 4 — Perfeito para */}
      <section className="bg-secondary/50 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl">Perfeito para quem volta do passeio com o braço dolorido e a paciência no fim.</h2>
          <p className="mt-4 text-muted-foreground">
            Serve para tutores de cães de qualquer porte que puxam a guia ou ficam agitados na rua.
          </p>
        </div>
      </section>

      {/* 5 — Depoimentos */}
      <Testimonials
        title="Quem já aplicou o Guia Não Puxa Mais teve esse resultado:"
        items={[
          {
            name: "Ana Matias",
            text: "Comecei com o Jogo do Nome dentro de casa, por poucos minutos. Gostei de praticar num lugar mais calmo antes de tentar na rua. Depois de alguns dias, meu cão já prestava mais atenção quando eu chamava.",
          },
          {
            name: "Rafael Pereira",
            text: "No começo eu ficava sem saber o que fazer quando a guia esticava. Com o Princípio da Árvore, aprendi a parar e voltar a andar quando ela afrouxava. As primeiras caminhadas tiveram bastante pausa, mas aos poucos meu cão começou a perceber o que fazia o passeio continuar.",
          },
          {
            name: "Camila Gonçalves",
            text: "Quando apareciam outros cães, eu tentava passar perto e acabava com a guia tensa. Aprendi a manter distância, chamar meu cão antes do puxão e recompensar quando ele olhava para mim. Ainda estamos treinando, mas agora sei como agir quando ele se distrai.",
          },
        ]}
      />
      {/* 6 — Agitação */}
      <section className="mx-auto max-w-3xl space-y-5 px-6 py-14 text-lg">
        <p>Você perde um pouco de paz toda vez que sai de casa já esperando o puxão.</p>
        <p>Eu sei que você cansou de ser arrastado e cansou de ver os vizinhos olhando enquanto seu cão faz o que quer.</p>
        <p>Isso continua acontecendo porque pode ser que você já tenha trocado de coleira, tentado dar um tranco na guia ou assistido vídeos soltos sem saber qual seguir.</p>
        <p className="font-semibold">E é um passo a passo claro, do início ao fim, que você vai encontrar no Guia Não Puxa Mais.</p>
      </section>

      {/* 8 — Entregáveis detalhados + 1º CTA */}
      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl md:text-4xl">O que você vai encontrar dentro do Guia Não Puxa Mais</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {deliverables.map((d) => (
              <article key={d.title} className="rounded-2xl bg-card p-6">
                <span className="text-sm font-semibold uppercase tracking-widest text-primary">{d.tag}</span>
                <h3 className="mt-2 text-xl">{d.title}</h3>
                {d.q && <p className="mt-2 font-medium italic">{d.q}</p>}
                <p className="mt-2 text-muted-foreground">{d.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Cta>Quero acesso ao protocolo, aos vídeos e aos 4 bônus</Cta>
          </div>
        </div>
      </section>

      {/* 10 — Para quem é */}
      <section className="mx-auto max-w-3xl px-6 pb-14">
        <h2 className="text-3xl">Para quem é o Guia Não Puxa Mais</h2>
        <ul className="mt-6 space-y-3">
          {forWho.map((f) => (
            <li key={f} className="flex gap-3">
              <span className="text-primary">•</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 11 — Recapitulação com ancoragem */}
      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-xl px-6">
          <h2 className="text-3xl">Veja tudo que você vai levar…</h2>
          <ul className="mt-8 divide-y rounded-2xl bg-card px-6">
            {anchor.map(([name, price]) => (
              <li key={name} className="flex justify-between gap-4 py-4">
                <span>{name}</span>
                <span className="font-semibold">{price}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-lg">
            No total tudo isso deveria custar: <strong>{PRICE_FROM}</strong>
          </p>
        </div>
      </section>

      {/* 12 — Preço + CTA (1ª oferta) */}
      <section id="comprar" className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="text-muted-foreground">
          Esse seria o valor de cada item vendido separadamente, e facilmente poderia custar mais, já que é um método completo para o cão parar de puxar a guia.
        </p>
        <p className="mt-4 mb-10 text-lg">
          Mas hoje eu quero firmar um compromisso com você e te provar que é possível voltar a passear tranquilo com o seu cão.
        </p>
        <PriceBlock />
      </section>

      {/* 13 — Como acessar */}
      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl">Compre agora e receba seu acesso na hora!</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {accessSteps.map(([t, d], i) => (
              <article key={t} className="rounded-2xl bg-card p-6">
                <span className="font-display text-3xl text-primary">{i + 1}</span>
                <h3 className="mt-2 text-xl">{t}</h3>
                <p className="mt-2 text-muted-foreground">{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 14 — Garantia */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h2 className="text-3xl">7 dias de garantia incondicional</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Eis o nosso acordo: você tem 7 dias para experimentar o conteúdo e, se achar que ele não faz sentido para você, basta enviar um pedido para a minha equipe e nós reembolsamos 100% do valor pago.
        </p>
        <p className="mt-4 font-semibold">Preto no branco. Queremos que você e o seu cão tenham resultado.</p>
      </section>

      {/* 15 — Mentor */}
      <section className="bg-secondary/50 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl">Conheça seu mentor</h2>
          <h3 className="mt-4 text-xl">{MENTOR.name}</h3>
          <p className="mt-2 text-muted-foreground">{MENTOR.bio}</p>
        </div>
      </section>

      {/* 16 — Conversa séria */}
      <section className="mx-auto max-w-3xl space-y-4 px-6 py-20 text-lg">
        <h2 className="text-3xl">Agora você tem duas opções:</h2>
        <p><strong>Opção 1:</strong> Continuar sendo arrastado no passeio e voltando para casa cansado e frustrado.</p>
        <p><strong>Opção 2:</strong> Ter acesso ao Guia Não Puxa Mais e finalmente passear com o cão de guia frouxa.</p>
        <p>Eu sei (e você também sabe): a opção 2 é a mais inteligente.</p>
        <p>Então clica no botão abaixo e garante o seu Guia Não Puxa Mais agora.</p>
      </section>

      {/* 17 — Preço + CTA (2ª oferta) */}
      <section className="mx-auto max-w-3xl px-6 pb-20">
        <PriceBlock />
      </section>

      {/* 18 — FAQ */}
      <section className="mx-auto max-w-3xl px-6 pb-24">
        <h2 className="text-3xl">Perguntas frequentes</h2>
        <div className="mt-6 divide-y border-y">
          {faqs.map((f) => (
            <details key={f.q} className="py-5">
              <summary className="cursor-pointer font-semibold">{f.q}</summary>
              <p className="mt-2 text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="border-t py-8 text-center text-sm text-muted-foreground">© 2026 Guia Não Puxa Mais</footer>
    </main>
  );
}
