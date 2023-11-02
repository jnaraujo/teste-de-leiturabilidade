"use client";

import { easeToLabel } from "@/libs/ReadingEase";
import { useReadingStore } from "@/store/readingStore";
import { useRef, useState } from "react";
import { PanelBottomClose, PanelBottomOpen } from "lucide-react";
import { cn } from "@/libs/utils";
import Tooltip from "@/components/Tooltip";
import { getReadingTimeByWords, secondsToHMS } from "@/utils";
import { useConfigStore } from "@/store/configStore";
import { Checkbox } from "@/components/ui/checkbox";
import { useStore } from "@/hooks/useStore";

interface Props {
  isPanelOpen?: boolean;
}

export default function Aside({ isPanelOpen = true }: Props) {
  const { ease } = useReadingStore();
  const config = useStore(useConfigStore, (state) => state.config);
  const { setConfig } = useConfigStore();
  const ref = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(isPanelOpen);

  function base100ToSlideBarSize(value: number) {
    if (!ref.current) return 0;

    const sliderWidth = ref.current.offsetWidth;
    const formula = value * (sliderWidth / 100);

    return Math.max(Math.min(formula, sliderWidth - 6), 2);
  }

  const sliderWidth = base100ToSlideBarSize(ease.index);

  return (
    <aside className="sticky top-4 h-fit w-full overflow-hidden rounded-lg border border-zinc-300 bg-zinc-100 shadow-sm">
      <div className="flex items-start justify-between p-2">
        <p className="mt-1 text-sm text-zinc-700">
          Seu texto está no nível de leitura de{" "}
          <strong className="font-semibold">{easeToLabel(ease.index)}</strong>
        </p>

        <Tooltip text={isOpen ? "Fechar painel" : "Abrir painel"}>
          <button
            className={cn(
              "h-8 w-8 text-zinc-700 transition-colors duration-200",
            )}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Fechar painel" : "Abrir painel"}
          >
            {isOpen ? <PanelBottomOpen /> : <PanelBottomClose />}
          </button>
        </Tooltip>
      </div>
      <div
        className={cn("relative h-3 w-full overflow-hidden", {
          "mx-auto h-4 w-[95%] rounded-lg": isOpen,
        })}
      >
        <div
          className="absolute h-full w-1 rounded-lg bg-zinc-700"
          style={{ left: `${sliderWidth}px` }}
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
          <h2 className="text-base font-semibold text-zinc-700">
            Configurações do editor:
          </h2>

          <div className="flex gap-2">
            <Checkbox
              id="highlight"
              className="mt-[3px]"
              checked={config?.highlight ?? false}
              onCheckedChange={(state) => {
                setConfig("highlight", state);
              }}
            />

            <label htmlFor="highlight" className="text-sm text-zinc-700">
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
            />

            <label htmlFor="tips" className="text-sm text-zinc-700">
              Mostrar dicas de como melhorar o texto
            </label>
          </div>
        </div>

        <div className="space-y-1">
          <h2 className="text-base font-semibold text-zinc-700">
            Mais sobre seu texto:
          </h2>
          <div className="flex gap-2 text-sm text-zinc-700">
            <strong className="font-semibold">Tempo de leitura:</strong>
            <span>{secondsToHMS(getReadingTimeByWords(ease.words))}</span>
          </div>
          <div className="flex gap-2 text-sm text-zinc-700">
            <strong>Palavras:</strong>
            <p>{ease.words}</p>
          </div>
          <div className="flex gap-2 text-sm text-zinc-700">
            <strong>Frases:</strong>
            <p>{ease.sentences}</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
