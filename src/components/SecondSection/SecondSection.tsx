import TopSites from './components/TopSites';
import { LinkInterface } from '../MainSection/types/LinkInterface';
import History from './components/Hitsory';
import { useEffect, useState } from 'react';
import useLinks from '../../hooks/useLinks';

const SecondSection = () => {
  const { getHistory, getTopSites } = useLinks();

  const [topSitesLinks, setTopSitesLinks] = useState<LinkInterface[]>([]);
  const [historyLinks, setHistoryLinks] = useState<LinkInterface[]>([]);

  useEffect(() => {
    getTopSites(setTopSitesLinks);
    getHistory(setHistoryLinks);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="second-section">
      <TopSites topSitesLinks={topSitesLinks} />
      <History historyLinks={historyLinks} />
    </section>
  )
};

export default SecondSection;