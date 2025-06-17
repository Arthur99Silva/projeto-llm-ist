// src/app/sobre/page.tsx
export default function SobrePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="prose dark:prose-invert max-w-none">
        <h1>Sobre o Projeto</h1>
        <p>
          Com o avanço das tecnologias de IA generativa e modelos de linguagem natural (LLMs), surgiu a possibilidade de novas formas de comunicação e educação em saúde, principalmente entre populações jovens e conectadas digitalmente.
        </p>
        <p>
          Entretanto, a educação sexual e a prevenção de Infecções Sexualmente Transmissíveis (ISTs) ainda enfrentam resistências culturais, falta de políticas de base e barreiras emocionais como vergonha, estigma e desinformação.
        </p>
        <h2>Nossa Missão</h2>
        <p>
          Este projeto propõe o desenvolvimento de um sistema de apoio à conscientização sobre ISTs voltado a jovens adultos e adolescentes. Utilizando um chatbot baseado em LLMs com múltiplas personas, buscamos falar com o usuário de maneira empática e contextualizada.
        </p>
        <p>
          O objetivo do sistema é complementar e fortalecer os meios formais de educação sexual e prevenção, fornecendo um <strong>ambiente anônimo, acessível e acolhedor</strong> para os usuários.
        </p>
        <h2>Nossas Personas</h2>
        <ul>
          <li><strong>Mano Consciente:</strong> Linguagem informal da "quebrada", tratamento de amigo, gírias da periferia, sincero, sem julgamentos.</li>
          <li><strong>Professora Amanda:</strong> Didática, sem julgamentos, explicativa, focada em sintomas e prevenção.</li>
          <li><strong>Influencer Lola:</strong> Respeitosa, linguagem de amiga, focada no público feminino, empoderamento sexual, gírias e atual.</li>
        </ul>
        <p>
          Todas as nossas personas são programadas para respeitar os direitos de gênero e os direitos da comunidade LGBTQIA+.
        </p>
      </div>
    </div>
  );
}