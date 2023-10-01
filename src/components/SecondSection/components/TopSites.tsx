import { useState, useEffect } from 'react';
import TopSitesLinks from './TopSitesLinks';
import { LinkInterface } from '../../MainSection/types/LinkInterface';

type TopSitesProps = {
  topSitesLinks: LinkInterface[],
};

const minNumberOfLinks = 3;

const TopSites = ({ topSitesLinks }: TopSitesProps) => {
  const [links, setLinks] = useState<LinkInterface[]>([]);

  useEffect(() => {
    const newLinks = [];

    for (let i = 0; i < minNumberOfLinks; i++) {
      if (i < topSitesLinks.length) {
        newLinks.push(topSitesLinks[i]);
        continue;
      }

      newLinks.push({} as LinkInterface);
    }

    setLinks(newLinks);
  }, [topSitesLinks]);

  return (
    <div className="top-sites">
      <h3 className="section-title top-sites__title">Top Sites</h3>
      <TopSitesLinks topSitesLinks={links} />
    </div>
  );
};

export default TopSites;