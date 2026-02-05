'use client';

import { useState, useRef, useEffect } from 'react';
import { useChat } from 'ai/react';
import type { PersonaKey } from '@/lib/prompts';

const personaNames: Record<PersonaKey, string> = {
  professora_amanda: 'Professora Amanda',
  mano_consciente: 'Mano Consciente',
  influencer_lola: 'Influencer Lola',
};

const personaData: Record<PersonaKey, {
  emoji: string;
  description: string;
  color: string;
  colorLight: string;
  gradient: string;
  textColor: string;
}> = {
  professora_amanda: {
    emoji: '👩‍🏫',
    description: 'Educadora acolhedora',
    color: '#D99E82',
    colorLight: 'rgba(217, 158, 130, 0.15)',
    gradient: 'linear-gradient(135deg, #D99E82 0%, #C4856B 100%)',
    textColor: 'white',
  },
  mano_consciente: {
    emoji: '🤙',
    description: 'Seu parceiro de papo',
    color: '#D7D982',
    colorLight: 'rgba(215, 217, 130, 0.15)',
    gradient: 'linear-gradient(135deg, #D7D982 0%, #A8B545 100%)',
    textColor: 'black',
  },
  influencer_lola: {
    emoji: '✨',
    description: 'Empoderamento e autoestima',
    color: '#AE82D9',
    colorLight: 'rgba(174, 130, 217, 0.15)',
    gradient: 'linear-gradient(135deg, #AE82D9 0%, #9165BA 100%)',
    textColor: 'white',
  }
};

const personaIntroductions: Record<PersonaKey, string> = {
  professora_amanda: 'Olá! Sou a Professora Amanda. Estou aqui para te ajudar a entender mais sobre saúde sexual de forma clara e sem julgamentos. Suas conversas são 100% anônimas.',
  mano_consciente: 'E aí amigo? Beleza? Sou o Mano Consciente. Tô aqui pra te dar um papo reto e te ajudar a se cuidar melhor. Manda ver nas perguntas!',
  influencer_lola: 'Oii, amiga! Aqui é a Lola! Vamos conversar sobre bem-estar e autoestima? Meu foco é te deixar 100% empoderada e segura. Vem comigo!',
};

