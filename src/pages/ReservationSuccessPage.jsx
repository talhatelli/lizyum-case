import React from 'react';
import { colors } from '../utils/colors';
import polygonSvg from '../assets/polygon.svg';
import groupSvg from '../assets/group.svg';
import vectorSvg from '../assets/vector.svg';
import timeSvg from '../assets/time.svg';

function ReservationSuccessPage({ onViewDetails, onBackToHome, date = "15 Mart" }) {
  const pageStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '16px',
    position: 'relative',
  };

  const cardStyles = {
    width: '100%',
    maxWidth: '375px',
    borderRadius: '16px',
    padding: '24px 16px',
    backgroundColor: colors.background,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const checkContainerStyles = {
    width: '82px',
    height: '82px',
    marginBottom: '32px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const titleStyles = {
    fontWeight: '700',
    fontSize: '32px',
    marginBottom: '24px',
    textAlign: 'center',
    color: '#000000',
  };

  const statusContainerStyles = {
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
    border: '1px solid #E6E6E6',
    marginBottom: '24px',
  };

  const statusTitleStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontWeight: '600',
    fontSize: '15px',
    lineHeight: '170%',
    color: '#363A33',
    width: 283,
    height: 26,
    marginBottom: '8px',
  };

  const dateStyles = {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 400,
    fontSize: '15px',
    lineHeight: '170%',
    color: '#363A33',
    marginBottom: '20px',
    width: 255,
    height: 26,
  };

  const clockIconStyles = {
    marginRight: '8px',
  };

  const progressTrackerStyles = {
    marginTop: '16px',
    width: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const progressLineStyles = {
    position: 'absolute',
    top: '10px',
    left: '15%',
    right: '15%',
    height: '2px',
    backgroundColor: '#D1D5DB',
    zIndex: 1,
  };

  const stepsContainerStyles = {
    display: 'flex',
    justifyContent: 'space-around',
    width: '90%',
    margin: '0 auto',
    position: 'relative',
    marginBottom: '6px',
  };

  const stepContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 2,
    width: '70px',
  };

  const stepCircleInactiveStyles = {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: '#ffffff',
    border: '2px solid #D1D5DB',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '4px',
  };

  const innerCircleStyles = {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: '#B1B5C3',
  };

  const stepCircleActiveStyles = {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: '#4387FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '4px',
  };

  const stepLabelStyles = {
    fontSize: '14px',
    color: '#363A33',
    textAlign: 'center',
    marginTop: '4px',
    fontWeight: '500',
  };

  const stepLabelActiveStyles = {
    fontSize: '14px',
    color: '#363A33',
    fontWeight: '500',
    textAlign: 'center',
    marginTop: '4px',
  };

  const checkmarkIconStyles = {
    color: 'white',
    width: '12px',
    height: '12px',
  };

  const buttonStyles = {
    width: '100%',
    padding: '16px',
    borderRadius: '8px',
    backgroundColor: '#4387FF',
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
    marginBottom: '12px',
  };

  const secondaryButtonStyles = {
    width: '100%',
    padding: '16px',
    borderRadius: '8px',
    backgroundColor: '#FFFFFF',
    color: '#4387FF',
    fontWeight: '600',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
  };

  const closeButtonStyles = {
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
  };
  
  const checkmarkStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2,
  };

  return (
    <div style={pageStyles}>
      <div 
        style={closeButtonStyles}
        onClick={onBackToHome}
      >
        <img 
          src={vectorSvg} 
          alt="Close" 
          width="20" 
          height="20" 
        />
      </div>
      
      <div style={cardStyles}>
        <div style={checkContainerStyles}>
          <img 
            src={polygonSvg} 
            alt="Success" 
            width="82" 
            height="82" 
          />
          <img 
            src={groupSvg} 
            alt="Checkmark" 
            width="27" 
            height="22" 
            style={checkmarkStyle}
          />
        </div>
        
        <h1 style={titleStyles}>Tebrikler!</h1>
        
        <div style={statusContainerStyles}>
          <h2 style={statusTitleStyles}>Rezervasyonun Oluşturuldu</h2>
          
          <div style={dateStyles}>
            <img 
              src={timeSvg} 
              alt="Time" 
              style={clockIconStyles}
              width="18"
              height="17"
            />
            <span>{date} tarihinde onaylandı.</span>
          </div>
          
          <div style={progressTrackerStyles}>
            <div style={progressLineStyles}></div>
            
            <div style={stepsContainerStyles}>
              <div style={stepContainerStyles}>
                <div style={stepCircleActiveStyles}>
                  <svg 
                    style={checkmarkIconStyles} 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" 
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <span style={stepLabelActiveStyles}>Onaylandı</span>
              </div>
              
              <div style={stepContainerStyles}>
                <div style={stepCircleInactiveStyles}>
                  <div style={innerCircleStyles}></div>
                </div>
                <span style={stepLabelStyles}>Yolda</span>
              </div>
              
              <div style={stepContainerStyles}>
                <div style={stepCircleInactiveStyles}>
                  <div style={innerCircleStyles}></div>
                </div>
                <span style={stepLabelStyles}>Başladı</span>
              </div>
              
              <div style={stepContainerStyles}>
                <div style={stepCircleInactiveStyles}>
                  <div style={innerCircleStyles}></div>
                </div>
                <span style={stepLabelStyles}>Bitti</span>
              </div>
            </div>
          </div>
        </div>
        
        <button 
          style={buttonStyles}
          onClick={onViewDetails}
        >
          Rezervasyon Detaylarına Git
        </button>
        
        <button 
          style={secondaryButtonStyles}
          onClick={onBackToHome}
        >
          Anasayfaya Dön
        </button>
      </div>
    </div>
  );
}

export default ReservationSuccessPage; 