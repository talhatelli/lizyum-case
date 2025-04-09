import { colors } from '../utils/colors';

export const chatStyles = {
  container: {
    height: '100vh',
    backgroundColor: colors.chatBackground
  },
  
  header: {
    boxShadow: `0 1px 3px ${colors.chatHeaderShadow}`
  },
  
  backButton: {
    backgroundColor: 'transparent'
  },
  
  avatar: {
    width: "45px",
    height: "45px",
    objectFit: "cover"
  },
  
  actionButton: {
    backgroundColor: 'transparent'
  },
  
  messageContainer: {
    overflowY: 'auto',
    backgroundColor: colors.chatBackground
  },
  
  datePill: {
    backgroundColor: colors.white,
    padding: '4px 12px',
    borderRadius: '16px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    color: colors.secondaryText,
    fontSize: '12px'
  },
  
  inputContainer: {
    boxShadow: `0 -1px 3px ${colors.chatHeaderShadow}`
  },
  
  textInput: {
    backgroundColor: colors.chatInputBg
  },
  
  iconButton: {
    backgroundColor: 'transparent'
  },
  
  sendIcon: {
    color: colors.activeTab
  },
  
  micIcon: {
    color: colors.secondaryText
  }
};

export default chatStyles; 