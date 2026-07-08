import type {Messages} from './Processing';


interface ChatListProps {
    message: Messages;
    currentUser: string;
}

export default function ChatBubble({ message, currentUser }: ChatListProps) {
    const isOwn = message.sender === currentUser;
    return (
        <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}>
        <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl text-sm ${isOwn ? 'bg-[#4016E9] text-white rounded-br-none' : 'bg-stone-700 text-white rounded-bl-none'}`}>
               <p>{message.content}</p>
               <p className="text-xs text-gray-500 mt-1">
                    {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
               </p>
        </div>
        </div>
    )
}