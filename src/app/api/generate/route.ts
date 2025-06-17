// src/app/api/generate/route.ts (versão de depuração CORRIGIDA)
import { google } from '@ai-sdk/google';
import { streamText, CoreMessage } from 'ai';
import { prompts, PersonaKey } from '@/lib/prompts';

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const { messages, persona }: { messages: CoreMessage[]; persona: PersonaKey } = await req.json();
    console.log('API RECEBEU:', { persona });

    const systemPrompt = prompts[persona] || prompts.professora_amanda;

    const result = await streamText({
      model: google('gemini-1.5-flash'),
      system: systemPrompt,
      messages: messages,
      temperature: 0.7,
    });

    // --- INÍCIO DO CÓDIGO DE DEPURAÇÃO CORRIGIDO ---
    // Usando 'result.response' como sugerido pelo erro.
    const response = await result.response;
    console.log('--- RESPOSTA COMPLETA DA API DO GEMINI ---');
    console.log(JSON.stringify(response, null, 2));
    console.log('-----------------------------------------');

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
    // --- FIM DO CÓDIGO DE DEPURAÇÃO ---

  } catch (error) {
    console.error('[API_ERROR]', error);
    if (error instanceof Error) {
      return new Response(error.message, { status: 500 });
    }
    return new Response('Ocorreu um erro interno na API.', { status: 500 });
  }
}