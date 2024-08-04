"use client";

import { easeToLabel } from "@/libs/ReadingEase";
import { useReadingStore } from "@/store/readingStore";
import { useEffect, useRef, useState } from "react";
import { PanelBottomClose, PanelBottomOpen } from "lucide-react";
import { cn } from "@/libs/utils";
import { getReadingTimeByWords, secondsToHMS } from "@/utils";
import { useConfigStore } from "@/store/configStore";
import { Checkbox } from "@/components/ui/checkbox";
import { useStore } from "@/hooks/useStore";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "./ui/button";
import { contentStore } from "@/store/contentStore";
import { aiTextAnalyze, canUseAiFeature } from "@/libs/ai";
import dynamic from "next/dynamic";

const Markdown = dynamic(() => import("react-markdown"));

interface Props {
  isPanelOpen?: boolean;
}

export default function DetailsPanel({ isPanelOpen = true }: Props) {
  const { ease } = useReadingStore();
  const config = useStore(useConfigStore, (state) => state.config);
  const { setConfig } = useConfigStore();
  const ref = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(isPanelOpen);
  const [hasAiEnabled, setHasAiEnabled] = useState(false);
  const [aiResponse, setAIResponse] = useState(
    "Saiba o que você pode melhorar no seu texto.",
  );

  function calculateSliderPosition(value: number) {
    if (!ref.current) return 0;

    const sliderWidth = ref.current.offsetWidth;
    const formula = value * (sliderWidth / 100);

    return Math.max(Math.min(formula, sliderWidth - 6), 2);
  }

  const sliderPosition = calculateSliderPosition(ease.index);

  useEffect(() => {
    (async () => {
      setHasAiEnabled(await canUseAiFeature());
    })();
  }, []);

  return (
    <article className="flex-1 overflow-hidden rounded-lg border border-zinc-300 bg-[#eeeeef] shadow-sm dark:border-stone-700 dark:bg-stone-800">
      <div className="flex items-start justify-between p-2">
        <span className="mt-1 text-sm text-zinc-700 dark:text-zinc-50">
          Seu texto está no nível de leitura de{" "}
          <strong className="font-semibold">{easeToLabel(ease.index)}</strong>
        </span>

        <Tooltip>
          <TooltipTrigger asChild>
            <button
              className={cn(
                "h-8 w-8 text-zinc-700 transition-colors duration-200 dark:text-zinc-300",
              )}
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? "Fechar painel" : "Abrir painel"}
            >
              {isOpen ? <PanelBottomOpen /> : <PanelBottomClose />}
            </button>
          </TooltipTrigger>
          <TooltipContent>
            {isOpen ? "Fechar painel" : "Abrir painel"}
          </TooltipContent>
        </Tooltip>
      </div>
      <div
        className={cn("relative h-3 w-full overflow-hidden", {
          "mx-auto h-4 w-[95%] rounded-lg": isOpen,
        })}
      >
        <div
          className="absolute h-full w-1 rounded-lg bg-zinc-700"
          style={{ left: `${sliderPosition}px` }}
        />
        <div
          ref={ref}
          className={cn(
            "h-full w-full bg-gradient-to-r from-red-500 via-red-100 to-green-500",
            {
              "rounded-lg": isOpen,
            },
          )}
        />
      </div>

      <div
        className={cn("space-y-4 p-2", {
          hidden: !isOpen,
        })}
      >
        <div className="space-y-1">
          <span className="text-base font-semibold text-zinc-700 dark:text-zinc-100">
            Configurações do editor:
          </span>

          <div className="flex gap-2">
            <Checkbox
              id="highlight"
              className="mt-[3px]"
              checked={config?.highlight ?? false}
              onCheckedChange={(state) => {
                setConfig("highlight", state);
              }}
              aria-label="Destacar dificuldade de leitura das frases"
            />

            <label
              htmlFor="highlight"
              className="text-sm text-zinc-700 dark:text-zinc-300"
            >
              Destacar dificuldade de leitura das frases
            </label>
          </div>

          <div className="flex gap-2">
            <Checkbox
              id="tips"
              className="mt-[3px]"
              checked={config?.tips ?? false}
              onCheckedChange={(state) => {
                setConfig("tips", state);
              }}
              aria-label="Mostrar dicas de como melhorar o texto"
            />

            <label
              htmlFor="tips"
              className="text-sm text-zinc-700 dark:text-zinc-300"
            >
              Mostrar dicas de como melhorar o texto
            </label>
          </div>
        </div>

        <div className="space-y-1">
          <span className="text-base font-semibold text-zinc-700 dark:text-zinc-100">
            Mais sobre seu texto:
          </span>
          <span className="flex gap-1 text-sm text-zinc-700 dark:text-zinc-300">
            <strong className="font-medium">Tempo de leitura:</strong>
            <span>{secondsToHMS(getReadingTimeByWords(ease.words))}</span>
          </span>
          <span className="flex gap-1 text-sm text-zinc-700 dark:text-zinc-300">
            <strong className="font-medium">Palavras:</strong>
            <span>{ease.words}</span>
          </span>
          <span className="flex gap-1 text-sm text-zinc-700 dark:text-zinc-300">
            <strong className="font-medium">Caracteres:</strong>
            <span>{ease.chars}</span>
          </span>
          <span className="flex gap-1 text-sm text-zinc-700 dark:text-zinc-300">
            <strong className="font-medium">Frases:</strong>
            <span>{ease.sentences}</span>
          </span>
        </div>

        {hasAiEnabled ? (
          <div className="space-y-4 rounded-md border bg-orange-100/50 p-2">
            <span className="font-medium text-zinc-700">
              Você tem a funcionalidade de IA ligada no navegador! *
            </span>
            <Markdown className="max-h-32 overflow-y-auto hyphens-auto  text-sm text-zinc-600">
              {aiResponse}
            </Markdown>
            <Button
              onClick={async () => {
                setAIResponse("Analisando o texto...");
                const text = contentStore.content;

                try {
                  const res = await aiTextAnalyze(text, ease);

                  for await (const chunk of res) {
                    console.log(chunk);
                    setAIResponse(chunk);
                  }
                } catch (error) {
                  console.log(error);
                  setAIResponse(
                    "Houve um erro ao analisar seu texto. Tente de novo.",
                  );
                }
              }}
            >
              Analisar meu texto con IA!
            </Button>
            <span className="block text-sm text-zinc-500">
              * A funcionalidade de IA é experimental e PODE CONTER ERROS.
            </span>
          </div>
        ) : null}
      </div>
    </article>
  );
}
