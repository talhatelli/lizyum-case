export const colors = {
  lightBlue: '#E5EEFF',
  white: '#FFFFFF',
  
  darkText: '#27272E',
  secondaryText: '#777E90',
  
  lightGray: '#D9D9D9',
  
  activeTab: '#2483F0',
  inactiveTab: '#6A6C6A',
  backgroundColor: '#F4F5F6',
  primary: '#1570EF',
  background: '#FFFFFF',
  
  // Stars
  starFilled: '#FFBA0A',
  starEmpty: '#D9D9D9',
  starEmptyColor: '#B0B7C3',
  starReviewColor: '#007BFF',
  
  // Service detail colors
  serviceDetailBackButton: 'rgba(255, 255, 255, 0.4)',
  serviceDetailTabBg: '#F9FAFB',
  serviceDetailTabText: '#3B3E45',
  serviceDetailTabBorder: '#E6E8EC',
  serviceDetailTabShadow: 'rgba(0, 0, 0, 0.04)',
  serviceDetailTabContainerShadow: 'rgba(0, 0, 0, 0.06)',
  serviceDetailTabActive: '#FFFFFF',
  serviceDetailWarningIcon: '#FFC107',
  serviceDetailCardOverlay: 'rgba(0,0,0,0.7)',
  serviceDetailArrowShadow: 'rgba(0,0,0,0.1)',
  
  // Search results colors
  searchResultCardBg: '#FFFFFF80',
  searchResultBorder: '#E9EAEC',
  searchResultMessageBg: '#EFF8FF',
  searchResultMessageBorder: '#1570EF',
  searchResultMessageText: '#1570EF',
  
  // Reservation success colors
  reservationBlue: '#4387FF',
  reservationText: '#363A33',
  reservationBorder: '#E6E6E6',
  reservationTitle: '#000000',
  reservationProgressLine: '#D1D5DB',
  reservationProgressInner: '#B1B5C3',
  reservationProgressActive: '#4387FF',
  
  // Company detail colors
  companyDetailText: '#333',
  companyDetailTextSecondary: '#363A33',
  companyDetailLink: '#2483F0',
  companyDetailBackgroundBlurButton: 'rgba(255, 255, 255, 0.4)',
  companyDetailCardBackground: 'rgba(255, 255, 255, 0.5)',
  companyDetailBorderColor: '#E9EAEC',
  companyDetailActionButtonBg: '#EFF8FF',
  companyDetailActionButtonText: '#1570EF',
  companyDetailActionButtonBorder: '#1570EF',
  companyDetailBulletColor: '#4387FF',
  
  // Category colors
  categoryCardBg: '#F4F5F6',
  categoryBorder: '#E9EAEC',
  categoryIconBg: '#E5EEFF',
  categoryIconBorder: '#D5DEFF',
  categoryTitle: '#444444',
  
  // Chat colors
  chatBackground: '#F4F5F6',
  chatInputBg: '#F5F5F5',
  chatHeaderShadow: 'rgba(0,0,0,0.1)',
  chatBubbleOwn: '#2483F0',
  chatBubbleOther: '#FFFFFF',
  chatBubbleShadow: 'rgba(0,0,0,0.1)',
  chatTimeOwn: 'rgba(255,255,255,0.5)',
  chatTimeOther: '#777E90',
  chatReadIndicator: '#8de0fd',
  chatUnreadIndicator: 'rgba(255,255,255,0.7)',
  chatDateText: '#404040',
  chatOnlineIndicator: '#4CAF50',
  chatOnlineIndicatorBorder: '#FFFFFF',
  chatUnreadBadge: '#2483F0',
  
  // Featured section colors
  featuredTabText: '#3B3E45',
  featuredTabBorder: '#E6E8EC',
  featuredTabShadow: 'rgba(0, 0, 0, 0.06)',
  featuredTabContainerShadow: 'rgba(0, 0, 0, 0.25)',
  featuredOverlay: '#FFFFFF33',
  featuredArrowShadow: 'rgba(0,0,0,0.1)',
  
  // Header colors
  headerGradientStart: '#AEC8E9',
  headerGradientEnd: '#E5EEFF',

  // Service colors
  serviceCardShadow: 'rgba(0, 0, 0, 0.075)',
  serviceImageOverlayGradient: 'linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
  servicePrimary: '#2483F0' // Same as activeTab
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