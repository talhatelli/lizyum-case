import { colors } from '../utils/colors';

export const headerStyles = {
  headerGradient: {
    background: `linear-gradient(to bottom, ${colors.headerGradientStart}, ${colors.headerGradientEnd})`,
    width: '100%'
  },
  
  mobileHeaderContainer: {
    background: 'transparent'
  },
  
  title: {
    fontSize: '32px', 
    fontWeight: 'bold', 
    marginBottom: '4px',
    color: colors.darkText
  },
  
  subtitle: {
    color: colors.secondaryText, 
    marginBottom: 0,
    fontSize: '16px'
  },
  
  mobileProfilePicture: {
    width: "46px", 
    height: "46px", 
    objectFit: "cover"
  },
  
  desktopProfilePicture: {
    width: "40px", 
    height: "40px", 
    objectFit: "cover"
  },
  
  mobileSearchContainer: {
    background: 'transparent'
  },
  
  desktopHeaderContainer: {
    background: 'transparent'
  }
};

export default headerStyles; 