import VectorHome from '../assets/TabIcon/Vector.svg';
import ChatIcon from '../assets/TabIcon/majesticons_chat-line.svg';
import MedicalIcon from '../assets/TabIcon/material-symbols_medical-services-outline.svg';
import SettingIcon from '../assets/TabIcon/uil_setting.svg';
import StarIcon from '../assets/TabIcon/star-outline.svg';

export const tabs = [
  { id: 'home', name: 'Anasayfa', icon: VectorHome },
  { id: 'service', name: 'Hizmet', icon: MedicalIcon },
  { id: 'category', name: 'Kategori', icon: StarIcon },
  { id: 'messages', name: 'Mesajlar', icon: ChatIcon },
  { id: 'settings', name: 'Ayarlar', icon: SettingIcon }
];

export default tabs; 