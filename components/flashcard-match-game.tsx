"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  CheckCircle2,
  CircleHelp,
  RotateCcw,
  Trophy,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Flashcard } from "@/lib/flashcards";

type StoredScore = {
  score: number;
  best: number;
  streak: number;
  played: number;
  correct: number;
};

type RunScore = {
  score: number;
  answered: number;
  correct: number;
};

const initialScore: StoredScore = {
  score: 0,
  best: 0,
  streak: 0,
  played: 0,
  correct: 0,
};

const initialRunScore: RunScore = {
  score: 0,
  answered: 0,
  correct: 0,
};

function shuffleArray<T>(items: T[]): T[] {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function buildRound(cards: Flashcard[], currentIndex: number) {
  const current = cards[currentIndex];
  const distractors = shuffleArray(
    cards.filter((card) => card.id !== current.id),
  )
    .slice(0, 3)
    .map((card) => card.back);

  return {
    current,
    options: shuffleArray([current.back, ...distractors]),
  };
}

export function FlashcardMatchGame({
  cards,
  topicSlug,
}: {
  cards: Flashcard[];
  topicSlug: string;
}) {
  const storageKey = useMemo(
    () => `cybercards:minigame:${topicSlug}`,
    [topicSlug],
  );
  const [score, setScore] = useState<StoredScore>(initialScore);
  const [index, setIndex] = useState(0);
  const [round, setRound] = useState(() => buildRound(cards, 0));
  const [selected, setSelected] = useState<string | null>(null);
  const [runScore, setRunScore] = useState<RunScore>(initialRunScore);
  const [finished, setFinished] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  const answered = selected !== null;
  const isCorrect = selected === round.current.back;
  const accuracy =
    score.played > 0 ? Math.round((score.correct / score.played) * 100) : 0;
  const runAccuracy =
    runScore.answered > 0
      ? Math.round((runScore.correct / runScore.answered) * 100)
      : 0;

  useEffect(() => {
    setHydrated(false);
    try {
      const stored = window.localStorage.getItem(storageKey);
      setScore(
        stored ? { ...initialScore, ...JSON.parse(stored) } : initialScore,
      );
    } catch {
      setScore(initialScore);
    } finally {
      setHydrated(true);
    }
  }, [storageKey]);

  useEffect(() => {
    setIndex(0);
    setRound(buildRound(cards, 0));
    setSelected(null);
    setRunScore(initialRunScore);
    setFinished(false);
  }, [cards]);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(storageKey, JSON.stringify(score));
  }, [hydrated, score, storageKey]);

  const answer = useCallback(
    (option: string) => {
      if (selected) return;

      const correct = option === round.current.back;
      setSelected(option);
      setRunScore((currentRun) => ({
        score: correct
          ? currentRun.score + 10
          : Math.max(0, currentRun.score - 2),
        answered: currentRun.answered + 1,
        correct: currentRun.correct + (correct ? 1 : 0),
      }));
      setScore((currentScore) => {
        const nextScore = correct
          ? currentScore.score + 10
          : Math.max(0, currentScore.score - 2);
        const nextStreak = correct ? currentScore.streak + 1 : 0;

        return {
          score: nextScore,
          best: Math.max(currentScore.best, nextScore),
          streak: nextStreak,
          played: currentScore.played + 1,
          correct: currentScore.correct + (correct ? 1 : 0),
        };
      });

      if (index === cards.length - 1) {
        setFinished(true);
      }
    },
    [cards.length, index, round.current.back, selected],
  );

  const nextRound = useCallback(() => {
    if (index >= cards.length - 1) {
      setFinished(true);
      return;
    }

    const nextIndex = index + 1;
    setIndex(nextIndex);
    setRound(buildRound(cards, nextIndex));
    setSelected(null);
  }, [cards, index]);

  const restartRun = useCallback(() => {
    setIndex(0);
    setRound(buildRound(cards, 0));
    setSelected(null);
    setRunScore(initialRunScore);
    setScore((currentScore) => ({
      ...initialScore,
      best: currentScore.best,
    }));
    setFinished(false);
  }, [cards]);

  const resetScore = useCallback(() => {
    setScore(initialScore);
    setRunScore(initialRunScore);
    setFinished(false);
    setIndex(0);
    setRound(buildRound(cards, 0));
    setSelected(null);
    window.localStorage.removeItem(storageKey);
  }, [cards, storageKey]);

  if (finished) {
    return (
      <div className="relative overflow-hidden rounded-2xl border border-primary/40 bg-card p-5 shadow-xl shadow-primary/10 sm:p-6">
        <div className="confetti-burst" aria-hidden="true">
          {Array.from({ length: 28 }).map((_, pieceIndex) => (
            <span key={pieceIndex} className="confetti-piece" />
          ))}
        </div>

        <div className="relative flex flex-col items-center gap-6 py-10 text-center">
          <span className="grid size-14 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
            <Trophy className="size-7" strokeWidth={2.25} />
          </span>

          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              minigame finalizado
            </div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Pontuação: {runScore.score}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Você acertou{" "}
              <span className="text-foreground">
                {runScore.correct}/{cards.length}
              </span>{" "}
              perguntas ({runAccuracy}%).
            </p>
          </div>

          <div className="grid w-full max-w-md grid-cols-3 gap-2 font-mono text-[11px] text-muted-foreground">
            <div className="rounded-lg border border-border/60 bg-background/60 px-3 py-3">
              <div>rodada</div>
              <div className="text-lg text-primary">{runScore.score}</div>
            </div>
            <div className="rounded-lg border border-border/60 bg-background/60 px-3 py-3">
              <div>melhor</div>
              <div className="text-lg text-foreground">{score.best}</div>
            </div>
            <div className="rounded-lg border border-border/60 bg-background/60 px-3 py-3">
              <div>acerto</div>
              <div className="text-lg text-foreground">{runAccuracy}%</div>
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <Button type="button" onClick={restartRun} className="font-mono">
              jogar novamente
            </Button>
            <Button
              type="button"
              variant="ghost"
              onClick={resetScore}
              className="font-mono text-xs text-muted-foreground hover:text-foreground"
            >
              <RotateCcw className="size-3.5" />
              zerar score
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-5 shadow-xl shadow-black/20 sm:p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
            <CircleHelp className="size-5" strokeWidth={2.25} />
          </span>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              minigame
            </div>
            <h2 className="text-xl font-semibold tracking-tight">
              Encontre a resposta
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 font-mono text-[11px] text-muted-foreground">
          <div className="rounded-lg border border-border/60 bg-background/60 px-3 py-2">
            <div>score</div>
            <div className="text-sm text-primary">{score.score}</div>
          </div>
          <div className="rounded-lg border border-border/60 bg-background/60 px-3 py-2">
            <div>melhor</div>
            <div className="text-sm text-foreground">{score.best}</div>
          </div>
          <div className="rounded-lg border border-border/60 bg-background/60 px-3 py-2">
            <div>acerto</div>
            <div className="text-sm text-foreground">{accuracy}%</div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-primary/30 bg-primary/10 p-5">
        <p className="text-balance text-center text-xl font-semibold leading-tight sm:text-2xl">
          {round.current.front}
        </p>
      </div>

      <div className="grid gap-3">
        {round.options.map((option, optionIndex) => {
          const optionIsCorrect = option === round.current.back;
          const optionIsSelected = option === selected;
          const showCorrect = answered && optionIsCorrect;
          const showWrong = answered && optionIsSelected && !optionIsCorrect;

          return (
            <button
              key={`${optionIndex}-${option}`}
              type="button"
              onClick={() => answer(option)}
              disabled={answered}
              className={[
                "flex min-h-20 items-start gap-3 rounded-xl border bg-background/70 p-4 text-left text-sm leading-relaxed transition-colors",
                "hover:border-primary/40 hover:bg-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                showCorrect
                  ? "border-primary/60 bg-primary/10 text-foreground"
                  : "border-border/70",
                showWrong
                  ? "border-destructive/60 bg-destructive/10 text-foreground"
                  : "",
                answered ? "cursor-default" : "cursor-pointer",
              ].join(" ")}
            >
              <span className="mt-0.5 text-muted-foreground">
                {showCorrect ? (
                  <CheckCircle2 className="size-4 text-primary" />
                ) : showWrong ? (
                  <XCircle className="size-4 text-destructive" />
                ) : (
                  <span className="block size-4 rounded-full border border-muted-foreground/50" />
                )}
              </span>
              <span>{option}</span>
            </button>
          );
        })}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <Trophy className="size-3.5 text-primary" />
          sequência: <span className="text-primary">{score.streak}</span>
        </div>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="ghost"
            onClick={resetScore}
            className="font-mono text-xs text-muted-foreground hover:text-foreground"
          >
            <RotateCcw className="size-3.5" />
            zerar score
          </Button>
          <Button
            type="button"
            onClick={nextRound}
            disabled={!answered}
            className="font-mono"
          >
            {index === cards.length - 1 ? "ver resultado" : "próxima"}
          </Button>
        </div>
      </div>
    </div>
  );
}
