import { LinkInterface } from '../components/MainSection/types/LinkInterface';

const faviconUrl: string = import.meta.env.VITE_FAVICON_LINK;
const UrlRegexPattern = /(?:https?:\/\/)?(?:www\d*\.)?(.*?)(?:\/.*)/;

function useLinks() {
  // get favicons of links
 function getFaviconLink (url: string = ''): string {
      const validUrl = url.match(UrlRegexPattern) || [];
      if(validUrl.length === 0) return '/assets/dummy-favicon.png';
      
      return faviconUrl + validUrl[1];
  }

  // get top sites from chrome
  function getTopSites(setFunction: React.Dispatch<React.SetStateAction<LinkInterface[]>>){
    chrome.topSites?.get((topSites) => {
      const topSitesLinks = topSites.map((site) => {
        return {...site, "favicon": getFaviconLink(site.url)};
      });

      setFunction(topSitesLinks);
    });

    setFunction([
      {
        title: 'Testing a websiteTesting a websiteTesting a websiteTesting a websiteTesting a websiteTesting a websiteTesting a websiteTesting a websiteTesting a websiteTesting a website',
        url: 'https://chat.openai.com/',
        favicon: getFaviconLink('https://chat.openai.com/'),
      }
    ]);
  }
  
  // get history from chrome
  function getHistory(setFunction: React.Dispatch<React.SetStateAction<LinkInterface[]>>){
    chrome.history?.search({text: '', maxResults:3 }, (historySites) => {
        const historyLinks = historySites.map((site) => {
          const historyLink = {
            "title": site.title ?? '', 
            "url": site.url ?? '', 
            "favicon": getFaviconLink(site.url)
          };
          return historyLink;
        });

        setFunction(historyLinks);
    });
  }

  return {
    getFaviconLink,
    getTopSites,
    getHistory,
  }
}

export default useLinks;