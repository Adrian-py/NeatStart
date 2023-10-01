import TopSitesLink from './TopSitesLink';
import { LinkInterface } from '../../MainSection/types/LinkInterface';

type TopSitesLinksProps = {
  topSitesLinks: LinkInterface[];
};

const TopSitesLinks = ({ topSitesLinks }: TopSitesLinksProps) => {
  const renderTopSitesLinks = (): JSX.Element => {
    return (
      <>
        {topSitesLinks.map((link: LinkInterface, index: number) => {
          return <TopSitesLink linkData={link} key={index} />
        })}
      </>
    )
  };
  return (
    <div className="top-sites__links">
      {renderTopSitesLinks()}
    </div>
  );
};

export default TopSitesLinks;