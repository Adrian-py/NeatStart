import { LinkInterface } from '../types/LinkInterface';
import PlaceholderFavicon from "../../../assets/chrome-logo.svg";

type QuickAccessLinkInterface = {
  index: number;
  linkData: LinkInterface;
  handleAction: (id: number) => void;
};

const QuickAccessLink = ({ index, linkData, handleAction}: QuickAccessLinkInterface) => {
  const faviconLink = linkData?.favicon ?? PlaceholderFavicon;

  return (
    <div className="quick-access__container">
      <a className="quick-access__link" href={linkData.url ?? "#"}>
        {!linkData.url ? 
          <button className="quick-access__add" onClick={(event) => {
            event.preventDefault();
            handleAction(index)
          }}>
            <img src="/assets/add.svg" alt="" className="quick-access__add-icon" />
          </button>
        :
          <>
            <img src={faviconLink} alt={`${linkData.title} favicon`} className="quick-access__favicon" />
            <p className="quick-access__site-name">{linkData.title}</p>
          </>
        }
      </a >
      { linkData.url &&
          <button className='quick-access__edit' onClick={() => handleAction(index)}>
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">    
                <path d="M 19.171875 2 C 18.448125 2 17.724375 2.275625 17.171875 2.828125 L 16 4 L 20 8 L 21.171875 6.828125 C 22.275875 5.724125 22.275875 3.933125 21.171875 2.828125 C 20.619375 2.275625 19.895625 2 19.171875 2 z M 14.5 5.5 L 3 17 L 3 21 L 7 21 L 18.5 9.5 L 14.5 5.5 z"/>
            </svg>
          </button>
      }
    </div>
  )
};

export default QuickAccessLink;