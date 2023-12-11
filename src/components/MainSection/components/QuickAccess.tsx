import { useEffect, useState } from 'react';
import QuickAccessLinks from './QuickAccessLinks';
import useLinks from '../../../hooks/useLinks';
import { LinkInterface } from '../types/LinkInterface';
import { quickAccessLinkContext } from '../context/QuickAccessLinkContext';

const QuickAccess = () => {
  const [quickAccessLinks, setQuickAccessLinks] = useState<LinkInterface[]>([]);
  const { getQuickAccessLinks } = useLinks();

  useEffect(() => {
    const retrievedLinks = getQuickAccessLinks();
    setQuickAccessLinks(retrievedLinks);
  }, [getQuickAccessLinks]);

  return (
    <quickAccessLinkContext.Provider value={{quickAccessLinks, setQuickAccessLinks}}>
      <div className="quick-access">
        <h3 className="section-title quick-access__title">Quick Access</h3>
        <QuickAccessLinks />
      </div>
    </quickAccessLinkContext.Provider>
  );
};

export default QuickAccess;