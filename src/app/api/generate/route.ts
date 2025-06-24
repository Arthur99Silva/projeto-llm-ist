// src/app/api/generate/route.ts (Versão de Teste com import CORRIGIDO)

import { google } from '@ai-sdk/google';
import { generateText, CoreMessage } from 'ai'; // <--- LINHA CORRIGIDA
import { prompts, PersonaKey } from '@/lib/prompts';
import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(req: Request) {
  console.log('--- Requisição de Chat Recebida (Modo de Teste do Terminal) ---');
  try {
    const { messages, persona }: { messages: CoreMessage[]; persona: PersonaKey } = await req.json();
    console.log('[Terminal Test] Persona selecionada:', persona);

    const systemPrompt = prompts[persona] || prompts.professora_amanda;

    console.log('[Terminal Test] Chamando a API do Gemini e aguardando a resposta completa...');

    const { text } = await generateText({
      model: google('gemini-1.5-flash'),
      system: systemPrompt,
      messages: messages,
    });

    console.log('-------------------------------------------');
    console.log('RESPOSTA COMPLETA DO CHATBOT (NO TERMINAL):');
    console.log(text);
    console.log('-------------------------------------------');

    return NextResponse.json({ success: true, message: 'Resposta impressa no terminal do servidor.' });

  } catch (error) {
    console.error('[Terminal Test] Erro capturado:', error);
    const errorMessage = error instanceof Error ? error.message : 'Ocorreu um erro interno na API.';
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}