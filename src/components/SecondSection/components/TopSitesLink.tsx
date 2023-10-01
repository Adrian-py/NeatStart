import { LinkInterface } from '../../MainSection/types/LinkInterface';
import PlacholderFavicon from "../../../assets/chrome-logo.svg";

type TopSitesLinkProps = {
  linkData: LinkInterface;
};

const TopSitesLink = ({ linkData }: TopSitesLinkProps) => {
  const faviconLink = linkData.favicon ?? PlacholderFavicon;


  return (
    <a className="top-sites__link" href={linkData.url}>
      {linkData.url == undefined ? <></> :
        <>
          <img src={faviconLink} alt={`${linkData.title} Favicon`} className="top-sites__favicon" />
          <div className="top-sites_desciption">
            <h4 className="top-sites__site-name">{linkData.title}</h4>
          </div>
        </>
      }
    </a>
  );
};

export default TopSitesLink; <></>