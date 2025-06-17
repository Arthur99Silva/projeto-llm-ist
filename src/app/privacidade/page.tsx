// src/app/privacidade/page.tsx
export default function PrivacidadePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="prose dark:prose-invert max-w-none">
        <h1>Política de Privacidade</h1>
        <p>Última atualização: 15 de Junho de 2025</p>
        <p>
          Sua privacidade é nossa prioridade máxima. Esta plataforma foi desenhada desde o início com o princípio fundamental do <strong>anonimato total</strong>.
        </p>
        
        <h2>1. Coleta de Informações</h2>
        <p>
          Nós <strong>não coletamos, solicitamos, ou armazenamos</strong> qualquer tipo de informação de identificação pessoal, como nome, e-mail, endereço IP, ou dados de localização.
        </p>

        <h2>2. Armazenamento de Conversas</h2>
        <p>
          As conversas que você tem com nossas personas <strong>não são salvas em nossos servidores</strong>. O histórico da sua conversa atual existe apenas na memória do seu navegador (no seu próprio dispositivo) e é enviado para a API de inteligência artificial para manter o contexto durante a sessão. Ao fechar a aba ou limpar o histórico no site, a conversa é permanentemente perdida.
        </p>

        <h2>3. Uso de Cookies</h2>
        <p>
          Nós não utilizamos cookies ou outras tecnologias de rastreamento para monitorar sua atividade no site ou em outros lugares na internet.
        </p>
        
        <h2>4. Interação com a Inteligência Artificial</h2>
        <p>
          Para fornecer as respostas, nosso sistema se comunica com a API do Google Gemini. As conversas enviadas são processadas pela IA para gerar uma resposta contextual. Recomendamos que você não insira dados pessoais sensíveis nas conversas. A política de privacidade do Google se aplica ao uso de seus serviços.
        </p>
        
        <h2>5. Compromisso</h2>
        <p>
          Nosso compromisso é fornecer um espaço seguro, anônimo e educativo. Se você tiver qualquer dúvida sobre nossa política de privacidade, por favor, entenda que, por não coletarmos seus dados, não temos como entrar em contato. Nosso código e nossas práticas são focados em garantir que sua identidade nunca seja exposta através do uso desta plataforma.
        </p>
      </div>
    </div>
  );
}