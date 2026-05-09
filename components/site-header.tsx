import Link from "next/link"
import { Github, Shield } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-2">
          <span className="grid size-8 place-items-center rounded-md border border-primary/30 bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
            <Shield className="size-4" strokeWidth={2.25} />
          </span>
          <span className="font-mono text-sm font-semibold tracking-tight">
            <span className="text-primary">cyber</span>
            <span className="text-foreground">cards</span>
            <span className="caret-blink ml-0.5 text-primary">_</span>
          </span>
        </Link>

        <nav className="flex items-center gap-1 font-mono text-xs">
          <Link
            href="/minigame"
            className="rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            minigame
          </Link>
          <a
            href="https://github.com/mehranmisaghi/cybersecurity"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground sm:inline-block"
          >
            referencia
          </a>
          <a
            href="https://github.com/lsprdev/cybercards"
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir repositório do CyberCards no GitHub"
            className="grid size-8 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <Github className="size-4" strokeWidth={2.25} />
          </a>
        </nav>
      </div>
    </header>
  )
}
