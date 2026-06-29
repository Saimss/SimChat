
import React from 'react';
import { Chat } from '../types';
import { Avatar } from './Avatar';


interface ChatListItemProps {
    chat: Chat;
    isSelected: boolean;
    onSelect: (chatId: number) => void;
}

export function ChatListItem({ chat, isSelected, onSelect }: ChatListItemProps) {
    return (

        <button onClick={() => onSelect(chat.id)} 
            className={`flex items-center p-4 w-full text-left ${isSelected ? 'bg-gray-700' : 'bg-gray-800 hover:bg-gray-700'}`}>

        <Avatar size={40} online={chat.online} />
        <div className="flex-1 min-w-0">
            <div className="text-white font-semibold text-sm">{chat.name}</div>
            <div className="text-gray-400 text-sm text-xs">{chat.preview}</div>
        </div>
        </button>
    )
}