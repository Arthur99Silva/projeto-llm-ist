// src/app/sobre/page.tsx
import Image from 'next/image';

export default function SobrePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="prose dark:prose-invert max-w-none">
        <h1>Sobre o Projeto "Espaço Acolher"</h1>

        <h2>Contexto e Motivação</h2>
        <p>
          O Brasil enfrenta um cenário preocupante no que diz respeito às Infecções
          Sexualmente Transmissíveis (ISTs), com um aumento significativo na prevalência
          entre jovens de 15 a 24 anos. Este fenômeno é agravado pela desinformação
          e por barreiras culturais e emocionais, como a vergonha e o medo do julgamento,
          que fazem com que muitos jovens evitem os canais formais de saúde.
        </p>
        <p>
          Nesse contexto, o "Espaço Acolher" foi concebido como um sistema de chatbots
          para fortalecer os canais de educação sexual no Brasil, oferecendo um ambiente
          digitalmente acessível, anônimo e acolhedor para que jovens possam buscar
          orientação sobre saúde sexual de forma segura.
        </p>

        <h2>Objetivos da Pesquisa</h2>
        <p>
          O objetivo principal desta pesquisa é avaliar a aceitação e a usabilidade da
          plataforma "Espaço Acolher". A investigação busca verificar se a ferramenta
          oferece um ambiente onde os usuários se sintam seguros para tirar dúvidas
          e obter informações confiáveis sobre saúde sexual, incentivando-os a procurar
          atendimento nos serviços de saúde quando necessário.
        </p>
        <p>
          Como objetivos secundários, o estudo visa:
        </p>
        <ul>
          <li>
            Analisar as preferências dos usuários em relação às diferentes
            estratégias de interação oferecidas pelos chatbots.
          </li>
          <li>
            Identificar os fatores que influenciam a aceitação de novas tecnologias
            voltadas para a saúde, especialmente em temas delicados.
          </li>
        </ul>
        <p>
          A hipótese central é que um sistema anônimo e empático, baseado em Inteligência
          Artificial, pode reduzir as barreiras que impedem os jovens de se informarem
          adequadamente sobre ISTs, resultando em maior conscientização e bem-estar.
        </p>

        <hr className="my-8" />

        <h2>Realização</h2>
        <div className="flex flex-col sm:flex-row items-center gap-8 bg-gray-800/20 p-6 rounded-lg">
          <div className="flex-shrink-0">
            <a href="https://www.ufsj.edu.br" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/ufsj_logo.png"
                alt="Logo da UFSJ"
                width={120}
                height={60}
              />
            </a>
          </div>
          <div>
            <p className="mt-0">
              Este projeto é um Trabalho de Conclusão de Curso do
              bacharelado em Ciência da Computação da <strong>Universidade Federal de
              São João del-Rei (UFSJ)</strong>.
            </p>
            <ul className="list-none pl-0">
              <li><strong>Autor:</strong> Arthur Antunes Santos Silva</li>
              <li><strong>Orientador:</strong> Prof. Dr. Dárlinton Barbosa Feres Carvalho</li>
              {/* ===== LINHA ADICIONADA ===== */}
              <li><strong>Coorientadora:</strong> Prof.ª Dr.ª Glaúcia Sousa Vilela</li>
            </ul>
            <p>
              Desenvolvido no âmbito do Departamento de Ciência da Computação (DCOMP), o
              trabalho representa a aplicação de pesquisa científica e tecnologia para
              propor soluções inovadoras a desafios da saúde pública no Brasil.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}