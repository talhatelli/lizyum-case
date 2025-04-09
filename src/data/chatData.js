export const messageGroups = [
  {
    date: 'Bugün',
    messages: [
      {
        id: 1,
        text: 'Merhaba, hizmetiniz hakkında bilgi almak istiyorum',
        time: '09:30',
        sender: {
          id: 'user',
          name: 'User',
          avatar: '' // This will be replaced with the actual chat user's info
        },
        isRead: true
      },
      {
        id: 2,
        text: 'Merhaba, tabii ki! Hangi hizmet hakkında bilgi almak istersiniz?',
        time: '09:32',
        sender: {
          id: 'me',
          name: 'Ben',
          avatar: 'https://randomuser.me/api/portraits/women/65.jpg'
        },
        isRead: true
      },
      {
        id: 3,
        text: 'Ev temizliği hizmetiniz hakkında fiyat bilgisi alabilir miyim?',
        time: '09:35',
        sender: {
          id: 'user',
          name: 'User',
          avatar: '' // This will be replaced with the actual chat user's info
        },
        isRead: true
      },
      {
        id: 4,
        text: 'Tabii ki, 2+1 ev için 350 TL, 3+1 ev için 450 TL fiyatlarımız var. Detaylı bilgi için web sitemizi de inceleyebilirsiniz.',
        time: '09:40',
        sender: {
          id: 'me',
          name: 'Ben',
          avatar: 'https://randomuser.me/api/portraits/women/65.jpg'
        },
        isRead: true
      },
      {
        id: 5,
        text: 'Teşekkürler, bu hafta için randevu alabilir miyim?',
        time: '09:41',
        sender: {
          id: 'user',
          name: 'User',
          avatar: '' // This will be replaced with the actual chat user's info
        },
        isRead: false
      }
    ]
  }
];

export default messageGroups; 