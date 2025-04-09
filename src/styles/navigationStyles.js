import { colors, hexToFilter } from '../utils/colors';

export const navStyles = {
  bottomNavContainer: {
    borderRadius: '10px', 
    borderTop: '1px solid #E1E2E2',
    margin: '12px',
    overflow: 'hidden'
  },
  bottomNavInner: {
    paddingLeft: '16px', 
    paddingRight: '16px'
  },
  tabButton: {
    flex: '1 1 0',
    minWidth: 0,
    maxWidth: '20%'
  },
  tabIcon: (isActive) => ({
    width: '24px', 
    height: '24px',
    filter: isActive ? hexToFilter(colors.activeTab) : 'none'
  }),
  tabText: (isActive) => ({
    color: isActive ? colors.activeTab : colors.inactiveTab,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '100%'
  }),
  activeIndicator: {
    width: '20px', 
    height: '3px', 
    backgroundColor: colors.activeTab, 
    borderRadius: '2px'
  },
  homeIndicator: {
    width: '130px', 
    height: '5px', 
    borderRadius: '3px'
  },
  desktopNavLink: (isActive) => ({
    color: isActive ? colors.activeTab : colors.inactiveTab,
    fontWeight: isActive ? 'bold' : 'normal'
  })
};

export default navStyles; 