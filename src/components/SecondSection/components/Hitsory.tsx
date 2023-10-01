import { useState, useEffect } from 'react';
import HistoryLinks from './HistoryLinks';
import { LinkInterface } from '../../MainSection/types/LinkInterface';

type HistoryProps = {
  historyLinks: LinkInterface[],
};

const minNumberOfLinks = 3;

const History = ({ historyLinks }: HistoryProps) => {
  const [links, setLinks] = useState<LinkInterface[]>([]);

  useEffect(() => {
    const newLinks = [];

    for (let i = 0; i < minNumberOfLinks; i++) {
      if (i < historyLinks.length) {
        newLinks.push(historyLinks[i]);
        continue;
      }

      newLinks.push({} as LinkInterface);
    }

    setLinks(newLinks);
  }, [historyLinks]);

  return (
    <div className="history">
      <h3 className="section-title history__title">History</h3>
      <HistoryLinks historyLinks={links} />
    </div>
  );
};

export default History;