import cleaningImage from '../assets/Image/clean-image.jpeg';

// Bottom Navigation Tabs
export const navigationTabs = [
  { id: 'home', name: 'Anasayfa', icon: 'VectorHome' },
  { id: 'service', name: 'Hizmet', icon: 'MedicalIcon' },
  { id: 'category', name: 'Kategori', icon: 'StarIcon' },
  { id: 'messages', name: 'Mesajlar', icon: 'ChatIcon' },
  { id: 'settings', name: 'Ayarlar', icon: 'SettingIcon' }
];

// Categories
export const categories = [
  { id: 1, title: 'Ev Temizliği', icon: 'house' },
  { id: 2, title: 'Ofis Temizliği', icon: 'building' },
  { id: 3, title: 'Tamirat Hizmetleri', icon: 'tools' },
  { id: 4, title: 'Boyama Hizmetleri', icon: 'brush' },
  { id: 5, title: 'Tesisatçı', icon: 'droplet' },
  { id: 6, title: 'Elektrik Servisi', icon: 'lightning' },
  { id: 7, title: 'Nakliyat', icon: 'truck' },
  { id: 8, title: 'Bahçe Bakımı', icon: 'tree' },
  { id: 9, title: 'Mobilya Montaj', icon: 'box' },
  { id: 10, title: 'Çocuk Bakımı', icon: 'people' },
  { id: 11, title: 'Yaşlı Bakımı', icon: 'heart' },
  { id: 12, title: 'Özel Ders', icon: 'book' }
];

// Category Rows for Home Page
export const categoryRows = [
  [
    { id: 1, title: 'Lorem Ipsum', icon: 'wind', width: 'medium' },
    { id: 2, title: 'Lorem Ipsum', icon: 'pc-display', width: 'medium' },
    { id: 3, title: 'Lorem Ipsum', icon: 'cloud', width: 'medium' }
  ],
  [
    { id: 4, title: 'Lorem Ipsum Dolor', icon: 'droplet', width: 'large' },
    { id: 5, title: 'Lorem Ipsum', icon: 'shield-lock', width: 'medium' }
  ],
  [
    { id: 6, title: 'Lorem', icon: 'key', width: 'small' },
    { id: 7, title: 'Lorem Ipsum', icon: 'lightning', width: 'medium' },
    { id: 8, title: 'Lorem Ipsum', icon: 'wind', width: 'medium' }
  ]
];

// Featured items for the home page
export const featuredItems = [
  {
    id: 6,
    image: 'https://s3-alpha-sig.figma.com/img/f50e/d396/8acc9477cf1e875deee44ed90f9f5d25?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=D19emqvdiGU8Zj1Rfg1rzu6MKGLor27feKPx4~VzL5yFuR6A2UAppoDRwWdd~-D4eccnp2nh3TI81t5rfrjJ2wepMrthj0Z7IhCl8zyYGcuA7RYFOdwLDDscn3KNL~LD9uj5cH2Z7njGNFRL3vMtrBMiavwJSMJrQ6laHDH4RPAnd9OY36Ha~D9EnWbLXlxuaJjtRmcip2492atnS7Ak~Pq4TFYJxGCwKTc10BoC1xbPi1ZZHXOlhjujgyHNUtOEJMN2I3ny5ShYpzesX5O5rFI3ziRSatapsPpAMPx6tkOZiuhyFQhPjKqV8QZp6R~8sKHmD4-t~UZClp4InlLhCQ__',
    price: '200 TL\'den başlayan fiyatlar...',
    title: 'Tamirat Servisi',
    category: 'individual'
  },
  {
    id: 1,
    image: 'https://s3-alpha-sig.figma.com/img/1105/47b2/740fad2ea4836b5b0831b6f3b8cb9504?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tSi6wMA-l4~OC8Og~GAMrq1q7gwupQyXDggompbMBO7iGiCt64SvIh0sr94w3XW~WHs4gTxFZEYxK4lplSTTPKcF2MmwZoP7OCV5zx3VNgujODAJ5sTF0Un6pEVAuw2--C8-AXi4Y0zOzt2c57LxBKpp16DXz9V3K0UOn8~LnP1v0EaoJ2ZKsfdk-7Gjske75CDpXOVTRI3uz-3-etSduH~XC69MSlLhY2ynf4mILKHBetW9Ty6pmIkTl0m7WU9SX1xzN6geDEH9pBade0PPGIBga84~Qzo16vIIP7XFmAU3l2eNWxEWYRyRg4YDaOOKDoBlA7iSqQV5KCvzYbQX9w__',
    price: '200 TL\'den başlayan fiyatlar...',
    title: 'Tamirat Servisi',
    category: 'individual'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    price: '200 TL\'den başlayan fiyatlar...',
    title: 'Mutfak Servisi',
    category: 'individual'
  },
  {
    id: 4,
    image: 'https://s3-alpha-sig.figma.com/img/f50e/d396/8acc9477cf1e875deee44ed90f9f5d25?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=D19emqvdiGU8Zj1Rfg1rzu6MKGLor27feKPx4~VzL5yFuR6A2UAppoDRwWdd~-D4eccnp2nh3TI81t5rfrjJ2wepMrthj0Z7IhCl8zyYGcuA7RYFOdwLDDscn3KNL~LD9uj5cH2Z7njGNFRL3vMtrBMiavwJSMJrQ6laHDH4RPAnd9OY36Ha~D9EnWbLXlxuaJjtRmcip2492atnS7Ak~Pq4TFYJxGCwKTc10BoC1xbPi1ZZHXOlhjujgyHNUtOEJMN2I3ny5ShYpzesX5O5rFI3ziRSatapsPpAMPx6tkOZiuhyFQhPjKqV8QZp6R~8sKHmD4-t~UZClp4InlLhCQ__',
    price: '200 TL\'den başlayan fiyatlar...',
    title: 'Tamirat Servisi',
    category: 'individual'
  }
];

