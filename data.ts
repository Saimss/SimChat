import type { Chat } from './types';

export const ChatMessages: Chat[] = [
    {
        id: 1,
        name: 'Profile',
        preview: 'Hello, how are you?',
        messages: [
      {  text: 'Hey ! How are you', sent: false, timestamp: '9:41 AM' },
      {  text: "I'm doing great, thanks!", sent: true, timestamp: '9:42 AM' },
      {  text: 'What are you up to today?', sent: false, timestamp: '9:43 AM' },
      {  text: 'Just working on some projects. Pretty busy day honestly!', sent: true, timestamp: '9:45 AM' },
      {  text: 'Sounds productive!', sent: false, timestamp: '9:46 AM' },
    ],
    online: true,

    }

]
