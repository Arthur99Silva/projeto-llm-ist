// src/app/page.tsx

'use client';

import { useState } from 'react';
import { useChat } from 'ai/react';
import type { PersonaKey } from '../../lib/prompts';

const personaNames: Record<PersonaKey, string> = {
  professora_amanda: 'Professora Amanda',
  mano_consciente: 'Mano Consciente',
  influencer_lola: 'Influencer Lola',
};

const personaButtonStyles: Record<PersonaKey, string> = {
  professora_amanda: 'bg-[#D99E82] hover:bg-[#D99E82]/90',
  mano_consciente: 'bg-[#D7D982] hover:bg-[#D7D982]/90',
  influencer_lola: 'bg-[#AE82D9] hover:bg-[#AE82D9]/90',
};

const personaBubbleStyles: Record<PersonaKey, string> = {
  professora_amanda: 'bg-[#D99E82] text-white',
  mano_consciente: 'bg-[#D7D982] text-black',
  influencer_lola: 'bg-[#AE82D9] text-white',
};

const personaIntroductions: Record<PersonaKey, string> = {
  professora_amanda: 'Olá! Sou a Professora Amanda. Estou aqui para te ajudar a entender mais sobre saúde sexual de forma clara e sem julgamentos. Suas conversas são 100% anônimas. Pode perguntar!',
  mano_consciente: 'E aí amigo? Beleza? Sou o Mano Consciente. Tô aqui pra te dar um papo reto e te ajudar a se cuidar melhor. Suas conversas são 100% anônimas. Manda ver nas perguntas!',
  influencer_lola: 'Oii, amiga! Aqui é a Lola! Vamos conversar sobre bem-estar e autoestima? Meu foco é te deixar 100% empoderada e segura. Suas conversas são 100% anônimas. Vem comigo!',
};

export default function Chat() {
  const [persona, setPersona] = useState<PersonaKey>('professora_amanda');

  const { messages, input, handleInputChange, handleSubmit, setMessages } = useChat({
    api: '/api/generate',
    body: {
      persona,
    },
    onFinish() {
      console.log('Resposta completa recebida.');
    },
  });

  const handlePersonaChange = (newPersona: PersonaKey) => {
    setPersona(newPersona);
    setMessages([]);
  };

  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto py-6 h-[calc(100vh-64px)]">
      {/* Seletor de Personas */}
      <div className="flex justify-center flex-wrap gap-4 p-4 border-b border-gray-600">
        {(Object.keys(personaNames) as PersonaKey[]).map((key) => (
          <button
            key={key}
            onClick={() => handlePersonaChange(key)}
            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all text-white ${
              personaButtonStyles[key]
            } ${
              persona === key
                ? 'ring-2 ring-offset-2 ring-[#81D8D0] ring-offset-gray-800'
                : 'ring-0'
            }`}
          >
            {personaNames[key]}
          </button>
        ))}
      </div>

      {/* Container principal do chat com o disclaimer */}
      <div className="flex flex-col flex-grow bg-[#25242b] rounded-b-lg shadow-inner overflow-hidden">
        
        {/* ===== AVISO (DISCLAIMER) ADICIONADO AQUI ===== */}
        <div className="p-2 text-center text-xs text-gray-300 bg-black/20 border-b border-gray-600">
          <p>Esta ferramenta é informativa e não substitui uma consulta médica. Procure um profissional de saúde.</p>
        </div>

        {/* Área de Mensagens */}
        <div className="flex-grow overflow-y-auto p-4 space-y-4">
          {/* Mostra a introdução apenas se não houver mensagens */}
          {messages.length === 0 && (
            <div className="text-center p-6">
              <p className="text-sm italic text-gray-300">
                {personaIntroductions[persona]}
              </p>
            </div>
          )}

          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs md:max-w-md p-3 rounded-lg whitespace-pre-wrap ${
                  m.role === 'user'
                    ? 'bg-[#81D8D0] text-black'
                    : personaBubbleStyles[persona]
                }`}
              >
                <strong>{m.role === 'user' ? 'Você' : personaNames[persona]}: </strong>
                {m.content}
              </div>
            </div>
          ))}
        </div>

        {/* Formulário de Envio */}
        <form onSubmit={handleSubmit} className="p-4 border-t border-gray-600">
          <div className="flex rounded-lg shadow-sm">
            <input
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-l-md focus:ring-[#81D8D0] focus:border-[#81D8D0] bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200"
              value={input}
              placeholder={`Converse com ${personaNames[persona]}...`}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#81D8D0] text-black font-semibold rounded-r-md hover:bg-[#81D8D0]/90 disabled:opacity-50"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}