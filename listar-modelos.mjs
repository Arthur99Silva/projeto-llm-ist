// listar-modelos.mjs
import fs from 'fs';
import path from 'path';

// 1. Ler a chave do seu arquivo .env.local
try {
  const envPath = path.resolve(process.cwd(), '.env.local');
  const envFile = fs.readFileSync(envPath, 'utf8');
  const apiKeyLine = envFile.split('\n').find(l => l.startsWith('GOOGLE_GENERATIVE_AI_API_KEY='));
  
  if (!apiKeyLine) throw new Error("Chave não encontrada no .env.local");
  
  const apiKey = apiKeyLine.split('=')[1].trim().replace(/["']/g, '');

  console.log("🔍 Consultando API do Google com sua chave...");

  // 2. Fazer uma requisição direta para listar modelos
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
  const data = await response.json();

  if (data.error) {
    console.error("\n❌ ERRO NA CONTA GOOGLE:");
    console.error(`Mensagem: ${data.error.message}`);
    console.error("Motivo provável: A API 'Generative Language API' não está ativada no seu projeto do Google Cloud.");
  } else if (data.models) {
    console.log("\n✅ MODELOS DISPONÍVEIS PARA VOCÊ:");
    console.log("-----------------------------------");
    // Filtra apenas os que servem para gerar texto (generateContent)
    const chatModels = data.models.filter(m => m.supportedGenerationMethods.includes("generateContent"));
    chatModels.forEach(m => console.log(`• ${m.name.replace('models/', '')}`));
    console.log("-----------------------------------");
  } else {
    console.log("🤔 Estranho... Nenhum erro, mas lista vazia.");
  }

} catch (error) {
  console.error("Erro ao rodar script:", error.message);
}