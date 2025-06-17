// cole isso em src/app/api/generate/route.ts
import { google } from '@ai-sdk/google';
import { streamText, CoreMessage } from 'ai';
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
      temperature: 0.7,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error('[API_ERROR]', error);
    if (error instanceof Error) {
      return new Response(error.message, { status: 500 });
    }
    return new Response('Ocorreu um erro interno na API.', { status: 500 });
  }
}