import TopSites from './components/TopSites';
import { LinkInterface } from '../MainSection/types/LinkInterface';
import History from './components/Hitsory';

const faviconUrl: string = import.meta.env.VITE_FAVICON_LINK;

const SecondSection = () => {
  // chrome.topSites.get((data) => {
  //   console.log(data);
  // })

  const getFaviconUrl = (url: string): string => {
    let validUrl = url;

    if (validUrl.startsWith('http://')) validUrl = validUrl.slice(7);
    else if (validUrl.startsWith('https://')) validUrl = validUrl.slice(8);
    if (validUrl.endsWith('/')) validUrl = validUrl.slice(0, validUrl.length - 1);

    return faviconUrl + validUrl + ".ico";
  };

  const tempLink: LinkInterface[] = [
    {
      "title": "YouTube",
      "url": "https://www.youtube.com/",
      "favicon": getFaviconUrl("https://www.youtube.com/"),
    },
    {
      "title": "Instagram",
      "url": "https://www.instagram.com/",
      "favicon": getFaviconUrl("https://www.instagram.com/"),
    },
    {
      "title": "Github",
      "url": "https://github.com/",
      "favicon": getFaviconUrl("https://github.com/"),
    },
  ]

  return (
    <section className="second-section">
      <TopSites topSitesLinks={tempLink} />
      <History historyLinks={tempLink} />
    </section>
  )
};

export default SecondSection;