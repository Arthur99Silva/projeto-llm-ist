// src/app/sobre/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function SobrePage() {
  return (
    <>
      <style jsx>{`
        .about-container {
          min-height: calc(100vh - 64px);
          padding: 40px 16px;
          max-width: 800px;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .about-container {
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

        .page-subtitle {
          color: #a8a8b8;
          font-size: 1rem;
        }

        .content-section {
          margin-bottom: 40px;
          animation: fadeInUp 0.6s ease-out;
          animation-fill-mode: both;
        }

        .content-section:nth-child(2) { animation-delay: 0.1s; }
        .content-section:nth-child(3) { animation-delay: 0.2s; }
        .content-section:nth-child(4) { animation-delay: 0.3s; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .section-title {
          font-family: 'Quicksand', sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #f5f5f5;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .section-icon {
          font-size: 1.5rem;
        }

        .section-content {
          color: #a8a8b8;
          line-height: 1.8;
          font-size: 1rem;
        }

        .section-content p {
          margin-bottom: 16px;
        }

        .highlight {
          color: #81D8D0;
          font-weight: 600;
        }

        .objectives-list {
          list-style: none;
          padding: 0;
          margin: 16px 0 0 0;
        }

        .objective-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px 0;
          border-bottom: 1px solid rgba(129, 216, 208, 0.1);
        }

        .objective-item:last-child {
          border-bottom: none;
        }

        .objective-icon {
          color: #81D8D0;
          font-size: 1.2rem;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .objective-text {
          color: #a8a8b8;
          line-height: 1.6;
        }

        .hypothesis-box {
          background: linear-gradient(135deg, rgba(129, 216, 208, 0.1) 0%, rgba(174, 130, 217, 0.1) 100%);
          border-radius: 16px;
          padding: 20px;
          border-left: 4px solid #81D8D0;
          margin-top: 16px;
        }

        .hypothesis-label {
          font-size: 0.75rem;
          color: #81D8D0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
          font-weight: 600;
        }

        .hypothesis-text {
          color: #f5f5f5;
          font-style: italic;
          line-height: 1.7;
        }

        .divider {
          border: none;
          border-top: 1px solid rgba(129, 216, 208, 0.2);
          margin: 40px 0;
        }

        .author-card {
          background: #1f2544;
          border-radius: 20px;
          padding: 24px;
          border: 1px solid rgba(129, 216, 208, 0.2);
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        @media (min-width: 640px) {
          .author-card {
            flex-direction: row;
            align-items: flex-start;
          }
        }

        .university-logo {
          flex-shrink: 0;
          text-align: center;
        }

        .university-logo a {
          display: inline-block;
          transition: transform 0.2s ease;
        }

        .university-logo a:hover {
          transform: scale(1.05);
        }

        .author-info {
          flex: 1;
        }

        .author-info p {
          color: #a8a8b8;
          line-height: 1.7;
          margin-bottom: 16px;
        }

        .author-info p:first-child {
          margin-top: 0;
        }

        .author-list {
          list-style: none;
          padding: 0;
          margin: 0 0 16px 0;
        }

        .author-list li {
          color: #a8a8b8;
          padding: 4px 0;
        }

        .author-list strong {
          color: #f5f5f5;
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

      <div className="about-container">
        <header className="page-header">
          <h1 className="page-title">Sobre o Projeto "Espaço Acolher"</h1>
        </header>

        <section className="content-section">
          <h2 className="section-title">
            <span className="section-icon">-</span>
            Contexto e Motivação
          </h2>
          <div className="section-content">
            <p>
              O Brasil enfrenta um cenário preocupante no que diz respeito às <span className="highlight">Infecções Sexualmente Transmissíveis (ISTs)</span>, com um aumento significativo na prevalência entre jovens de 15 a 24 anos. Este fenômeno é agravado pela desinformação e por barreiras culturais e emocionais, como a vergonha e o medo do julgamento, que fazem com que muitos jovens evitem os canais formais de saúde.
            </p>
            <p>
              Nesse contexto, o "Espaço Acolher" foi concebido como um sistema de chatbots para fortalecer os canais de educação sexual no Brasil, oferecendo um ambiente digitalmente acessível, <span className="highlight">anônimo e acolhedor</span> para que jovens possam buscar orientação sobre saúde sexual de forma segura.
            </p>
          </div>
        </section>

        <section className="content-section">
          <h2 className="section-title">
            <span className="section-icon">-</span>
            Objetivos da Pesquisa
          </h2>
          <div className="section-content">
            <p>
              O objetivo principal desta pesquisa é avaliar a aceitação e a usabilidade da plataforma "Espaço Acolher". A investigação busca verificar se a ferramenta oferece um ambiente onde os usuários se sintam seguros para tirar dúvidas e obter informações confiáveis sobre saúde sexual, incentivando-os a procurar atendimento nos serviços de saúde quando necessário.
            </p>
            
            <p>Como objetivos secundários, o estudo visa:</p>
            
            <ul className="objectives-list">
              <li className="objective-item">
                <span className="objective-icon">✓</span>
                <span className="objective-text">Analisar as preferências dos usuários em relação às diferentes estratégias de interação oferecidas pelos chatbots.</span>
              </li>
              <li className="objective-item">
                <span className="objective-icon">✓</span>
                <span className="objective-text">Identificar os fatores que influenciam a aceitação de novas tecnologias voltadas para a saúde, especialmente em temas delicados.</span>
              </li>
            </ul>

            <div className="hypothesis-box">
              <div className="hypothesis-label">Hipótese Central</div>
              <p className="hypothesis-text">
                A hipótese central é que um sistema anônimo e empático, baseado em Inteligência Artificial, pode reduzir as barreiras que impedem os jovens de se informarem adequadamente sobre ISTs, resultando em maior conscientização e bem-estar.
              </p>
            </div>
          </div>
        </section>

        <hr className="divider" />

        <section className="content-section">
          <h2 className="section-title">
            <span className="section-icon">-</span>
            Realização
          </h2>
          <div className="author-card">
            <div className="university-logo">
              <a href="https://www.ufsj.edu.br" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/ufsj_logo.png"
                  alt="Logo da UFSJ"
                  width={120}
                  height={60}
                />
              </a>
            </div>
            <div className="author-info">
              <p>
                Este projeto é um Trabalho de Conclusão de Curso do bacharelado em Ciência da Computação da <strong>Universidade Federal de São João del-Rei (UFSJ)</strong>.
              </p>
              <ul className="author-list">
                <li><strong>Autor:</strong> Arthur Antunes Santos Silva</li>
                <li><strong>Orientador:</strong> Prof. Dr. Dárlinton Barbosa Feres Carvalho</li>
                <li><strong>Coorientadora:</strong> Prof.ª Dr.ª Glaúcia Sousa Vilela</li>
              </ul>
              <p>
                Desenvolvido no âmbito do Departamento de Ciência da Computação (DCOMP), o trabalho representa a aplicação de pesquisa científica e tecnologia para propor soluções inovadoras a desafios da saúde pública no Brasil.
              </p>
            </div>
          </div>
        </section>

        <Link href="/" className="back-link">
          ← Voltar para o chat
        </Link>
      </div>
    </>
  );
}