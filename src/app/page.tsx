// src/app/page.tsx (Versão Final com fetch manual)

'use client';

import { useState, FormEvent } from 'react';
import type { PersonaKey } from '../../lib/prompts';

// Definimos o tipo de uma mensagem para usar no nosso estado
interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

const personaNames: Record<PersonaKey, string> = {
  professora_amanda: 'Professora Amanda',
  mano_consciente: 'Mano Consciente',
  influencer_lola: 'Influencer Lola',
};

export default function Chat() {
  const [persona, setPersona] = useState<PersonaKey>('professora_amanda');
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userInput: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
    };

    // Adiciona a mensagem do usuário e uma mensagem vazia para a assistente
    const newMessages = [...messages, userInput];
    setMessages(newMessages);
    setInput('');

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: newMessages,
          persona: persona,
        }),
      });

      if (!response.ok) {
        throw new Error('A resposta da rede não foi OK');
      }

      if (!response.body) {
        throw new Error('A resposta não contém um corpo');
      }

      // Prepara para ler o stream
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantResponse = '';
      let assistantMessageAdded = false;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        assistantResponse += decoder.decode(value, { stream: true });

        // Adiciona a mensagem da assistente ao estado na primeira vez
        if (!assistantMessageAdded) {
          assistantMessageAdded = true;
          setMessages(prevMessages => [
            ...prevMessages,
            { id: 'assistant-response', role: 'assistant', content: assistantResponse }
          ]);
        } else {
          // Atualiza a última mensagem (da assistente) com o novo conteúdo
          setMessages(prevMessages => {
            const lastMessage = prevMessages[prevMessages.length - 1];
            if (lastMessage && lastMessage.role === 'assistant') {
              lastMessage.content = assistantResponse;
              return [...prevMessages];
            }
            return prevMessages;
          });
        }
      }
    } catch (error) {
      console.error('Falha ao obter a resposta do chat:', error);
      // Opcional: Adicionar uma mensagem de erro na UI
      setMessages(prev => [...prev, {id: 'error', role: 'assistant', content: 'Desculpe, não consegui responder.'}]);
    }
  };

  const handlePersonaChange = (newPersona: PersonaKey) => {
    setPersona(newPersona);
    setMessages([]);
  };

  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto py-6 h-[calc(100vh-64px)] bg-white dark:bg-black">
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

      <div className="flex-grow overflow-y-auto p-4 space-y-4">
        {messages.map((m) => (
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
        ))}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t dark:border-gray-700">
        <div className="flex rounded-lg shadow-sm">
          <input
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-l-md focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200"
            value={input}
            placeholder={`Converse com ${personaNames[persona]}...`}
            onChange={(e) => setInput(e.target.value)}
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