import type {Messages} from './Processing';
import ChatBubble from './ChatBubble';
import { useEffect, useRef } from 'react';

interface ChatMessagesProps {
    messages: Messages[];
}


export default function ChatMessages({ messages }: ChatMessagesProps) {
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'instant' });
    }, [messages]);

    return (
        <div className="flex flex-col space-y-2 p-4 overflow-y-auto scrollbar-hide flex-1">
            {messages.map((message, i) => (
                <ChatBubble key = {i} message={message} currentUser="Saimss" />
            ))}
            <div ref={bottomRef} />
        </div>
    )
}