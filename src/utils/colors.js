/**
 * Application color palette
 */
export const colors = {
  // Background colors
  lightBlue: '#E5EEFF',
  white: '#FFFFFF',
  
  // Text colors
  darkText: '#27272E',
  secondaryText: '#777E90',
  
  // UI element colors
  lightGray: '#D9D9D9',
  
  // Tab colors
  activeTab: '#2483F0',
  inactiveTab: '#6A6C6A',
  backgroundColor: '#F4F5F6',
  
  // Add more colors as needed for the application
};

/**
 * Converts a hex color to an SVG filter string for use in the filter CSS property
 * This is used to change the color of SVG icons
 * @param {string} hexColor - The hex color to convert to a filter
 * @returns {string} - The CSS filter string
 */
export const hexToFilter = (hexColor) => {
  // Skip conversion for default inactive color
  if (hexColor === colors.inactiveTab) {
    return 'none';
  }
  
  // Convert hex to RGB
  const r = parseInt(hexColor.slice(1, 3), 16) / 255;
  const g = parseInt(hexColor.slice(3, 5), 16) / 255;
  const b = parseInt(hexColor.slice(5, 7), 16) / 255;
  
  // Calculate filter values
  // This is a simplified approximation that works for many cases
  const sepia = r > b ? r - b : 0;
  const saturation = (Math.max(r, g, b) - Math.min(r, g, b)) * 100;
  
  let hue = 0;
  if (b > r && b > g) {
    hue = 240; // Blue dominant
  } else if (g > r && g > b) {
    hue = 120; // Green dominant
  } else if (r > g && r > b) {
    hue = 0; // Red dominant
  }
  
  // For our blue activeTab color
  if (hexColor === colors.activeTab) {
    return 'invert(42%) sepia(93%) saturate(1352%) hue-rotate(196deg) brightness(91%) contrast(98%)';
  }
  
  return `invert(${Math.round(sepia * 100)}%) sepia(${Math.round(saturation)}%) saturate(${Math.round(saturation * 10)}%) hue-rotate(${hue}deg) brightness(${Math.round(r * 100)}%) contrast(${Math.round(g * 100)}%)`;
}; 