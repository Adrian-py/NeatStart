import { LinkInterface } from '../components/MainSection/types/LinkInterface';

const faviconUrl: string = import.meta.env.VITE_FAVICON_LINK;

function useLinks() {
  // get favicons of links
  const getFaviconLink = (url: string): string => {
    let validUrl = url;

    if (validUrl.startsWith('http://')) validUrl = validUrl.slice(7);
    else if (validUrl.startsWith('https://')) validUrl = validUrl.slice(8);
    if (validUrl.endsWith('/')) validUrl = validUrl.slice(0, validUrl.length - 1);

    return faviconUrl + validUrl + ".ico";
  };

  // get top sites from chrome
  function getTopSites(setFunction: React.Dispatch<React.SetStateAction<LinkInterface[]>>){
    chrome.topSites.get((topSites) => {
      const topSitesLinks = topSites.map((site) => {
        return {...site, "favicon": getFaviconLink(site.url)};
      });

      setFunction(topSitesLinks);
    });
  }
  
  // get history from chrome
  function getHistory(setFunction: React.Dispatch<React.SetStateAction<LinkInterface[]>>){
    chrome.history.search({text: '', maxResults:3 }, (historySites) => {
        const historyLinks = historySites.map((site) => {
          const historyLink = {
            "title": site.title ?? "", 
            "url": site.url ?? "", 
            "favicon": getFaviconLink(site.url ?? "")
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