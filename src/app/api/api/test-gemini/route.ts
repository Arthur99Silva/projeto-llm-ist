// src/app/api/test-gemini/route.ts
import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

// Pega a chave de API das variáveis de ambiente
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function GET() {
  console.log('--- INICIANDO ROTA DE TESTE DIRETO COM GEMINI ---');
  
  if (!process.env.GEMINI_API_KEY) {
    console.error('Chave de API do Gemini não encontrada nas variáveis de ambiente.');
    return NextResponse.json(
      { error: 'Chave de API do Gemini não configurada.' },
      { status: 500 }
    );
  }

  try {
    console.log('Tentando obter o modelo generativo...');
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    
    console.log('Enviando prompt de teste para o modelo...');
    const result = await model.generateContent('Olá, mundo! Responda apenas com "OK".');
    const response = result.response;
    const text = response.text();

    console.log('--- TESTE BEM-SUCEDIDO ---');
    console.log('Resposta do Gemini:', text);

    return NextResponse.json({
      message: 'Teste de conexão com o Gemini bem-sucedido!',
      response: text,
    });

  } catch (error: any) {
    console.error('--- ERRO NO TESTE DIRETO COM GEMINI ---');
    console.error('Ocorreu um erro ao se comunicar com a API do Google:', error);
    
    // Retorna o erro detalhado para facilitar o diagnóstico
    return NextResponse.json(
      { 
        error: 'Falha ao se comunicar com a API do Gemini.',
        details: error.message || 'Erro desconhecido',
        // A propriedade 'cause' pode conter informações valiosas da API do Google
        cause: error.cause,
      },
      { status: 500 }
    );
  }
}