import {Info, Search, Settings, User} from 'lucide-react'
import type {Chat} from '../types'

interface ChatHeaderProps { 
    chat: Chat;
}

export default function ChatHeader({ chat }: ChatHeaderProps) {
    return(
        <header className = 'flex items-center justify-between px-6 py-3.5 border-b border-white/5 flex-shrink-0 bg-[#1a1a1a]'>
            <div className = 'flex items-center gap-4'>
                <div className ='relative'>
                    <div className = 'w-10 h-10 rounded-full bg-[#3a3a3a] flex items-center justify-center'>
                        <User size={22} className="text-white/50" />
                    </div>

                    {chat.online && (
                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#1a1a1a]" />
                    )}
                </div>

                <div>
                    <p className = 'font-semibold text-white/90 text-sm leading-tight'>{chat.name}</p>
                    <p className = 'text-xs text-white/40 leading-tight mt-0.5'>{chat.online ? 'Online' : 'Offline'}</p>
                </div>
            </div>  

            <div className = 'flex items-center gap-2'>
                    <button className="p-2.5 rounded-xl text-white/40 hover:text-white/80 hover:bg-white/5 transition-all">
                    <Search size={18} />
                    </button>
                    <button className="p-2.5 rounded-xl text-white/40 hover:text-white/80 hover:bg-white/5 transition-all">
                    <Info size={18} />
                    </button>
                    <button className="p-2.5 rounded-xl text-white/40 hover:text-white/80 hover:bg-white/5 transition-all">
                    <Settings size={18} />
                    </button>
            </div>
        </header>
    )
}