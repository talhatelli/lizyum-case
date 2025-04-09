export const getMessagesData = () => {
  return [
    {
      date: 'Bugün',
      chats: [
        {
          id: 1,
          name: 'Ali Yılmaz',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
          lastMessage: 'Merhaba, hizmetiniz hakkında bilgi almak istiyorum',
          time: '09:41',
          unread: 2,
          isOnline: true
        },
        {
          id: 2,
          name: 'Ayşe Demir',
          avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
          lastMessage: 'Teşekkürler, görüşmek üzere',
          time: '08:23',
          unread: 0,
          isOnline: true
        }
      ]
    },
    {
      date: 'Dün',
      chats: [
        {
          id: 3,
          name: 'Mehmet Kaya',
          avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
          lastMessage: 'Tamam, anlaştık o zaman',
          time: '22:15',
          unread: 0,
          isOnline: false
        },
        {
          id: 4,
          name: 'Zeynep Çelik',
          avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
          lastMessage: 'Hizmetinizi çok beğendim, tekrar teşekkürler',
          time: '16:30"',
          unread: 0,
          isOnline: false
        },
        {
          id: 5,
          name: 'Can Yücel',
          avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
          lastMessage: 'Detayları mail olarak gönderebilir misiniz?',
          time: '15:22',
          unread: 1,
          isOnline: false
        }
      ]
    }
  ];
}; 