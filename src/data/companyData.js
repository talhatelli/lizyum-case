import cleaningImage from '../assets/Image/clean-image.jpeg';
import ribbonIcon from '../assets/gaming-Ribbon-First--Streamline-Ultimate.svg';

export const getCompanyData = (companyId) => {
  return {
    id: companyId || 1,
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
    badge: "Mahallenin Muhtarı",
    badgeIcon: ribbonIcon
  };
}; 