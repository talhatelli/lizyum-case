import { colors } from '../utils/colors';

export const servicePageStyles = {
  container: {
    backgroundColor: colors.backgroundColor,
    padding: '16px 12px'
  },
  
  categorySection: {
    marginBottom: '24px'
  },
  
  categorySectionTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '8px'
  },
  
  categoryButtonsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px'
  },
  
  categoryButton: (isActive) => ({
    backgroundColor: isActive ? colors.servicePrimary : 'transparent',
    color: isActive ? colors.white : colors.secondaryText,
    borderColor: isActive ? colors.servicePrimary : colors.secondaryText,
    borderRadius: '50rem'
  })
};

export default servicePageStyles; 