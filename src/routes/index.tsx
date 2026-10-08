import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero-pet.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Guia do Cão Feliz — Ebook de cuidados para seu cachorro" },
      { name: "description", content: "Alimentação, saúde, rotina e adestramento: o ebook completo para cuidar do seu cachorro com carinho e confiança." },
      { property: "og:title", content: "Guia do Cão Feliz — Ebook Pet" },
      { property: "og:description", content: "O guia prático para tutores que querem um cachorro saudável e feliz." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const chapters: { n: string; title: string; text: string }[] = [
  { n: "01", title: "Alimentação certa", text: "Quantidades, ração vs. comida natural e alimentos proibidos." },
  { n: "02", title: "Saúde em dia", text: "Vacinas, vermífugos e sinais de alerta para ir ao veterinário." },
  { n: "03", title: "Rotina e passeios", text: "Como montar um dia equilibrado de energia, sono e brincadeira." },
  { n: "04", title: "Adestramento positivo", text: "Comandos básicos ensinados com paciência e recompensas." },
  { n: "05", title: "Comportamento", text: "Latidos, mordidas e ansiedade de separação: o que fazer." },
  { n: "06", title: "Higiene e bem-estar", text: "Banho, unhas, dentes e pelagem sem estresse." },
];

const faqs: { q: string; a: string }[] = [
  { q: "Como recebo o ebook?", a: "Logo após a compra, você recebe o PDF no seu e-mail." },
  { q: "Serve para filhotes e adultos?", a: "Sim. Há orientações para cada fase da vida do cão." },
  { q: "E se eu não gostar?", a: "Você tem 7 dias de garantia para pedir o reembolso total." },
];

function BuyButton() {
  return (
    <a
      href="#comprar"
      className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      Quero meu ebook
    </a>
  );
}

function Index() {
  return (
    <main>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">Ebook Pet</p>
          <h1 className="text-5xl leading-[1.05] md:text-6xl">
            Guia do <em className="text-primary">Cão Feliz</em>
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Tudo o que você precisa saber para cuidar do seu cachorro com amor, confiança e sem achismos.
          </p>
          <div className="mt-8 flex items-center gap-6">
            <BuyButton />
            <span className="text-sm text-muted-foreground">PDF · 80 páginas</span>
          </div>
        </div>
        <img src={hero} alt="Filhote de golden retriever ao lado de um livro" width={1280} height={1024} className="rounded-2xl object-cover shadow-xl" />
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-4xl">O que você vai aprender</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {chapters.map((c) => (
              <article key={c.n} className="rounded-2xl bg-card p-6">
                <span className="font-display text-3xl text-primary">{c.n}</span>
                <h3 className="mt-3 text-xl">{c.title}</h3>
                <p className="mt-2 text-muted-foreground">{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="comprar" className="mx-auto max-w-xl px-6 py-24 text-center">
        <h2 className="text-4xl">Comece hoje</h2>
        <p className="mt-4 text-muted-foreground">Acesso imediato e vitalício.</p>
        <div className="mt-8 rounded-2xl border bg-card p-10">
          <p className="text-muted-foreground line-through">R$ 67,00</p>
          <p className="font-display text-6xl text-primary">R$ 27</p>
          <div className="mt-8"><BuyButton /></div>
          <p className="mt-4 text-sm text-muted-foreground">Garantia de 7 dias</p>
        </div>
      </section>

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

      <footer className="border-t py-8 text-center text-sm text-muted-foreground">© 2026 Guia do Cão Feliz</footer>
    </main>
  );
}
