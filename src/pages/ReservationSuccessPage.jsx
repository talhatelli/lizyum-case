import React from 'react';
import { colors } from '../utils/colors';
import { getReservationSuccessData } from '../data/reservationData';
import { getReservationSuccessStyles } from '../styles/reservationSuccessStyles';

function ReservationSuccessPage({ onViewDetails, onBackToHome, date = "15 Mart" }) {
  const data = getReservationSuccessData(date);
  const styles = getReservationSuccessStyles();

  return (
    <div style={styles.page}>
      <div 
        style={styles.closeButton}
        onClick={onBackToHome}
      >
        <img 
          src={data.icons.close} 
          alt="Close" 
          width="20" 
          height="20" 
        />
      </div>
      
      <div style={styles.card}>
        <div style={styles.checkContainer}>
          <img 
            src={data.icons.polygon} 
            alt="Success" 
            width="82" 
            height="82" 
          />
          <img 
            src={data.icons.checkmark} 
            alt="Checkmark" 
            width="27" 
            height="22" 
            style={styles.checkmark}
          />
        </div>
        
        <h1 style={styles.title}>{data.texts.title}</h1>
        
        <div style={styles.statusContainer}>
          <h2 style={styles.statusTitle}>{data.texts.statusTitle}</h2>
          
          <div style={styles.date}>
            <img 
              src={data.icons.time} 
              alt="Time" 
              style={styles.clockIcon}
              width="18"
              height="17"
            />
            <span>{data.texts.dateText}</span>
          </div>
          
          <div style={styles.progressTracker}>
            <div style={styles.progressLine}></div>
            
            <div style={styles.stepsContainer}>
              {data.steps.map((step, index) => (
                <div key={index} style={styles.stepContainer}>
                  {step.status === 'completed' ? (
                    <div style={styles.stepCircleActive}>
                      <svg 
                        style={styles.checkmarkIcon} 
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
                  ) : (
                    <div style={styles.stepCircleInactive}>
                      <div style={styles.innerCircle}></div>
                    </div>
                  )}
                  <span style={step.status === 'completed' ? styles.stepLabelActive : styles.stepLabel}>
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <button 
          style={styles.button}
          onClick={onViewDetails}
        >
          {data.texts.viewDetailsButton}
        </button>
        
        <button 
          style={styles.secondaryButton}
          onClick={onBackToHome}
        >
          {data.texts.homeButton}
        </button>
      </div>
    </div>
  );
}

export default ReservationSuccessPage; 