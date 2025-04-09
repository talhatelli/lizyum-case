export const colors = {
  lightBlue: '#E5EEFF',
  white: '#FFFFFF',
  
  darkText: '#27272E',
  secondaryText: '#777E90',
  
  lightGray: '#D9D9D9',
  
  activeTab: '#2483F0',
  inactiveTab: '#6A6C6A',
  backgroundColor: '#F4F5F6',
  
  // Category colors
  categoryCardBg: '#F4F5F6',
  categoryBorder: '#E9EAEC',
  categoryIconBg: '#E5EEFF',
  categoryIconBorder: '#D5DEFF',
  categoryTitle: '#444444'
};

export const hexToFilter = (hexColor) => {
  if (hexColor === colors.inactiveTab) {
    return 'none';
  }
  
  const r = parseInt(hexColor.slice(1, 3), 16) / 255;
  const g = parseInt(hexColor.slice(3, 5), 16) / 255;
  const b = parseInt(hexColor.slice(5, 7), 16) / 255;
  
  const sepia = r > b ? r - b : 0;
  const saturation = (Math.max(r, g, b) - Math.min(r, g, b)) * 100;
  
  let hue = 0;
  if (b > r && b > g) {
    hue = 240;
  } else if (g > r && g > b) {
    hue = 120;
  } else if (r > g && r > b) {
    hue = 0;
  }
  
  if (hexColor === colors.activeTab) {
    return 'invert(42%) sepia(93%) saturate(1352%) hue-rotate(196deg) brightness(91%) contrast(98%)';
  }
  
  return `invert(${Math.round(sepia * 100)}%) sepia(${Math.round(saturation)}%) saturate(${Math.round(saturation * 10)}%) hue-rotate(${hue}deg) brightness(${Math.round(r * 100)}%) contrast(${Math.round(g * 100)}%)`;
};

export default colors; 