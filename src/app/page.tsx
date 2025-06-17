// src/app/page.tsx

'use client';

import { useState } from 'react';
import { useChat } from 'ai/react';
import type { PersonaKey } from '../../lib/prompts'; // Importa o tipo

// Nomes amigáveis para exibir nos botões
const personaNames: Record<PersonaKey, string> = {
  professora_amanda: 'Professora Amanda',
  mano_consciente: 'Mano Consciente',
  influencer_lola: 'Influencer Lola',
};

export default function Chat() {
  const [persona, setPersona] = useState<PersonaKey>('professora_amanda');

  const { messages, input, handleInputChange, handleSubmit, setMessages } =
    useChat({
      api: '/api/generate',
      // Envia a persona selecionada no corpo de cada requisição para a API
      body: {
        persona,
      },
    });

  const handlePersonaChange = (newPersona: PersonaKey) => {
    setPersona(newPersona);
    // Limpa o histórico de mensagens ao trocar de persona
    setMessages([]);
  };

  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto py-6 h-[calc(100vh-64px)] bg-white dark:bg-black">
      {/* Seletor de Personas */}
      <div className="flex justify-center flex-wrap gap-2 p-4 border-b dark:border-gray-700">
        {(Object.keys(personaNames) as PersonaKey[]).map((key) => (
          <button
            key={key}
            onClick={() => handlePersonaChange(key)}
            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors ${
              persona === key
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            {personaNames[key]}
          </button>
        ))}
      </div>

      {/* Container das Mensagens */}
      <div className="flex-grow overflow-y-auto p-4 space-y-4">
        {messages.length > 0 ? (
          messages.map((m) => (
            <div
              key={m.id}
              className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs md:max-w-md p-3 rounded-lg whitespace-pre-wrap ${
                  m.role === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200'
                }`}
              >
                <strong>{m.role === 'user' ? 'Você' : personaNames[persona]}: </strong>
                {m.content}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-400">
            Você está conversando com <strong>{personaNames[persona]}</strong>. Envie sua dúvida.
          </div>
        )}
      </div>

      {/* Formulário de Envio de Mensagem */}
      <form onSubmit={handleSubmit} className="p-4 border-t dark:border-gray-700">
        <div className="flex rounded-lg shadow-sm">
          <input
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-l-md focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200"
            value={input}
            placeholder={`Converse com ${personaNames[persona]}...`}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-r-md hover:bg-blue-700 disabled:opacity-50"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}