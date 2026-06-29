import { useState } from 'react';
import { ChatMessages } from '../data';
import Sidebar from '../components/Sidebar';
import ChatHeader from '../components/ChatHeader';
import MessageList from '../components/ChatList';
import JsonUploader from '../components/FileReceiver';
import type { ChatData } from '../components/FileReceiver';
import type { Messages, Participants } from '../components/Processing';

export default function App() {
  const [chats] = useState(ChatMessages);
  const [selectedChatId, setSelectedChatId] = useState<number>(1);
  const [data, setData] = useState<ChatData | null>(null)
  const [participants, setParticipants] = useState<Participants[]|null>(null)
  const [messages, setMessages] = useState<Messages[]|null>(null)
  const [error, setError] = useState<string | null>(null)



  const selectedChat = chats.find((c) => c.id === selectedChatId)!;

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
        chats={chats}
        selectedChatId={selectedChatId}
        onSelectChat={setSelectedChatId}
      />

      <div className="w-px bg-white/8 flex-shrink-0" />

      <div className="flex-1 flex flex-col min-w-0">
        <ChatHeader chat={selectedChat} />
        <MessageList messages={selectedChat.messages} />
      </div>
    </>
    )}
    </div>
  );
}