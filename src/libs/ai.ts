import { IEase } from "@/store/readingStore";

export async function canUseAiFeature() {
  if (!("ai" in window)) return false;
  return (
    (await (window as any).ai?.assistant.capabilities()).available === "readily"
  );
}

export async function aiTextAnalyze(text: string, ease: IEase) {
  if (!(await canUseAiFeature())) {
    throw new Error("window.ai not found");
  }

  try {
    const session = await (window as any).ai.assistant.create();

    const promptText = `<info>
    Por favor, analise o texto a seguir e forneça uma sugestão breve (no máximo, 2 ou 3 frases) do que melhorar no texto para melhor entendimento. Seja direito e não faça citações do texto.
    
    Se o texto a seguir for perigoso, ofensivo ou inapropriado, por favor, somente informe ao usuário o seguinte texto: "O texto não é adequado para análise.".
    </info>

    Texto para Análise:
    
    ${text}`;

    const res = await session.promptStreaming(promptText);

    return res as AsyncIterable<string>;
  } catch (error) {
    throw error;
  }
}
