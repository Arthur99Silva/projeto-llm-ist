// src/app/privacidade/page.tsx
'use client';

import Link from 'next/link';

export default function PrivacidadePage() {
  return (
    <>
      <style jsx>{`
        .privacy-container {
          min-height: calc(100vh - 64px);
          padding: 40px 16px;
          max-width: 800px;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .privacy-container {
            padding: 60px 24px;
          }
        }

        .page-header {
          text-align: center;
          margin-bottom: 48px;
          animation: fadeInDown 0.6s ease-out;
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .page-title {
          font-family: 'Quicksand', sans-serif;
          font-size: 2rem;
          font-weight: 700;
          color: #81D8D0;
          margin-bottom: 8px;
        }

        @media (min-width: 768px) {
          .page-title {
            font-size: 2.5rem;
          }
        }

        .update-date {
          color: #a8a8b8;
          font-size: 0.9rem;
        }

        .trust-banner {
          background: linear-gradient(135deg, rgba(129, 216, 208, 0.15) 0%, rgba(129, 216, 208, 0.05) 100%);
          border: 1px solid rgba(129, 216, 208, 0.3);
          border-radius: 20px;
          padding: 24px;
          margin-bottom: 40px;
          text-align: center;
          animation: fadeIn 0.6s ease-out 0.2s both;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .trust-icon {
          font-size: 3rem;
          margin-bottom: 12px;
        }

        .trust-title {
          font-family: 'Quicksand', sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #f5f5f5;
          margin-bottom: 8px;
        }

        .trust-text {
          color: #a8a8b8;
          line-height: 1.6;
        }

        .highlight {
          color: #81D8D0;
          font-weight: 600;
        }

        .policy-section {
          margin-bottom: 24px;
          animation: fadeInUp 0.6s ease-out;
          animation-fill-mode: both;
        }

        .policy-section:nth-child(3) { animation-delay: 0.1s; }
        .policy-section:nth-child(4) { animation-delay: 0.15s; }
        .policy-section:nth-child(5) { animation-delay: 0.2s; }
        .policy-section:nth-child(6) { animation-delay: 0.25s; }
        .policy-section:nth-child(7) { animation-delay: 0.3s; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .section-card {
          background: #1f2544;
          border-radius: 16px;
          padding: 24px;
          border: 1px solid rgba(129, 216, 208, 0.1);
          transition: all 0.3s ease;
        }

        .section-card:hover {
          border-color: rgba(129, 216, 208, 0.3);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .section-number {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #81D8D0 0%, #5fb8b0 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: #1a1a2e;
          font-size: 0.9rem;
          flex-shrink: 0;
        }

        .section-title {
          font-family: 'Quicksand', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #f5f5f5;
        }

        .section-content {
          color: #a8a8b8;
          line-height: 1.8;
          font-size: 0.95rem;
        }

        .commitment-box {
          background: linear-gradient(135deg, rgba(129, 216, 208, 0.1) 0%, rgba(174, 130, 217, 0.1) 100%);
          border-radius: 16px;
          padding: 24px;
          margin-top: 40px;
          text-align: center;
          border: 1px solid rgba(129, 216, 208, 0.2);
        }

        .commitment-icon {
          font-size: 2.5rem;
          margin-bottom: 12px;
        }

        .commitment-title {
          font-family: 'Quicksand', sans-serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: #f5f5f5;
          margin-bottom: 12px;
        }

        .commitment-text {
          color: #a8a8b8;
          line-height: 1.7;
          max-width: 600px;
          margin: 0 auto;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #81D8D0;
          text-decoration: none;
          font-weight: 500;
          margin-top: 40px;
          padding: 12px 20px;
          background: rgba(129, 216, 208, 0.1);
          border-radius: 12px;
          transition: all 0.2s ease;
        }

        .back-link:hover {
          background: rgba(129, 216, 208, 0.2);
          transform: translateX(-4px);
          text-decoration: none;
        }
      `}</style>

      <div className="privacy-container">
        <header className="page-header">
          <h1 className="page-title">Política de Privacidade</h1>
          <p className="update-date">Última atualização: 15 de Junho de 2025</p>
        </header>

        <div className="trust-banner">
          <div className="trust-icon">🔒</div>
          <h2 className="trust-title">Sua privacidade é nossa prioridade máxima</h2>
          <p className="trust-text">
            Esta plataforma foi desenhada desde o início com o princípio fundamental do <span className="highlight">anonimato total</span>.
          </p>
        </div>

        <section className="policy-section">
          <div className="section-card">
            <div className="section-header">
              <span className="section-number">1</span>
              <h3 className="section-title">Coleta de Informações</h3>
            </div>
            <div className="section-content">
              <p>
                Nós <span className="highlight">não coletamos, solicitamos, ou armazenamos</span> qualquer tipo de informação de identificação pessoal, como nome, e-mail, endereço IP, ou dados de localização.
              </p>
            </div>
          </div>
        </section>

        <section className="policy-section">
          <div className="section-card">
            <div className="section-header">
              <span className="section-number">2</span>
              <h3 className="section-title">Armazenamento de Conversas</h3>
            </div>
            <div className="section-content">
              <p>
                As conversas que você tem com nossas personas <span className="highlight">não são salvas em nossos servidores</span>. O histórico da sua conversa atual existe apenas na memória do seu navegador (no seu próprio dispositivo) e é enviado para a API de inteligência artificial para manter o contexto durante a sessão. Ao fechar a aba ou limpar o histórico no site, a conversa é permanentemente perdida.
              </p>
            </div>
          </div>
        </section>

        <section className="policy-section">
          <div className="section-card">
            <div className="section-header">
              <span className="section-number">3</span>
              <h3 className="section-title">Uso de Cookies</h3>
            </div>
            <div className="section-content">
              <p>
                Nós não utilizamos cookies ou outras tecnologias de rastreamento para monitorar sua atividade no site ou em outros lugares na internet.
              </p>
            </div>
          </div>
        </section>

        <section className="policy-section">
          <div className="section-card">
            <div className="section-header">
              <span className="section-number">4</span>
              <h3 className="section-title">Interação com a Inteligência Artificial</h3>
            </div>
            <div className="section-content">
              <p>
                Para fornecer as respostas, nosso sistema se comunica com a API do Google Gemini. As conversas enviadas são processadas pela IA para gerar uma resposta contextual. Recomendamos que você não insira dados pessoais sensíveis nas conversas. A política de privacidade do Google se aplica ao uso de seus serviços.
              </p>
            </div>
          </div>
        </section>

        <section className="policy-section">
          <div className="section-card">
            <div className="section-header">
              <span className="section-number">5</span>
              <h3 className="section-title">Compromisso</h3>
            </div>
            <div className="section-content">
              <p>
                Nosso compromisso é fornecer um espaço seguro, anônimo e educativo. Se você tiver qualquer dúvida sobre nossa política de privacidade, por favor, entenda que, por não coletarmos seus dados, não temos como entrar em contato. Nosso código e nossas práticas são focados em garantir que sua identidade nunca seja exposta através do uso desta plataforma.
              </p>
            </div>
          </div>
        </section>

        <div className="commitment-box">
          <div className="commitment-icon">💚</div>
          <h3 className="commitment-title">Seu bem-estar, nossa missão</h3>
          <p className="commitment-text">
            Acreditamos que todos merecem acesso a informações de saúde sexual de qualidade, sem medo de julgamento ou exposição. É por isso que construímos esta plataforma pensando em você.
          </p>
        </div>

        <Link href="/" className="back-link">
          ← Voltar para o chat
        </Link>
      </div>
    </>
  );
}