import TopSites from './components/TopSites';
import { LinkInterface } from '../MainSection/types/LinkInterface';
import History from './components/Hitsory';
import { useEffect, useState } from 'react';

const faviconUrl: string = import.meta.env.VITE_FAVICON_LINK;

const SecondSection = () => {
  const [topSitesLinks, setTopSitesLinks] = useState<LinkInterface[]>([]);
  const [historyLinks, setHistoryLinks] = useState<LinkInterface[]>([]);

  const getFaviconUrl = (url: string): string => {
    let validUrl = url;

    if (validUrl.startsWith('http://')) validUrl = validUrl.slice(7);
    else if (validUrl.startsWith('https://')) validUrl = validUrl.slice(8);
    if (validUrl.endsWith('/')) validUrl = validUrl.slice(0, validUrl.length - 1);

    return faviconUrl + validUrl + ".ico";
  };

  useEffect(() => {
    chrome.topSites.get((data) => {
      const links: LinkInterface[] = data.map((link) => {
        return { ...link, "favicon": getFaviconUrl(link.url) };
      });

      setTopSitesLinks(links);
    });

    chrome.history.search({ text: '', maxResults: 3 }, (data) => {
      const links: LinkInterface[] = data.map((link) => {
        return { "title": link.title ?? "", "url": link.url ?? "", "favicon": getFaviconUrl(link.url ?? "") };
      });

      setHistoryLinks(links);
    });
  }, []);

  return (
    <section className="second-section">
      <TopSites topSitesLinks={topSitesLinks} />
      <History historyLinks={historyLinks} />
    </section>
  )
};

export default SecondSection;