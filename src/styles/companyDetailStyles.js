import { colors } from '../utils/colors';

export const getCompanyDetailStyles = (isWebView) => {
  return {
    actionButton: {
      width: 118,
      height: 40,
      borderRadius: '8px',
      borderWidth: '1px',
      paddingTop: '10px',
      paddingRight: '14px',
      paddingBottom: '10px',
      paddingLeft: '14px',
      background: '#EFF8FF',
      border: '1px solid #1570EF',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      whiteSpace: 'nowrap'
    },
    
    buttonText: {
      fontWeight: 600,
      fontSize: '14px',
      lineHeight: '18px',
      letterSpacing: '0%',
      color: '#1570EF'
    },
    
    headerGradient: {
      background: `linear-gradient(to bottom, ${colors.headerGradientStart}, ${colors.headerGradientEnd})`,
      width: '100%',
      position: 'relative',
      paddingTop: '16px',
      paddingBottom: '16px',
      ...(isWebView && {
        height: '240px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      })
    },
    
    backButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: '14px',
      width: '40px',
      height: '40px',
      marginBottom: '8px',
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.4)',
      backdropFilter: 'blur(10px)',
      border: 'none',
      cursor: 'pointer',
      zIndex: 10,
      ...(isWebView && {
        position: 'absolute',
        top: '20px',
        left: '20px',
        marginLeft: 0
      })
    },
    
    card: {
      width: isWebView ? '600px' : '351px',
      maxWidth: '100%',
      margin: '0 auto',
      borderRadius: '10px',
      borderWidth: '1px',
      padding: '16px 10px',
      background: 'rgba(255, 255, 255, 0.5)',
      border: '1px solid #E9EAEC',
      ...(isWebView && {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '24px'
      })
    },
    
    badge: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '8px'
    },
    
    badgeText: {
      fontWeight: 400,
      fontSize: '15px',
      lineHeight: '170%',
      letterSpacing: '0%',
      color: '#363A33'
    },
    
    tabContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      borderRadius: '10px',
      padding: '15px',
      borderRightWidth: '1px',
      borderLeftWidth: '1px',
      height: '40px',
      gap: '2px',
      ...(isWebView && {
        width: '80%',
        maxWidth: '800px',
        margin: '0 auto'
      })
    },
    
    activeTab: {
      flex: 1,
      textAlign: 'center',
      borderRadius: '10px',
      padding: '8px 5px',
      background: colors.white,
      border: `0.5px solid ${colors.featuredTabBorder}`,
      fontWeight: 500,
      fontSize: '14px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      height: '30px',
      whiteSpace: 'nowrap',
    },
    
    inactiveTab: {
      flex: 1,
      textAlign: 'center',
      borderRadius: '10px',
      padding: '8px 5px',
      border: `0.5px solid ${colors.featuredTabBorder}`,
      background: 'transparent',
      fontWeight: 400,
      fontSize: '14px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      height: '30px',
      whiteSpace: 'nowrap',
    },
    
    contactCard: {
      borderRadius: '10px',
      borderWidth: '1px',
      padding: '16px',
      border: `1px solid ${colors.featuredTabBorder}`,
      marginBottom: '16px',
      background: `${colors.white}80 50%`,
    },
    
    servicesCard: {
      height: 154,
      borderRadius: '10px',
      borderWidth: '1px',
      paddingTop: '16px',
      paddingRight: '10px',
      paddingBottom: '16px',
      paddingLeft: '10px',
      gap: '10px',
      background: `${colors.white}80 50%`,
      border: `1px solid ${colors.categoryBorder}`,
      ...(isWebView && {
        width: '100%',
        height: 'auto',
        minHeight: '200px'
      })
    },
    
    aboutCard: {
      height: 134,
      borderRadius: '10px',
      borderWidth: '1px',
      paddingTop: '16px',
      paddingRight: '10px',
      paddingBottom: '16px',
      paddingLeft: '10px',
      gap: '10px',
      background: `${colors.white}80 50%`,
      border: `1px solid ${colors.categoryBorder}`,
      marginTop: '16px',
      ...(isWebView && {
        width: '100%',
        height: 'auto',
        minHeight: '150px'
      })
    },
    
    serviceItem: {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '170%',
      width: 332,
      height: 20,
      color: '#333',
      marginBottom: '8px',
      display: 'flex',
      alignItems: 'center',
      ...(isWebView && {
        width: 'auto',
        fontSize: '14px'
      })
    },
    
    webContent: {
      width: '100%',
      padding: '24px 0',
      backgroundColor: colors.backgroundColor
    },
    
    webMainContent: {
      gridColumn: 'span 8',
    },
    
    webSidebar: {
      gridColumn: 'span 4',
    }
  };
}; 