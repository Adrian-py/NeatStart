import { useEffect, useState } from 'react';
import { LinkInterface } from '../../MainSection/types/LinkInterface';

type LinkProps = {
  linkData: LinkInterface;
};

const Link = ({ linkData }: LinkProps) => {
  const [faviconLink, setFaviconLink] = useState<string>(linkData.favicon ?? '');

  const handleImageNotFound = () => {
    setFaviconLink('/assets/dummy-favicon.png');
  };

  useEffect(() => {
    setFaviconLink(linkData.favicon);
  }, [linkData.favicon]);

  return (
    <a className="links__link" href={linkData.url}>
      {linkData.url == undefined ? <></> :
        <>
          <img src={faviconLink} alt={`${linkData.title} Favicon`} className="links__favicon" onError={handleImageNotFound} />
          <div className="links__description">
            <h4 className="links__site-name">{linkData.title}</h4>
          </div>
        </>
      }
    </a>
  );
};

export default Link; 