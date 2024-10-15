// src/pages/ChatPage/data.js

export const conversations = [
    {
      id: 1,
      name: 'Emily',
      lastMessage: 'Olá🌼 Boa tarde....',
      avatar: "/avataremily.png",
      time: '5s',
      unread: 2,
      messages: [
        {
          id: 1,
          senderId: 2,
          senderName: 'Emily',
          message: 'Acabei de ver a foto da calça que você está doando.',
          time: '10:00 AM',
          avatar: "/avataremily.png",
        },
        {
          id: 2,
          senderId: 2,
          senderName: 'Emily',
          message: 'Olá🌼 Boa tarde....',
          time: '10:00 AM',
          avatar: 'https://via.placeholder.com/80x81',
        },
      ],
    },
    {
      id: 2,
      name: 'Caio',
      lastMessage: 'Já conseguiu o item que você estava precisando?',
      avatar: "/avatarcaio.png",
      time: '5m',
      unread: 4,
      messages: [
        {
            id: 1,
            senderId: 2,
            senderName: 'Caio',
            message: 'Boa Tarde! Tudo bem?',
            time: '10:00 AM',
            avatar: "/avatarcaio.png",
          },
          {
            id: 2,
            senderId: 1,
            senderName: 'Você',
            message: 'Estou bem, obrigado! E você?',
            time: '10:02 AM',
            avatar: "/avatardayelle.png",
          },
          {
            id: 3,
            senderId: 2,
            senderName: 'Caio',
            message: 'Já conseguiu o item que você estava precisando?',
            time: '10:10 AM',
            avatar: "/avatarcaio.png",
          },
      ],
    },
    {
        id: 3,
        name: 'Patrícia',
        time: '2h',
        lastMessage: '📸 Olha essa nova foto do produto....',
        avatar: "/avatarpatrícia.png",
        unread: 1,
        messages: [
            {
            id: 1,
            senderId: 2,
            senderName: 'Patrícia',
            message: 'Oi! Tudo bem?',
            time: '09:00 AM',
            avatar: "/avatarpatrícia.png",
            },
            {
              id: 2,
              senderId: 1,
              senderName: 'Você',
              message: 'Estou bem, obrigado! E você?',
              time: '10:02 AM',
              avatar: "/avatardayelle.png",
            },
            {
              id: 3,
            senderId: 2,
            senderName: 'Patrícia',
            message: '📸 Olha essa nova foto do produto....',
            time: '09:00 AM',
            avatar: "/avatarpatrícia.png",
            }
        ],
      },
      {
        id: 4,
        name: 'Paulo',
        time: '1d',
        lastMessage: 'É uma ótima ideia. Vamos deixar para essa data...',
        avatar: "/avatarpaulo.png",
        messages: [
            {
                id: 1,
                senderId: 2,
                senderName: 'Paulo',
                message: 'Oi! Tudo bem? O produto ainda está disponível?',
                time: '08:00 AM',
                avatar: "/avatarpaulo.png",
            },
            {
                id: 2,
                senderId: 1,
                senderName: 'Você',
                message: 'Olá! Tudo sim e contigo? Pode pegar dia 16?',
                time: '08:00 AM',
                avatar: "/avatardayelle.png",
            },
            {
              id: 3,
              senderId: 2,
              senderName: 'Paulo',
              message: 'É uma ótima ideia. Vamos deixar para essa data...',
              time: '08:00 AM',
              avatar: "/avatarpaulo.png",
            }
        ]
      },
    // ... outras conversas
  ];
  