// Featured Services for the Service Detail Page
export const featuredServices = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    price: '200 TL\'den başlayan fiyatlar...',
    title: 'Tamirat Servisi',
    description: 'Profesyonel ekibimizle her türlü tamirat işleminizi kısa sürede tamamlıyoruz.'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    price: '200 TL\'den başlayan fiyatlar...',
    title: 'Mutfak Servisi',
    description: 'Mutfağınızdaki her türlü arıza ve tamirat işlemleri için profesyonel çözümler.'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    price: '200 TL\'den başlayan fiyatlar...',
    title: 'Elektrik Servisi',
    description: 'Elektrik tesisatı ve tamiri için hızlı ve güvenilir hizmet.'
  }
];

// Search Results
export const searchResults = [
  {
    id: 1,
    name: "Lorem Ipsum Temizlik",
    rating: 4.0,
    reviewCount: 200,
    price: "₺",
    amount: "500",
    description: "den başlayan fiyatlarla",
    image: cleaningImage
  },
  {
    id: 2,
    name: "Lorem Ipsum Temizlik",
    rating: 4.0,
    reviewCount: 200,
    price: "₺",
    amount: "500",
    description: "den başlayan fiyatlarla",
    image: cleaningImage
  },
  {
    id: 3,
    name: "Lorem Ipsum Temizlik",
    rating: 4.0,
    reviewCount: 200,
    price: "₺",
    amount: "500",
    description: "den başlayan fiyatlarla",
    image: cleaningImage
  }
];

// Company Details
export const companyDetails = {
  id: 1,
  name: "Lorem Ipsum Temizlik",
  rating: 4.0,
  reviewCount: 200,
  price: "₺",
  amount: "500",
  description: "den başlayan fiyatlarla",
  image: cleaningImage,
  about: "Lorem ipsum dolor sit amet consectetur. Risus vestibulum pretium felis non pellentesque. Tincidunt elit ac vitae dignissim ut tellus. Pretium feugiat mauris eu sit mi id.",
  address: "123 Main St, Apt 4B Lorem Ipsum...",
  email: "loremipsum@gmail.com",
  phone: "+90 555 123 4567",
  website: "www.loremipsum.com",
  services: [
    "Ev Temizliği",
    "Ofis Temizliği",
    "İnşaat Sonrası Temizlik",
    "Apartman Temizliği"
  ],
  badge: "Mahallenin Muhtarı"
};

// Tasks for Tasks Page
export const mockTasks = [
  {
    id: 1,
    title: 'Design UI for mobile app',
    description: 'Create wireframes and mockups for the new mobile application',
    dueDate: '2023-05-15',
    priority: 'high',
    status: 'in-progress',
    category: 'Design'
  },
  {
    id: 2,
    title: 'Implement login functionality',
    description: 'Develop user authentication and authorization system',
    dueDate: '2023-05-10',
    priority: 'medium',
    status: 'pending',
    category: 'Development'
  },
  {
    id: 3,
    title: 'Test payment gateway',
    description: 'Verify that payment processing works correctly',
    dueDate: '2023-05-20',
    priority: 'low',
    status: 'completed',
    category: 'Testing'
  },
  {
    id: 4,
    title: 'Update user documentation',
    description: 'Revise user guide with new feature descriptions',
    dueDate: '2023-05-25',
    priority: 'medium',
    status: 'pending',
    category: 'Documentation'
  }
];

// Chat Groups for Messages page
export const chatGroups = [
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

// Message Groups for Chat Detail
export const messageGroups = (chatId, chatName, chatAvatar) => [
  {
    date: 'Bugün',
    messages: [
      {
        id: 1,
        text: 'Merhaba, hizmetiniz hakkında bilgi almak istiyorum',
        time: '09:30',
        sender: {
          id: chatId,
          name: chatName,
          avatar: chatAvatar
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
          id: chatId,
          name: chatName,
          avatar: chatAvatar
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
          id: chatId,
          name: chatName,
          avatar: chatAvatar
        },
        isRead: false
      }
    ]
  }
]; 