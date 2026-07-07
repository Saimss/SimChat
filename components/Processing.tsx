import type {ChatData} from './FileReceiver'

export interface Participants{
    name: string;
}

export interface Messages{
    sender: string;
    content: string;
    timestamp: number;
   
}

function decodeContent(str: string): string {
    try {
        return decodeURIComponent(str);
    } catch {
        return str;
    }
}

export function extractParticipants(raw: ChatData): Participants[]{
    return raw.participants.map((item) => {
        const participant = item as Record<string, unknown>
        return {
            name: String(participant.name ?? 'unknown')
        }
    })
}

export function extractMessages(raw: ChatData): Messages[]{
    return raw.messages.map((item)=>{
        const msg = item as Record<string, unknown>
        return{
            sender: String(msg.sender_name ?? 'unknown'),
            content: decodeContent(String(msg.content ?? '')),
            timestamp: Number(msg.timestamp?? 0)

        }
    }).reverse()
}