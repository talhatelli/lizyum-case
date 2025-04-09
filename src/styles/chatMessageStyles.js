import { colors } from '../utils/colors';

export const chatMessageStyles = {
  container: (isOwn) => ({
    display: 'flex',
    marginBottom: '12px',
    justifyContent: isOwn ? 'flex-end' : 'flex-start'
  }),
  
  avatarContainer: {
    marginRight: '8px'
  },
  
  avatar: {
    width: '35px',
    height: '35px',
    objectFit: 'cover'
  },
  
  messageBubble: (isOwn) => ({
    maxWidth: '75%',
    backgroundColor: isOwn ? colors.chatBubbleOwn : colors.chatBubbleOther,
    boxShadow: `0 1px 2px ${colors.chatBubbleShadow}`,
    padding: '8px 12px',
    borderRadius: '16px'
  }),
  
  messageText: {
    marginBottom: '4px',
    fontSize: '14px',
    color: (isOwn) => isOwn ? colors.white : colors.darkText
  },
  
  timeContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  
  timeText: (isOwn) => ({
    fontSize: '11px',
    color: isOwn ? colors.chatTimeOwn : colors.chatTimeOther
  }),
  
  readIndicator: (isRead) => ({
    fontSize: '12px',
    color: isRead ? colors.chatReadIndicator : colors.chatUnreadIndicator,
    marginLeft: '4px'
  })
};

export default chatMessageStyles; 