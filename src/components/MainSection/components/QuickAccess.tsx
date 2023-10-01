import QuickAccessLinks from './QuickAccessLinks';
import { LinkInterface } from '../types/LinkInterface';
import { useEffect, useState } from 'react';

type QuickAccessProps = {
  quickAccessLinks: LinkInterface[];
};

const minNumberOfLinks = 8;

const QuickAccess = ({ quickAccessLinks }: QuickAccessProps) => {
  const [links, setLinks] = useState<LinkInterface[]>([]);

  useEffect(() => {
    const newLinks = [];

    for (let i = 0; i < minNumberOfLinks; i++) {
      if (i < quickAccessLinks.length) {
        newLinks.push(quickAccessLinks[i]);
        continue;
      }

      newLinks.push({} as LinkInterface);
    }

    setLinks(newLinks);
  }, [quickAccessLinks]);

  return (
    <div className="quick-access">
      <h3 className="section-title quick-access__title ">Quick Access</h3>
      <QuickAccessLinks quickAccessLinks={links} />
    </div>
  );
};

export default QuickAccess;