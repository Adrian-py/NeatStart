import { LinkInterface } from '../components/MainSection/types/LinkInterface';

const minimumNumberOfLinks = 8;
const faviconUrl: string = import.meta.env.VITE_FAVICON_LINK;
const UrlRegexPattern = /(?:https?:\/\/)?(?:www\d*\.)?(.*?)(?:\/.*)/;

function useLinks() {
  // get favicons of links
  function getFaviconLink(url: string = ''): string {
    const validUrl = url.match(UrlRegexPattern) || [];
    if (validUrl.length === 0) return '/assets/dummy-favicon.png';

    return faviconUrl + validUrl[1];
  }

  // initiate quick access links
  function initiateQuickAccessLinks(): LinkInterface[] {
    const defaultQuickAccessLinks: LinkInterface[] = [];
    for (let i = 0; i < minimumNumberOfLinks; i++)
      defaultQuickAccessLinks.push({
        title: '',
        url: '',
        favicon: '',
      } as LinkInterface);

    localStorage.setItem(
      'quick-access-links',
      JSON.stringify(defaultQuickAccessLinks)
    );
    return defaultQuickAccessLinks;
  }

  // retrieve quick access links
  function getQuickAccessLinks(): LinkInterface[] {
    const storedLinks = localStorage.getItem('quick-access-links');
    if (storedLinks === null) return initiateQuickAccessLinks();

    return JSON.parse(storedLinks);
  }

  // update quick access links
  function updateQuickAccessLinks(updatedLinks: LinkInterface[]): void {
    localStorage.setItem('quick-access-links', JSON.stringify(updatedLinks));
  }

  // get top sites from chrome
  function getTopSites(
    setFunction: React.Dispatch<React.SetStateAction<LinkInterface[]>>
  ) {
    chrome.topSites?.get((topSites) => {
      const topSitesLinks = topSites.map((site) => {
        return { ...site, favicon: getFaviconLink(site.url) };
      });

      setFunction(topSitesLinks);
    });
  }

  // get history from chrome
  function getHistory(
    setFunction: React.Dispatch<React.SetStateAction<LinkInterface[]>>
  ) {
    chrome.history?.search({ text: '', maxResults: 3 }, (historySites) => {
      const historyLinks = historySites.map((site) => {
        const historyLink = {
          title: site.title ?? '',
          url: site.url ?? '',
          favicon: getFaviconLink(site.url),
        };
        return historyLink;
      });

      setFunction(historyLinks);
    });
  }

  return {
    getFaviconLink,
    initiateQuickAccessLinks,
    getQuickAccessLinks,
    updateQuickAccessLinks,
    getTopSites,
    getHistory,
  };
}

export default useLinks;
