import type {Messages} from './Processing';


interface ChatListProps {
    message: Messages;
    
}

export default function ChatBubble({ message }: ChatListProps) {
    return (
        <div className={`flex ${message.sender == 'Saimss' ? 'justify-end' : 'justify-start'}`}>
               <p>{message.content}</p>
               <p className="text-xs text-gray-500 mt-1">{message.timestamp}</p>
        </div>
    )
}