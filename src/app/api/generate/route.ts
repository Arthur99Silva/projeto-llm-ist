import { google } from '@ai-sdk/google';
import { streamText, CoreMessage } from 'ai';
import { prompts, PersonaKey } from '@/lib/prompts';

export const runtime = 'nodejs'; 

export async function POST(req: Request) {
  try {
    const { messages, persona }: { messages: CoreMessage[]; persona: PersonaKey } = await req.json();

    // Fallback de segurança
    const systemPrompt = prompts[persona] || prompts.professora_amanda;

    const result = await streamText({
      model: google('gemini-2.5-flash'), 
      system: systemPrompt,
      messages: messages,
    });

    return result.toDataStreamResponse();

  } catch (error) {
    console.error('[API ERROR]:', error);
    return new Response(JSON.stringify({ error: 'Erro ao processar resposta da IA' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}