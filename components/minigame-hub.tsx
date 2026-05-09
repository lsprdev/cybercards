"use client"

import { useMemo, useState } from "react"
import { ArrowLeft, Gamepad2, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FlashcardMatchGame } from "@/components/flashcard-match-game"
import type { Topic } from "@/lib/flashcards"

export function MinigameHub({ topics }: { topics: Topic[] }) {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null)
  const selectedTopic = useMemo(
    () => topics.find((topic) => topic.slug === selectedSlug) ?? null,
    [selectedSlug, topics],
  )

  if (selectedTopic) {
    return (
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              pasta_{selectedTopic.number}
            </div>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight">{selectedTopic.title}</h2>
          </div>

          <Button
            type="button"
            variant="ghost"
            onClick={() => setSelectedSlug(null)}
            className="w-fit font-mono text-xs text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-3.5" />
            trocar tema
          </Button>
        </div>

        <FlashcardMatchGame
          key={selectedTopic.slug}
          cards={selectedTopic.cards}
          topicSlug={selectedTopic.slug}
        />
      </div>
    )
  }

  return (
    <section className="rounded-2xl border border-border bg-card p-5 shadow-xl shadow-black/20 sm:p-6">
      <div className="mb-5 flex items-center gap-3">
        <span className="grid size-10 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
          <Gamepad2 className="size-5" strokeWidth={2.25} />
        </span>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            escolher tema
          </div>
          <h2 className="text-xl font-semibold tracking-tight">Tema do minigame</h2>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {topics.map((topic) => (
          <button
            key={topic.slug}
            type="button"
            onClick={() => setSelectedSlug(topic.slug)}
            className="rounded-xl border border-border/70 bg-background/70 p-4 text-left transition-colors hover:border-primary/40 hover:bg-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <div className="mb-2 flex items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              <span>pasta_{topic.number}</span>
              <span className="inline-flex items-center gap-1">
                <Layers className="size-3" />
                {topic.cards.length}
              </span>
            </div>
            <div className="text-sm font-semibold leading-snug text-foreground">{topic.title}</div>
          </button>
        ))}
      </div>
    </section>
  )
}
