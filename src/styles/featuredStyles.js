import { colors } from '../utils/colors';

export const featuredStyles = {
  tabContainer: {
    width: '154px',
    height: '40px',
    borderRadius: '10px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: colors.featuredTabBorder,
    background: 'linear-gradient(90deg, #E5EEFF 0%, #FFFFFF 27%, #E6EFFF 63%, #FFFFFF 95%)',
    boxShadow: `inset 0px 0px 4px 0px ${colors.featuredTabContainerShadow}`,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    padding: '2px 4px'
  },
  
  tabButton: (isActive) => ({
    width: '65px',
    height: '36px',
    borderRadius: '10px',
    backgroundColor: isActive ? colors.white : 'transparent',
    border: isActive ? `0.5px solid ${colors.featuredTabBorder}` : 'none',
    padding: '0 10px',
    fontSize: '13px',
    color: colors.featuredTabText,
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: isActive ? `0px 2px 4px ${colors.featuredTabShadow}` : 'none',
    position: 'relative',
    zIndex: isActive ? 2 : 1
  }),
  
  corporateTab: {
    marginLeft: 'auto'
  },
  
  mobileCardContainer: {
    minWidth: '280px', 
    maxWidth: '280px',
    flexShrink: 0,
    marginRight: '12px'
  },
  
  card: {
    cursor: 'pointer'
  },
  
  mobileCardImage: {
    width: '100%',
    height: '175px', 
    objectFit: 'cover'
  },
  
  desktopCardImage: {
    width: '100%',
    height: '200px', 
    objectFit: 'cover'
  },
  
  overlay: {
    width: 'calc(100% - 8px)', 
    height: '74px', 
    borderRadius: '10px',
    background: colors.featuredOverlay,
    backdropFilter: 'blur(8px)',
    margin: '4px',
    padding: '12px'
  },
  
  mobileArrowIcon: {
    width: '36px', 
    height: '36px', 
    top: '0px', 
    right: '0px',
    borderRadius: '90px',
    backgroundColor: colors.white,
    boxShadow: `0 2px 4px ${colors.featuredArrowShadow}`,
    transform: 'rotate(-12.5deg)',
    margin: '4px'
  },
  
  desktopArrowIcon: {
    width: '34px', 
    height: '34px', 
    top: '0px', 
    right: '0px',
    margin: '4px',
    borderRadius: '90px',
    backgroundColor: colors.white,
    boxShadow: `0 2px 4px ${colors.featuredArrowShadow}`,
    transform: 'rotate(-12.5deg)'
  },
  
  scrollbarCSS: `
    .hide-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .hide-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `
};

export default featuredStyles; 