import { IEase } from "@/store/readingStore";

export async function canUseAiFeature() {
  if (!("ai" in window)) return false;
  return (await (window as any).ai.canCreateTextSession()) === "readily";
}

export async function aiTextAnalyze(text: string, ease: IEase) {
  if (!(await canUseAiFeature())) {
    throw new Error("window.ai not found");
  }

  try {
    const model = await (window as any).ai.createTextSession();

    const promptText = `Por favor, analise o texto a seguir e forneça uma sugestão breve (no máximo, 2 ou 3 frases) do que melhorar nele para melhor entendimento. Seja direito. Ignore a formatação HTML e foque apenas no conteúdo textual.

    Texto para Análise:
    
    ${text}`;

    const res = await model.promptStreaming(promptText);

    return res as AsyncIterable<string>;
  } catch (error) {
    throw error;
  }
}
