import { colors } from '../utils/colors';

export const categoryPageStyles = {
  container: {
    backgroundColor: colors.backgroundColor,
    minHeight: '100vh'
  },
  
  headerContainer: {
    position: 'sticky',
    top: 0,
    zIndex: 1000
  },
  
  backButtonContainer: {
    padding: '0 16px',
    marginBottom: '8px'
  },
  
  contentContainer: {
    padding: '8px 16px'
  },
  
  sectionTitle: {
    fontSize: '18px',
    fontWeight: '700',
    margin: '12px 16px',
    color: colors.darkText
  },
  
  sectionContainer: {
    backgroundColor: colors.white,
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
  },
  
  subCategoryItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 16px',
    borderBottom: '1px solid #f0f0f0',
    cursor: 'pointer'
  },
  
  subCategoryContent: {
    display: 'flex',
    alignItems: 'center'
  },
  
  subCategoryIcon: {
    width: '32px',
    height: '32px',
    marginRight: '12px',
    objectFit: 'cover',
    borderRadius: '50%'
  },
  
  subCategoryTitle: {
    fontSize: '16px'
  },
  
  arrowIcon: {
    color: colors.secondaryText
  }
};

export default categoryPageStyles; 