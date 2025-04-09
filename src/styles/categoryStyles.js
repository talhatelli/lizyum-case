import { colors } from '../utils/colors';

export const categoryStyles = {
  sizeConfig: {
    small: { min: '110px', max: '120px' },
    medium: { min: '160px', max: '180px' },
    large: { min: '220px', max: '240px' }
  },
  
  card: {
    height: '56px',
    padding: '8px 14px',
    borderRadius: '18px',
    backgroundColor: colors.categoryCardBg,
    border: `1px solid ${colors.categoryBorder}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexShrink: 0,
    marginRight: '10px'
  },
  
  icon: {
    width: '40px', 
    height: '40px',
    backgroundColor: colors.categoryIconBg,
    borderRadius: '10px',
    borderRightWidth: '0.5px',
    borderLeftWidth: '0.5px',
    borderTopWidth: '0.5px',
    borderBottomWidth: '0.5px',
    borderStyle: 'solid',
    borderColor: colors.categoryIconBorder,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '12px',
    fontSize: '14px'
  },
  
  title: {
    color: colors.categoryTitle,
    fontSize: '14px'
  },
  
  row: {
    scrollbarWidth: 'none',
    msOverflowStyle: 'none'
  },
  
  css: `
    .hide-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .hide-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `
};

export default categoryStyles; 