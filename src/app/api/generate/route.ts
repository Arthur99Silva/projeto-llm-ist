// src/app/api/generate/route.ts

import { google } from '@ai-sdk/google';
import { streamText, CoreMessage } from 'ai'; // Remova a importação de StreamingTextResponse
import { prompts, PersonaKey } from '@/lib/prompts';

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const { messages, persona }: { messages: CoreMessage[]; persona: PersonaKey } = await req.json();

    const systemPrompt = prompts[persona] || prompts.professora_amanda;

    const result = await streamText({
      model: google('gemini-1.5-flash'),
      system: systemPrompt,
      messages: messages,
    });

    // CORREÇÃO FINAL:
    // Utilize o método toDataStreamResponse() sugerido pelo erro.
    // Ele já está disponível no objeto 'result' e faz todo o trabalho.
    return result.toDataStreamResponse();

  } catch (error) {
    console.error('[API-GENERATE-ERROR]', error);
    const errorMessage = error instanceof Error ? error.message : 'Ocorreu um erro desconhecido';
    
    // Retornando o erro em formato JSON
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}