import { LinkInterface } from '../../MainSection/types/LinkInterface';
import PlacholderFavicon from "../../../assets/chrome-logo.svg";

type HistoryLinkProps = {
  linkData: LinkInterface;
};

const HistoryLink = ({ linkData }: HistoryLinkProps) => {
  const faviconLink = linkData.favicon ?? PlacholderFavicon;


  return (
    <a className="history__link" href={linkData.url}>
      {linkData.url == undefined ? <></> :
        <>
          <img src={faviconLink} alt={`${linkData.title} Favicon`} className="history__favicon" />
          <div className="history_desciption">
            <h4 className="history__site-name">{linkData.title}</h4>
          </div>
        </>
      }
    </a>
  );
};

export default HistoryLink; 