import {Search, User} from 'lucide-react'
import type {Chat} from '../types'

interface SidebarProps {
    chats: Chat[];
    selectedChatId: number | null;
    onSelectChat: (chatId: number) => void;
    name: string;
}

export default function Sidebar({ chats, selectedChatId, onSelectChat, name }: SidebarProps) {

    return (

        <aside className= 'w-72 flex-shrink-0 flex flex-col border-r border-white/5'>
            <div className = 'px-5 pt-6 pb-4'>
                <h1 className = 'text-2xl font-bold text-white tracking-tight'>Chats</h1>
            </div>

            <div className = 'px-4 mb-3'>
                <div className = 'relative'>
                    <Search className = 'absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400' />
                    <input 
                        type = 'text'
                        placeholder = 'Search'
                        className = 'w-full bg-white/5 rounded-xl pl-9 pr-4 py-2 text-sm text-white/60 placeholder:text-white/25 outline-none focus:bg-white/8 transition-colors'/>
                </div>
            </div>

             <div className="flex-1 overflow-y-auto px-3 space-y-1 pb-4 scrollbar-hide">
        {chats.map((chat) => (
          <button
            key={chat.id}
            onClick={() => onSelectChat(chat.id)}
            className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-150 text-left group ${
              selectedChatId === chat.id
                ? 'bg-white/5 ring-1 ring-violet-500/70'
                : 'hover:bg-white/4'
            }`}
          >
            <div className="relative flex-shrink-0">
              <div className="w-11 h-11 rounded-full bg-[#3a3a3a] flex items-center justify-center">
                <User size={22} className="text-white/50" />
              </div>
              {chat.online && (
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#1a1a1a]" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white/90 truncate">{name}</p>
              <p className="text-xs text-white/40 truncate mt-0.5">{chat.preview}</p>
            </div>
          </button>
        ))}
      </div>
        </aside>
    )

}