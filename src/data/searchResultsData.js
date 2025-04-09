import messageSentIcon from '../assets/icon-park-solid_message-sent.svg';
import dotsMenuIcon from '../assets/entypo_dots-three-vertical.svg';
import { searchResults } from './mockData';

export const getSearchResultsData = (searchTerm = "Temizlik Şirketi") => {
  return {
    searchTerm,
    icons: {
      messageSent: messageSentIcon,
      dotsMenu: dotsMenuIcon
    },
    results: searchResults
  };
}; 