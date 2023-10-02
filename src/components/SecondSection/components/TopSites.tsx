import { useState, useEffect } from 'react';
import Links from './Links';
import fillArrayToMinimum from '../../../helpers/fillArrayToMinimum';
import { LinkInterface } from '../../MainSection/types/LinkInterface';

type TopSitesProps = {
  topSitesLinks: LinkInterface[],
};

const minNumberOfLinks = 3;

const TopSites = ({ topSitesLinks }: TopSitesProps) => {
  const [links, setLinks] = useState<LinkInterface[]>([]);

  useEffect(() => {
    const newLinks = fillArrayToMinimum<LinkInterface>(topSitesLinks, minNumberOfLinks);

    setLinks(newLinks);
  }, [topSitesLinks]);

  return (
    <div className="top-sites">
      <h3 className="section-title top-sites__title">Top Sites</h3>
      <Links linksData={links} />
    </div>
  );
};

export default TopSites;