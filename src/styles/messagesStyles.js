import { colors } from '../utils/colors';

export const getMessagesStyles = () => {
  return {
    messagesPage: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    },
    
    chatList: {
      flexGrow: 1,
      overflowY: 'auto'
    },
    
    dateDivider: {
      padding: '0.5rem 1rem',
      display: 'flex',
      alignItems: 'center'
    },
    
    dateText: {
      marginBottom: 0,
      fontWeight: 'bold',
      textAlign: 'start',
      color: colors.chatDateText
    },
    
    chatItem: {
      display: 'flex',
      alignItems: 'center',
      padding: '0.75rem 1rem',
      marginBottom: '0.25rem',
      cursor: 'pointer'
    },
    
    avatarContainer: {
      position: 'relative'
    },
    
    avatar: {
      width: '50px',
      height: '50px',
      objectFit: 'cover',
      borderRadius: '50%'
    },
    
    onlineIndicator: {
      width: '12px',
      height: '12px',
      backgroundColor: colors.chatOnlineIndicator,
      borderRadius: '50%',
      border: `2px solid ${colors.chatOnlineIndicatorBorder}`,
      position: 'absolute',
      bottom: '2px',
      right: '2px'
    },
    
    chatContent: {
      marginLeft: '0.75rem',
      flexGrow: 1
    },
    
    chatHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    
    chatName: {
      marginBottom: 0,
      fontWeight: 'bold'
    },
    
    chatTime: {
      color: colors.secondaryText,
      fontSize: 'small'
    },
    
    chatFooter: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    
    lastMessage: {
      marginBottom: 0,
      color: colors.secondaryText,
      textOverflow: 'ellipsis',
      maxWidth: '200px'
    },
    
    unreadBadge: {
      backgroundColor: colors.chatUnreadBadge,
      color: colors.white,
      fontSize: '11px',
      minWidth: '20px',
      borderRadius: '50rem',
      padding: '0.25em 0.6em',
      fontWeight: 700,
      textAlign: 'center',
      display: 'inline-block'
    },
    
    emptySearch: {
      textAlign: 'center',
      padding: '3rem 0'
    },
    
    emptySearchIcon: {
      fontSize: '2rem',
      color: colors.secondaryText
    },
    
    emptySearchText: {
      marginTop: '0.75rem',
      color: colors.secondaryText
    }
  };
}; 