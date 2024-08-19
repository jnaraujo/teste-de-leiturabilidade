"use client";
import AdBanner from "@/components/ads/adbanner";
import { Textarea } from "@/components/ui/textarea";
import { calculateFleschReadingFromText } from "@/libs/ReadingEase";
import { getReadingTimeByWords, secondsToHMS } from "@/utils";
import { useState } from "react";

export function WordCounter() {
  const [text, setText] = useState("");

  const ease = calculateFleschReadingFromText(text);

  return (
    <article className="grid w-full flex-1 grid-cols-1 gap-4 md:grid-cols-[minmax(450px,1fr)_250px] lg:grid-cols-[1fr_300px] 2xl:gap-16">
      <Textarea
        className="h-full min-h-[250px] border bg-background/50 py-4 text-zinc-600 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-300 dark:placeholder:text-stone-500"
        placeholder="Copie e cole seu texto aqui para contar as palavras..."
        value={text}
        onChange={(e) => {
          setText(e.currentTarget.value);
        }}
      />

      <div className="space-y-8">
        <div className="h-fit space-y-1 rounded-lg border bg-background/50 p-3 shadow-sm dark:border-stone-700 dark:bg-stone-800">
          <h2 className="text-lg font-semibold text-zinc-800 dark:text-stone-300">
            Sobre seu texto:
          </h2>
          <div className="flex gap-1 text-sm text-zinc-600 dark:text-stone-400">
            <strong className="font-medium">Tempo de leitura:</strong>
            <span>{secondsToHMS(getReadingTimeByWords(ease.words))}</span>
          </div>
          <div className="flex gap-1 text-sm text-zinc-600 dark:text-stone-400">
            <strong className="font-medium">Palavras:</strong>
            <span>{ease.words}</span>
          </div>
          <div className="flex gap-1 text-sm text-zinc-600 dark:text-stone-400">
            <strong className="font-medium">Caracteres:</strong>
            <span>{ease.chars}</span>
          </div>
          <div className="flex gap-1 text-sm text-zinc-600 dark:text-stone-400">
            <strong className="font-medium">Frases:</strong>
            <span>{ease.sentences}</span>
          </div>
        </div>

        <AdBanner
          dataAdFormat="auto"
          dataAdSlot="5869507100"
          dataFullWidthResponsive={true}
        />
      </div>
    </article>
  );
}
