import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Folder } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { FlashcardPlayer } from "@/components/flashcard-player"
import { getTopicBySlug, topics } from "@/lib/flashcards"

export function generateStaticParams() {
  return topics.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const topic = getTopicBySlug(slug)
  if (!topic) return {}
  return {
    title: `${topic.title} — CyberCards`,
    description: topic.description,
  }
}

export default async function TopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const topic = getTopicBySlug(slug)
  if (!topic) notFound()

  return (
    <div className="min-h-dvh">
      <SiteHeader />

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-3.5" />
            voltar para temas
          </Link>

          <div className="mt-5 flex items-start gap-4">
            <div className="grid size-12 shrink-0 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
              <Folder className="size-6" strokeWidth={2} />
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                pasta_{topic.number} · {topic.cards.length} cards
              </div>
              <h1 className="text-balance text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                {topic.title}
              </h1>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{topic.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
        <FlashcardPlayer cards={topic.cards} />
      </section>
    </div>
  )
}
