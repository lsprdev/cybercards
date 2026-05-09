"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import { ChevronLeft, ChevronRight, RotateCcw, Shuffle, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import type { Flashcard } from "@/lib/flashcards"

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function FlashcardPlayer({ cards }: { cards: Flashcard[] }) {
  const [deck, setDeck] = useState<Flashcard[]>(cards)
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [seen, setSeen] = useState<Set<number>>(new Set())

  const current = deck[index]
  const total = deck.length
  const progress = useMemo(() => Math.round(((index + 1) / total) * 100), [index, total])

  const goNext = useCallback(() => {
    setFlipped(false)
    setIndex((i) => (i + 1) % total)
  }, [total])

  const goPrev = useCallback(() => {
    setFlipped(false)
    setIndex((i) => (i - 1 + total) % total)
  }, [total])

  const flip = useCallback(() => {
    setFlipped((f) => !f)
    setSeen((s) => new Set(s).add(current.id))
  }, [current.id])

  const reset = useCallback(() => {
    setDeck(cards)
    setIndex(0)
    setFlipped(false)
    setSeen(new Set())
  }, [cards])

  const shuffle = useCallback(() => {
    setDeck(shuffleArray(cards))
    setIndex(0)
    setFlipped(false)
    setSeen(new Set())
  }, [cards])

  // Keyboard shortcuts (global)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null
      // Don't hijack typing inside form fields
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return
      }
      if (e.key === " ") {
        e.preventDefault()
        flip()
      } else if (e.key === "ArrowRight") {
        e.preventDefault()
        goNext()
      } else if (e.key === "ArrowLeft") {
        e.preventDefault()
        goPrev()
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [flip, goNext, goPrev])

  return (
    <div className="flex flex-col gap-6">
      {/* Progress + counters */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between font-mono text-xs">
          <span className="text-muted-foreground">
            card{" "}
            <span className="text-foreground">
              {String(index + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
            </span>
          </span>
          <span className="text-muted-foreground">
            vistos: <span className="text-primary">{seen.size}</span>/{total}
          </span>
        </div>
        <Progress value={progress} className="h-1" />
      </div>

      {/* Flashcard */}
      <div className="flip-perspective">
        <div
          role="button"
          tabIndex={0}
          onClick={flip}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault()
              flip()
            }
          }}
          aria-label={flipped ? "Mostrar pergunta" : "Revelar resposta"}
          aria-pressed={flipped}
          className="group relative block h-[360px] w-full cursor-pointer select-none rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:h-[420px]"
        >
          <div className={`flip-inner relative h-full w-full ${flipped ? "is-flipped" : ""}`}>
            {/* Front */}
            <div className="flip-face absolute inset-0 flex flex-col rounded-2xl border border-border bg-card p-6 shadow-xl shadow-black/30 sm:p-10">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-primary" />
                  pergunta
                </span>
                <span>#{String(current.id).padStart(2, "0")}</span>
              </div>

              <div className="flex flex-1 items-center justify-center px-2 py-6">
                <p className="text-balance text-center text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                  {current.front}
                </p>
              </div>

              <div className="flex items-center justify-center gap-2 font-mono text-xs text-muted-foreground transition-colors group-hover:text-primary">
                <Eye className="size-3.5" />
                clique ou aperte espaço para revelar
              </div>
            </div>

            {/* Back */}
            <div className="flip-face flip-back absolute inset-0 flex flex-col rounded-2xl border border-primary/40 bg-card p-6 shadow-xl shadow-primary/10 sm:p-10">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-primary/80">
                <span className="flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-primary" />
                  resposta
                </span>
                <span>#{String(current.id).padStart(2, "0")}</span>
              </div>

              <div className="flex flex-1 items-center justify-center px-2 py-6">
                <p className="text-balance text-center text-lg leading-relaxed text-foreground sm:text-xl">
                  {current.back}
                </p>
              </div>

              <div className="flex items-center justify-center gap-2 font-mono text-xs text-muted-foreground">
                <EyeOff className="size-3.5" />
                clique para voltar à pergunta
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="secondary"
            onClick={goPrev}
            className="font-mono"
            aria-label="Card anterior"
          >
            <ChevronLeft className="size-4" />
            anterior
          </Button>
          <Button type="button" onClick={goNext} className="font-mono" aria-label="Próximo card">
            próximo
            <ChevronRight className="size-4" />
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="ghost"
            onClick={shuffle}
            className="font-mono text-xs text-muted-foreground hover:text-foreground"
          >
            <Shuffle className="size-3.5" />
            embaralhar
          </Button>
          <Button
            type="button"
            variant="ghost"
            onClick={reset}
            className="font-mono text-xs text-muted-foreground hover:text-foreground"
          >
            <RotateCcw className="size-3.5" />
            reiniciar
          </Button>
        </div>
      </div>

      {/* Keyboard hint */}
      <div className="rounded-lg border border-border/60 bg-card/50 p-3 font-mono text-[11px] text-muted-foreground">
        <span className="text-primary">dica:</span> use{" "}
        <kbd className="rounded border border-border bg-background px-1.5 py-0.5 text-[10px]">espaço</kbd> para virar,{" "}
        <kbd className="rounded border border-border bg-background px-1.5 py-0.5 text-[10px]">←</kbd>{" "}
        <kbd className="rounded border border-border bg-background px-1.5 py-0.5 text-[10px]">→</kbd> para navegar.
      </div>
    </div>
  )
}
