import { LinkInterface } from '../../MainSection/types/LinkInterface';
import PlacholderFavicon from "../../../assets/chrome-logo.svg";

type LinkProps = {
  linkData: LinkInterface;
};

const Link = ({ linkData }: LinkProps) => {
  const faviconLink = linkData.favicon ?? PlacholderFavicon;

  return (
    <a className="links__link" href={linkData.url}>
      {linkData.url == undefined ? <></> :
        <>
          <img src={faviconLink} alt={`${linkData.title} Favicon`} className="links__favicon" />
          <div className="links__description">
            <h4 className="links__site-name">{linkData.title}</h4>
          </div>
        </>
      }
    </a>
  );
};

export default Link; 