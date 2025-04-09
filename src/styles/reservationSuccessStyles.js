import { colors } from '../utils/colors';

export const getReservationSuccessStyles = () => {
  return {
    page: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '16px',
      position: 'relative',
    },
    
    card: {
      width: '100%',
      maxWidth: '375px',
      borderRadius: '16px',
      padding: '24px 16px',
      backgroundColor: colors.background,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    
    checkContainer: {
      width: '82px',
      height: '82px',
      marginBottom: '32px',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    title: {
      fontWeight: '700',
      fontSize: '32px',
      marginBottom: '24px',
      textAlign: 'center',
      color: colors.reservationTitle,
    },
    
    statusContainer: {
      width: 351,
      height: 160,
      borderRadius: '10px',
      borderWidth: '1px',
      paddingTop: '16px',
      paddingRight: '10px',
      paddingBottom: '16px',
      paddingLeft: '10px',
      gap: '10px',
      backgroundColor: ' #FFFFFF80 50%',
      border: `1px solid ${colors.reservationBorder}`,
      marginBottom: '24px',
    },
    
    statusTitle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      fontWeight: '600',
      fontSize: '15px',
      lineHeight: '170%',
      color: colors.reservationText,
      width: 283,
      height: 26,
      marginBottom: '8px',
    },
    
    date: {
      display: 'flex',
      alignItems: 'center',
      fontWeight: 400,
      fontSize: '15px',
      lineHeight: '170%',
      color: colors.reservationText,
      marginBottom: '20px',
      width: 255,
      height: 26,
    },
    
    clockIcon: {
      marginRight: '8px',
    },
    
    progressTracker: {
      marginTop: '16px',
      width: '100%',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    
    progressLine: {
      position: 'absolute',
      top: '10px',
      left: '15%',
      right: '15%',
      height: '2px',
      backgroundColor: colors.reservationProgressLine,
      zIndex: 1,
    },
    
    stepsContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      width: '90%',
      margin: '0 auto',
      position: 'relative',
      marginBottom: '6px',
    },
    
    stepContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      zIndex: 2,
      width: '70px',
    },
    
    stepCircleInactive: {
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      backgroundColor: colors.white,
      border: `2px solid ${colors.reservationProgressLine}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '4px',
    },
    
    innerCircle: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      backgroundColor: colors.reservationProgressInner,
    },
    
    stepCircleActive: {
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      backgroundColor: colors.reservationProgressActive,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '4px',
    },
    
    stepLabel: {
      fontSize: '14px',
      color: colors.reservationText,
      textAlign: 'center',
      marginTop: '4px',
      fontWeight: '500',
    },
    
    stepLabelActive: {
      fontSize: '14px',
      color: colors.reservationText,
      fontWeight: '500',
      textAlign: 'center',
      marginTop: '4px',
    },
    
    checkmarkIcon: {
      color: colors.white,
      width: '12px',
      height: '12px',
    },
    
    button: {
      width: '100%',
      padding: '16px',
      borderRadius: '8px',
      backgroundColor: colors.reservationBlue,
      color: colors.white,
      fontWeight: '600',
      fontSize: '16px',
      border: 'none',
      cursor: 'pointer',
      marginBottom: '12px',
    },
    
    secondaryButton: {
      width: '100%',
      padding: '16px',
      borderRadius: '8px',
      backgroundColor: colors.white,
      color: colors.reservationBlue,
      fontWeight: '600',
      fontSize: '16px',
      border: 'none',
      cursor: 'pointer',
    },
    
    closeButton: {
      position: 'absolute',
      top: '16px',
      right: '16px',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      cursor: 'pointer',
      fontSize: '20px',
      zIndex: 10,
    },
    
    checkmark: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 2,
    }
  };
}; 