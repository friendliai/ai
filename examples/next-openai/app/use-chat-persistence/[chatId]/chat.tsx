'use client';

import { Message, useChat } from 'ai/react';

export default function Chat({
  chatId,
  initialMessages,
}: { chatId?: string | undefined; initialMessages?: Message[] } = {}) {
  const { input, isLoading, handleInputChange, handleSubmit, messages } =
    useChat({
      api: '/api/use-chat-persistence',
      id: chatId, // use the provided chatId
      initialMessages, // initial messages if provided
      sendExtraMessageFields: true, // send id and createdAt for each message
    });

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {messages.map(m => (
        <div key={m.id} className="whitespace-pre-wrap">
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.content}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
          disabled={isLoading}
        />
      </form>
    </div>
  );
}