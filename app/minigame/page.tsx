import Link from "next/link"
import { ArrowLeft, Gamepad2 } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { MinigameHub } from "@/components/minigame-hub"
import { topics } from "@/lib/flashcards"

export const metadata = {
  title: "Minigame — CyberCards",
  description: "Escolha um tema e encontre a resposta correta para cada flashcard.",
}

export default function MinigamePage() {
  return (
    <div className="min-h-dvh">
      <SiteHeader />

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-3.5" />
            voltar para temas
          </Link>

          <div className="mt-5 flex items-start gap-4">
            <div className="grid size-12 shrink-0 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
              <Gamepad2 className="size-6" strokeWidth={2} />
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                /minigame
              </div>
              <h1 className="text-balance text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                Escolha o tema e acerte as respostas
              </h1>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                Veja a frente do flashcard e selecione a resposta correta entre as opções.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
        <MinigameHub topics={topics} />
      </section>
    </div>
  )
}
