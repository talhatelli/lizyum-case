import arrowBackIcon from '../assets/arrow-back.svg';
import { featuredServices } from './mockData';

export const getServiceDetailData = () => {
  return {
    icons: {
      arrowBack: arrowBackIcon
    },
    featuredServices: featuredServices,
    serviceInfo: {
      title: "Servis Detayı",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit."
    },
    providers: [
      {
        id: 1,
        name: "Ahmet Yılmaz",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 4.8,
        reviewCount: 120
      },
      {
        id: 2,
        name: "Ayşe Demir",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 4.7,
        reviewCount: 98
      }
    ],
    tabs: {
      individual: "Bireysel",
      corporate: "Kurumsal"
    },
    sections: {
      featured: {
        title: "Öne Çıkanlar",
        hashPrefix: "#"
      },
      about: {
        title: "Servis Hakkında"
      },
      providers: {
        title: "Servis Sağlayıcıları"
      }
    }
  };
}; 