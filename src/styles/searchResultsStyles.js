import { colors } from '../utils/colors';

export const getSearchResultsStyles = () => {
  return {
    container: {
      backgroundColor: colors.backgroundColor,
      minHeight: '100vh',
      padding: '0.75rem 1rem'
    },
    
    card: {
      borderRadius: '10px',
      padding: '16px',
      gap: '10px',
      borderWidth: '1px',
      background: colors.searchResultCardBg,
      border: `1px solid ${colors.searchResultBorder}`,
      marginBottom: '16px',
      position: 'relative',
      cursor: 'pointer'
    },
    
    messageButton: {
      borderRadius: '8px',
      borderWidth: '1px',
      padding: '10px 14px',
      gap: '4px',
      background: colors.searchResultMessageBg,
      border: `1px solid ${colors.searchResultMessageBorder}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      minWidth: '110px'
    },
    
    messageText: {
      fontWeight: 600,
      fontSize: '12px',
      lineHeight: '18px',
      letterSpacing: '0%',
      color: colors.searchResultMessageText
    },
    
    menuIcon: {
      position: 'absolute',
      top: '16px',
      right: '16px',
      cursor: 'pointer',
      zIndex: 2
    },
    
    contentWrapper: {
      paddingRight: '15px'
    },
    
    imageContainer: {
      flexShrink: 0,
      marginRight: '0.75rem'
    },
    
    companyImage: {
      width: '56px',
      height: '56px',
      borderRadius: '50%',
      objectFit: 'cover'
    },
    
    companyName: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '4px'
    },
    
    ratingWrapper: {
      display: 'flex',
      alignItems: 'center',
      width: '216px',
      height: '20px'
    },
    
    ratingValue: {
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '20px',
      color: 'var(--color-text-dont-edit-text-quarterary, #667085)',
      marginRight: '6px'
    },
    
    starsContainer: {
      display: 'flex',
      alignItems: 'center',
      height: '20px'
    },
    
    starFilled: {
      color: colors.starFilled,
      fontSize: '14px',
      marginRight: '2px'
    },
    
    starEmpty: {
      color: colors.starEmptyColor,
      fontSize: '14px',
      marginRight: '2px'
    },
    
    reviewCount: {
      color: colors.starReviewColor,
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '20px',
      marginLeft: '4px'
    },
    
    footer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '0.5rem'
    },
    
    priceContainer: {
      display: 'flex',
      alignItems: 'center'
    },
    
    currencySymbol: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginRight: '2px',
      marginLeft: '10px'
    },
    
    priceAmount: {
      fontSize: '24px',
      fontWeight: 'bold',
      lineHeight: '1'
    },
    
    priceDescription: {
      fontSize: '14px',
      marginLeft: '1px',
      marginTop: '2px'
    }
  };
}; 