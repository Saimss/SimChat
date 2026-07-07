export interface Message{
    id: number;
    sender: string;
    text: string;
    sent: boolean;
    timestamp: string;
}


export interface Chat{
    id: number;
    name: string;
    preview: string;
    messages?: Message[];
    online: boolean;
    avatar?: string;
}
