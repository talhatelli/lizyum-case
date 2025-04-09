import { colors } from '../utils/colors';

export const getServiceDetailStyles = (activeTab) => {
  return {
    backButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '14px',
      width: '40px',
      height: '40px',
      marginBottom: '8px',
      borderRadius: '50%',
      background: colors.serviceDetailBackButton,
      backdropFilter: 'blur(10px)',
      border: 'none',
      cursor: 'pointer',
      zIndex: 10
    },
    
    container: {
      backgroundColor: colors.backgroundColor
    },
    
    tabContainer: {
      overflow: 'hidden', 
      border: `1px solid ${colors.serviceDetailTabBorder}`,
      borderRadius: '29px',
      boxShadow: `inset 0px 2px 4px ${colors.serviceDetailTabShadow}`,
      backgroundColor: colors.serviceDetailTabBg
    },
    
    tabButton: (isActive) => ({
      backgroundColor: isActive ? colors.serviceDetailTabActive : 'transparent', 
      color: colors.serviceDetailTabText,
      borderRadius: isActive === 'individual' ? '29px 0 0 29px' : '0 29px 29px 0',
      border: 'none',
      borderLeft: isActive === 'corporate' ? 'none' : `1px solid ${colors.serviceDetailTabBorder}`,
      padding: '10px 24px',
      fontWeight: '500',
      fontSize: '14px',
      boxShadow: isActive ? `0px 2px 4px ${colors.serviceDetailTabContainerShadow}` : 'none',
      position: 'relative',
      zIndex: isActive ? 2 : 1
    }),
    
    tabButtonIndividual: {
      backgroundColor: activeTab === 'individual' ? colors.serviceDetailTabActive : 'transparent', 
      color: colors.serviceDetailTabText,
      borderRadius: '29px 0 0 29px',
      border: 'none',
      padding: '10px 24px',
      fontWeight: '500',
      fontSize: '14px',
      boxShadow: activeTab === 'individual' ? `0px 2px 4px ${colors.serviceDetailTabContainerShadow}` : 'none',
      position: 'relative',
      zIndex: activeTab === 'individual' ? 2 : 1
    },
    
    tabButtonCorporate: {
      backgroundColor: activeTab === 'corporate' ? colors.serviceDetailTabActive : 'transparent', 
      color: colors.serviceDetailTabText,
      borderRadius: '0 29px 29px 0',
      border: 'none',
      borderLeft: activeTab === 'corporate' ? 'none' : `1px solid ${colors.serviceDetailTabBorder}`,
      padding: '10px 24px',
      fontWeight: '500',
      fontSize: '14px',
      boxShadow: activeTab === 'corporate' ? `0px 2px 4px ${colors.serviceDetailTabContainerShadow}` : 'none',
      position: 'relative',
      zIndex: activeTab === 'corporate' ? 2 : 1
    },
    
    featuredCardsContainer: {
      display: 'flex',
      overflowX: 'auto',
      paddingBottom: '0.75rem',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none'
    },
    
    featuredCard: {
      marginRight: '0.75rem',
      minWidth: '275px',
      maxWidth: '275px',
      flexShrink: 0
    },
    
    cardContainer: {
      position: 'relative',
      borderRadius: '1rem',
      overflow: 'hidden',
      boxShadow: `0 0.125rem 0.25rem ${colors.serviceCardShadow}`
    },
    
    cardImage: {
      width: '100%',
      height: '170px',
      objectFit: 'cover'
    },
    
    cardOverlay: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      padding: '0.75rem',
      color: colors.white,
      background: 'linear-gradient(transparent, rgba(0,0,0,0.7))'
    },
    
    cardPrice: {
      marginBottom: '0.25rem',
      fontSize: '0.875rem'
    },
    
    cardTitle: {
      marginBottom: 0,
      fontSize: '1.25rem',
      fontWeight: 'bold'
    },
    
    arrowIcon: {
      position: 'absolute',
      bottom: '0.75rem',
      right: '0.75rem',
      backgroundColor: colors.white,
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '32px',
      height: '32px',
      boxShadow: `0 2px 4px ${colors.serviceDetailArrowShadow}`
    },
    
    infoCard: {
      border: 'none',
      borderRadius: '1rem',
      marginBottom: '1rem'
    },
    
    infoCardBody: {
      padding: '0.75rem'
    },
    
    infoCardTitle: {
      fontWeight: 'bold',
      marginBottom: '0.75rem'
    },
    
    infoCardText: {
      color: colors.secondaryText
    },
    
    providerItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '0.75rem'
    },
    
    providerAvatar: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      marginRight: '0.75rem',
      objectFit: 'cover'
    },
    
    providerName: {
      marginBottom: 0,
      fontWeight: 'bold'
    },
    
    providerRating: {
      marginBottom: 0,
      color: colors.secondaryText,
      fontSize: '0.875rem'
    },
    
    starIcon: {
      color: colors.serviceDetailWarningIcon
    },
    
    hideScrollbarStyle: `
      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
      .hide-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `
  };
}; 