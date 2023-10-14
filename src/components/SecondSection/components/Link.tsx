import { LinkInterface } from '../../MainSection/types/LinkInterface';

type LinkProps = {
  linkData: LinkInterface;
};

const Link = ({ linkData }: LinkProps) => {
  return (
    <a className="links__link" href={linkData.url}>
      {linkData.url == undefined ? <></> :
        <>
          <img src={linkData.favicon} alt={`${linkData.title} Favicon`} className="links__favicon" />
          <div className="links__description">
            <h4 className="links__site-name">{linkData.title}</h4>
          </div>
        </>
      }
    </a>
  );
};

export default Link; 