export default function Chat() {
  const [persona, setPersona] = useState<PersonaKey>('professora_amanda');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { messages, input, handleInputChange, handleSubmit, setMessages, isLoading } = useChat({
    api: '/api/generate',
    body: { persona },
    onError: (err) => {
      console.error("Erro no chat:", err);
      alert("Ocorreu um erro ao conectar com o chat. Verifique o console.");
    }
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handlePersonaChange = (newPersona: PersonaKey) => {
    setPersona(newPersona);
    setMessages([]);
  };

  const setQuickQuestion = (question: string) => {
    const inputEl = document.getElementById('chat-input') as HTMLInputElement;
    if (inputEl) {
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;
      nativeInputValueSetter?.call(inputEl, question);
      inputEl.dispatchEvent(new Event('input', { bubbles: true }));
      inputEl.focus();
    }
  };

  const currentPersona = personaData[persona];

  return (
    <>
      <style jsx>{`
        .chat-container {
          display: flex;
          flex-direction: column;
          min-height: calc(100vh - 64px);
          max-width: 900px;
          margin: 0 auto;
          padding: 16px;
        }

        @media (min-width: 768px) {
          .chat-container {
            padding: 24px;
          }
        }

        .header {
          text-align: center;
          margin-bottom: 20px;
          animation: fadeInDown 0.6s ease-out;
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .tagline {
          font-size: 0.9rem;
          color: #a8a8b8;
          font-weight: 500;
        }

        .persona-selector {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 16px;
          animation: fadeIn 0.6s ease-out 0.2s both;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @media (min-width: 640px) {
          .persona-selector {
            flex-direction: row;
            justify-content: center;
          }
        }

        .persona-button {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          border: 2px solid transparent;
          border-radius: 16px;
          background: #1f2544;
          color: #f5f5f5;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-family: inherit;
          font-weight: 600;
          font-size: 0.95rem;
        }

        .persona-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }

        .persona-button.active {
          border-color: #81D8D0;
          box-shadow: 0 0 20px rgba(129, 216, 208, 0.3);
        }

        .persona-emoji {
          font-size: 1.5rem;
        }

        .persona-info {
          text-align: left;
        }

        .persona-name {
          display: block;
          font-weight: 700;
        }

        .persona-desc {
          font-size: 0.75rem;
          color: #a8a8b8;
          font-weight: 500;
        }

        .chat-area {
          flex: 1;
          display: flex;
          flex-direction: column;
          background: #16213e;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
          animation: fadeInUp 0.6s ease-out 0.3s both;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .disclaimer {
          padding: 12px 16px;
          background: rgba(129, 216, 208, 0.1);
          border-bottom: 1px solid rgba(129, 216, 208, 0.2);
          text-align: center;
        }

        .disclaimer p {
          font-size: 0.8rem;
          color: #a8a8b8;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin: 0;
        }

        .disclaimer-icon {
          color: #81D8D0;
        }

        .messages-container {
          flex: 1;
          overflow-y: auto;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          min-height: 300px;
          max-height: calc(100vh - 380px);
        }

        @media (min-width: 768px) {
          .messages-container {
            min-height: 400px;
            max-height: calc(100vh - 350px);
          }
        }

        .welcome-screen {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 40px 20px;
        }

        .welcome-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          margin-bottom: 20px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .welcome-text {
          max-width: 400px;
          font-size: 1rem;
          line-height: 1.7;
          color: #a8a8b8;
          font-style: italic;
        }

        .welcome-hint {
          margin-top: 24px;
          padding: 12px 20px;
          background: rgba(129, 216, 208, 0.1);
          border-radius: 12px;
          font-size: 0.85rem;
          color: #81D8D0;
        }

        .quick-questions {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 20px;
          justify-content: center;
        }

        .quick-question {
          padding: 8px 16px;
          background: rgba(129, 216, 208, 0.1);
          border: 1px solid rgba(129, 216, 208, 0.2);
          border-radius: 20px;
          color: #a8a8b8;
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: inherit;
        }

        .quick-question:hover {
          background: rgba(129, 216, 208, 0.2);
          color: #81D8D0;
          border-color: #81D8D0;
        }

        .message {
          display: flex;
          animation: messageSlide 0.3s ease-out;
        }

        @keyframes messageSlide {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .message.user {
          justify-content: flex-end;
        }

        .message.assistant {
          justify-content: flex-start;
        }

        .message-bubble {
          max-width: 85%;
          padding: 14px 18px;
          border-radius: 20px;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        @media (min-width: 768px) {
          .message-bubble {
            max-width: 70%;
          }
        }

        .message.user .message-bubble {
          background: #81D8D0;
          color: #1a1a2e;
          border-bottom-right-radius: 6px;
        }

        .message.assistant .message-bubble {
          border-bottom-left-radius: 6px;
        }

        .message-sender {
          font-size: 0.75rem;
          font-weight: 700;
          margin-bottom: 4px;
          opacity: 0.9;
        }

        .message-content {
          white-space: pre-wrap;
        }

        .typing-indicator {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 14px 18px;
          background: #1f2544;
          border-radius: 20px;
          border-bottom-left-radius: 6px;
          width: fit-content;
        }

        .typing-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          animation: typingBounce 1.4s ease-in-out infinite;
        }

        .typing-dot:nth-child(2) { animation-delay: 0.2s; }
        .typing-dot:nth-child(3) { animation-delay: 0.4s; }

        @keyframes typingBounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-6px); }
        }

        .input-area {
          padding: 16px;
          background: #1f2544;
          border-top: 1px solid rgba(129, 216, 208, 0.2);
        }

        .input-form {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .input-field {
          flex: 1;
          padding: 14px 20px;
          border: 2px solid rgba(129, 216, 208, 0.2);
          border-radius: 24px;
          background: #16213e;
          color: #f5f5f5;
          font-size: 1rem;
          font-family: inherit;
          transition: all 0.3s ease;
          outline: none;
        }

        .input-field::placeholder {
          color: #a8a8b8;
        }

        .input-field:focus {
          border-color: #81D8D0;
          box-shadow: 0 0 0 3px rgba(129, 216, 208, 0.2);
        }

        .send-button {
          width: 50px;
          height: 50px;
          border: none;
          border-radius: 50%;
          background: #81D8D0;
          color: #1a1a2e;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          font-size: 1.2rem;
        }

        .send-button:hover:not(:disabled) {
          transform: scale(1.05);
          box-shadow: 0 5px 20px rgba(129, 216, 208, 0.4);
        }

        .send-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .privacy-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin-top: 16px;
          padding: 8px 16px;
          background: rgba(129, 216, 208, 0.1);
          border-radius: 20px;
          font-size: 0.75rem;
          color: #81D8D0;
          animation: fadeIn 0.6s ease-out 0.5s both;
        }

        .privacy-icon {
          font-size: 1rem;
        }

        .messages-container::-webkit-scrollbar {
          width: 6px;
        }

        .messages-container::-webkit-scrollbar-track {
          background: transparent;
        }

        .messages-container::-webkit-scrollbar-thumb {
          background: rgba(129, 216, 208, 0.3);
          border-radius: 3px;
        }

        .messages-container::-webkit-scrollbar-thumb:hover {
          background: #81D8D0;
        }
      `}</style>

      <div className="chat-container">
        <header className="header">
          <p className="tagline">Um espaço seguro para suas dúvidas sobre saúde sexual</p>
        </header>

        <div className="persona-selector">
          {(Object.keys(personaNames) as PersonaKey[]).map((key) => (
            <button
              key={key}
              onClick={() => handlePersonaChange(key)}
              className={`persona-button ${persona === key ? 'active' : ''}`}
              style={{
                background: persona === key ? personaData[key].colorLight : undefined
              }}
            >
              <span className="persona-emoji">{personaData[key].emoji}</span>
              <div className="persona-info">
                <span className="persona-name" style={{ color: personaData[key].color }}>
                  {personaNames[key]}
                </span>
                <span className="persona-desc">{personaData[key].description}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="chat-area">
          <div className="disclaimer">
            <p>
              <span className="disclaimer-icon">ℹ️</span>
              Esta ferramenta é informativa e não substitui uma consulta médica. Procure um profissional de saúde.
            </p>
          </div>

          <div className="messages-container">
            {messages.length === 0 ? (
              <div className="welcome-screen">
                <div 
                  className="welcome-avatar"
                  style={{ background: currentPersona.gradient }}
                >
                  {currentPersona.emoji}
                </div>
                <p className="welcome-text">
                  {personaIntroductions[persona]}
                </p>
                
                <div className="quick-questions">
                  <button 
                    className="quick-question"
                    onClick={() => setQuickQuestion('O que são ISTs?')}
                    type="button"
                  >
                    O que são ISTs?
                  </button>
                  <button 
                    className="quick-question"
                    onClick={() => setQuickQuestion('Como me prevenir?')}
                    type="button"
                  >
                    Como me prevenir?
                  </button>
                  <button 
                    className="quick-question"
                    onClick={() => setQuickQuestion('Onde fazer teste?')}
                    type="button"
                  >
                    Onde fazer teste?
                  </button>
                </div>
              </div>
            ) : (
              <>
                {messages.map((m) => (
                  <div key={m.id} className={`message ${m.role}`}>
                    <div 
                      className="message-bubble"
                      style={m.role === 'assistant' ? { 
                        background: currentPersona.color,
                        color: currentPersona.textColor
                      } : undefined}
                    >
                      <div className="message-sender">
                        {m.role === 'user' ? 'Você' : personaNames[persona]}
                      </div>
                      <div className="message-content">{m.content}</div>
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="message assistant">
                    <div className="typing-indicator">
                      <div className="typing-dot" style={{ background: currentPersona.color }}></div>
                      <div className="typing-dot" style={{ background: currentPersona.color }}></div>
                      <div className="typing-dot" style={{ background: currentPersona.color }}></div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </>
            )}
          </div>

          <div className="input-area">
            <form onSubmit={handleSubmit} className="input-form">
              <input
                id="chat-input"
                type="text"
                className="input-field"
                value={input}
                onChange={handleInputChange}
                placeholder={`Converse com ${personaNames[persona]}...`}
                disabled={isLoading}
              />
              <button
                type="submit"
                className="send-button"
                disabled={!input.trim() || isLoading}
                aria-label="Enviar mensagem"
              >
                ➤
              </button>
            </form>
          </div>
        </div>

        <div className="privacy-badge">
          <span className="privacy-icon">🔒</span>
          Conversa 100% anônima e segura
        </div>
      </div>
    </>
  );
}