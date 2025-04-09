import { colors } from '../utils/colors';

export const serviceListStyles = {
  container: {
    margin: '0'
  },
  
  title: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '1rem'
  },
  
  emptyStateContainer: {
    textAlign: 'center',
    padding: '3rem 0'
  },
  
  emptyStateIcon: {
    fontSize: '2rem',
    color: colors.secondaryText
  },
  
  emptyStateText: {
    marginTop: '1rem',
    color: colors.secondaryText
  },
  
  servicesGrid: {
    display: 'grid',
    gap: '1rem'
  }
};

export default serviceListStyles; 