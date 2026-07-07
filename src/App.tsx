import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ChatHeader from '../components/ChatHeader';
import MessageList from '../components/ChatList';
import JsonUploader from '../components/FileReceiver';
import type { ChatData } from '../components/FileReceiver';
import type { Messages, Participants } from '../components/Processing';

export default function App() {
  const [data, setData] = useState<ChatData | null>(null)
  const [participants, setParticipants] = useState<Participants[]|null>(null)
  const [messages, setMessages] = useState<Messages[]|null>(null)
  const [error, setError] = useState<string | null>(null)

  const activeChat = data ? [{
    id:1,
    name: participants?.map((p) => p.name).join(', ') ?? 'Unknown',
    preview: messages?.[messages.length - 1]?.content ?? '',
    online: true,
  }]: [];

  const otherUser = participants?.find((p) => p.name !== 'Saimss')?.name ?? 'Unknown';


  return (
    <div className="flex h-screen w-screen bg-[#1a1a1a] text-white overflow-hidden font-sans">
    {!data && (
      <JsonUploader
          data={data}
          setData={setData}
          participants={participants}
          setParticipants={setParticipants}
          messages={messages}
          setMessages={setMessages}
          error={error}
          setError={setError}/>
    )}
    {data && (
    <>
      <Sidebar
        chats={activeChat}
        selectedChatId={1}
        onSelectChat={() => {}}
        name={otherUser}
      />

      <div className="w-px bg-white/8 flex-shrink-0" />

      <div className="flex-1 flex flex-col min-w-0">
        <ChatHeader name = {otherUser} chat={activeChat[0]} />
        <MessageList messages={messages ?? []} />
      </div>
    </>
    )}
    </div>
  );
}