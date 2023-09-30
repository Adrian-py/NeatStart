import { LinkInterface } from '../types/LinkInterface';
import PlaceholderFavicon from "../../../assets/chrome-logo.svg";

type QuickAccessLinkInterface = {
  linkData: LinkInterface;
};

const QuickAccessLink = ({ linkData }: QuickAccessLinkInterface) => {
  const faviconLink = linkData.favicon ?? PlaceholderFavicon;

  return (
    <a className="quick-access__link" href={linkData.url ?? "#"}>
      {linkData.url === undefined ? <></> :
        <>
          <img src={faviconLink} alt={`${linkData.title} favicon`} className="quick-access__favicon" />
          <p className="quick-access__site-name">Youtubeee</p>
        </>
      }
    </a >
  )
};

export default QuickAccessLink;