import HistoryLink from './HitsoryLink';
import { LinkInterface } from '../../MainSection/types/LinkInterface';

type HistoryLinksProps = {
  historyLinks: LinkInterface[];
};

const HistoryLinks = ({ historyLinks }: HistoryLinksProps) => {
  const renderTopSitesLinks = (): JSX.Element => {
    return (
      <>
        {historyLinks.map((link: LinkInterface, index: number) => {
          return <HistoryLink linkData={link} key={index} />
        })}
      </>
    )
  };
  return (
    <div className="history__links">
      {renderTopSitesLinks()}
    </div>
  );
};

export default HistoryLinks;