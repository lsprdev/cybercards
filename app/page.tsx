import { Terminal, Sparkles, BookOpen, Layers } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { TopicCard } from "@/components/topic-card";
import { topics } from "@/lib/flashcards";

export default function HomePage() {
  const totalCards = topics.reduce((sum, t) => sum + t.cards.length, 0);

  return (
    <div className="min-h-dvh">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="cyber-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
              <Terminal className="size-3.5" />
              <span>cybercards v1.0</span>
            </div>

            <h1 className="max-w-3xl text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              Aprenda <span className="text-primary">cybersecurity</span>
              <br />
              um flashcard por vez.
            </h1>

            <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Utilizando Spaced Repetition System para aprender cibersegurança.
            </p>

            {/* Stats */}
            <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Layers className="size-3.5 text-primary" />
                <span>
                  <span className="text-foreground">{topics.length}</span>{" "}
                  pastas
                </span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="size-3.5 text-primary" />
                <span>
                  <span className="text-foreground">{totalCards}</span>{" "}
                  flashcards
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              /temas
            </div>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
              Pastas de estudo
            </h2>
          </div>
          <span className="hidden font-mono text-xs text-muted-foreground sm:inline">
            {topics.length} pastas · {totalCards} cards
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <TopicCard key={topic.slug} topic={topic} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60 bg-card/30">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-4 py-8 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center sm:px-6">
          <div>
            <span className="text-primary">cybercards</span>
          </div>
          <a
            href="https://github.com/lsprdev"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            made by <span className="text-primary">lsprdev</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
