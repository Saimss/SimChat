import type {Message} from '../types';
import ChatBubble from './ChatBubble';

interface ChatMessagesProps {
    messages: Message[];
}

export default function ChatMessages({ messages }: ChatMessagesProps) {
    return (
        <div className="flex flex-col space-y-2 p-4">
            {messages.map((message) => (
                <ChatBubble key={message.id} message={message} />
            ))}
        </div>
    )
}