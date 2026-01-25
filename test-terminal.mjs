// test-terminal.mjs
import { google } from '@ai-sdk/google';
import { generateText } from 'ai';
import fs from 'fs';
import path from 'path';

// 1. Ler a chave de API manualmente do arquivo .env.local
// (Fazemos isso porque o Node puro não lê .env sozinho sem bibliotecas extras)
console.log("🔍 Lendo arquivo .env.local...");

try {
  const envPath = path.resolve(process.cwd(), '.env.local');
  const envFile = fs.readFileSync(envPath, 'utf8');
  
  // Procura a linha que começa com GOOGLE_GENERATIVE_AI_API_KEY
  const keyLine = envFile.split('\n').find(line => line.startsWith('GOOGLE_GENERATIVE_AI_API_KEY='));
  
  if (!keyLine) {
    throw new Error("Chave não encontrada dentro do arquivo.");
  }

  // Limpa a chave (tira espaços, aspas se tiver)
  const apiKey = keyLine.split('=')[1].trim().replace(/["']/g, '');
  process.env.GOOGLE_GENERATIVE_AI_API_KEY = apiKey;
  
  console.log(`✅ Chave encontrada! (Início: ${apiKey.substring(0, 8)}...)`);

} catch (error) {
  console.error("❌ Erro ao ler .env.local:", error.message);
  console.error("👉 Dica: Se der erro aqui, edite este script e cole sua chave direto na linha do process.env");
  process.exit(1);
}

// 2. Tentar gerar texto com o Google Gemini
async function runTest() {
  console.log("🤖 Conectando ao Gemini 1.5 Flash...");

  try {
    const { text } = await generateText({
      model: google('gemini-2.5-flash'),
      prompt: 'Responda apenas com: "Olá! O Gemini está funcionando no terminal."',
    });

    console.log("\n🎉 SUCESSO! Resposta do Gemini:");
    console.log("---------------------------------------------------");
    console.log(text);
    console.log("---------------------------------------------------");

  } catch (error) {
    console.error("\n💥 FALHA NA CONEXÃO COM A API:");
    console.error(error);
  }
}

runTest();