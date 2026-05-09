import Link from "next/link"
import { ArrowRight, Folder, Layers } from "lucide-react"
import type { Topic } from "@/lib/flashcards"

export function TopicCard({ topic }: { topic: Topic }) {
  return (
    <Link
      href={`/temas/${topic.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card/80"
    >
      {/* corner glow */}
      <div className="pointer-events-none absolute -right-12 -top-12 size-32 rounded-full bg-primary/0 blur-2xl transition-colors group-hover:bg-primary/10" />

      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg border border-border bg-secondary text-primary transition-colors group-hover:border-primary/40 group-hover:bg-primary/10">
            <Folder className="size-5" strokeWidth={2} />
          </div>
          <div className="font-mono text-xs text-muted-foreground">
            <div>pasta_{topic.number}</div>
            <div className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-muted-foreground/70">
              <Layers className="size-3" />
              {topic.cards.length} cards
            </div>
          </div>
        </div>
        <ArrowRight className="size-4 -translate-x-1 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0 group-hover:text-primary group-hover:opacity-100" />
      </div>

      <h3 className="mt-5 text-pretty text-lg font-semibold leading-snug tracking-tight">{topic.title}</h3>
      <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">{topic.description}</p>

      <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4">
        <span className="font-mono text-xs text-muted-foreground">/{topic.slug}</span>
        <span className="font-mono text-xs text-primary opacity-0 transition-opacity group-hover:opacity-100">
          estudar →
        </span>
      </div>
    </Link>
  )
}
