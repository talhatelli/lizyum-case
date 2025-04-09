import { colors } from '../utils/colors';

export const serviceCardStyles = {
  card: {
    height: '100%',
    boxShadow: `0 0.125rem 0.25rem ${colors.serviceCardShadow}`
  },
  
  cardImage: (imageUrl) => ({
    backgroundImage: `url(${imageUrl})`,
    height: '140px',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }),
  
  imageOverlay: {
    background: colors.serviceImageOverlayGradient,
    color: colors.white
  },
  
  titleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  
  title: {
    marginBottom: 0,
    fontWeight: 'bold'
  },
  
  priceBadge: {
    backgroundColor: colors.servicePrimary,
    borderRadius: '50rem'
  },
  
  description: {
    color: colors.secondaryText
  },
  
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '12px'
  },
  
  detailsButton: {
    borderColor: colors.servicePrimary,
    color: colors.servicePrimary,
    borderRadius: '50rem',
    padding: '0.25rem 0.5rem',
    fontSize: '0.875rem'
  },
  
  appointmentButton: {
    backgroundColor: colors.servicePrimary,
    borderColor: colors.servicePrimary,
    color: colors.white,
    borderRadius: '50rem',
    padding: '0.25rem 0.5rem',
    fontSize: '0.875rem'
  }
};

export default serviceCardStyles; 