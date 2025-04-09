import { colors } from '../utils/colors';

export const searchBarStyles = {
  container: (backgroundColor) => ({
    borderRadius: '10px',
    backgroundColor: backgroundColor
  }),
  
  iconContainer: (bgColor) => ({
    width: "40px",
    height: "40px",
    borderRadius: '50%',
    backgroundColor: bgColor,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0
  }),
  
  input: {
    boxShadow: 'none'
  }
};

export default searchBarStyles; 