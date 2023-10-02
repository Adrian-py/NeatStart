import { useState, useEffect } from 'react';
import Links from './Links';
import fillArrayToMinimum from '../../../helpers/fillArrayToMinimum';
import { LinkInterface } from '../../MainSection/types/LinkInterface';

type HistoryProps = {
  historyLinks: LinkInterface[],
};

const minNumberOfLinks = 3;

const History = ({ historyLinks }: HistoryProps) => {
  const [links, setLinks] = useState<LinkInterface[]>([]);

  useEffect(() => {
    const newLinks = fillArrayToMinimum<LinkInterface>(historyLinks, minNumberOfLinks);

    setLinks(newLinks);
  }, [historyLinks]);

  return (
    <div className="history">
      <h3 className="section-title history__title">History</h3>
      <Links linksData={links} />
    </div>
  );
};

export default History;