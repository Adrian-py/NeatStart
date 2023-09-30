import QuickAccessLink from './QuickAccessLink';
import { LinkInterface } from '../types/LinkInterface';

type QuickAccessLinksProps = {
  quickAccessLinks: LinkInterface[],
};

const QuickAccessLinks = ({ quickAccessLinks }: QuickAccessLinksProps) => {
  const renderQuickAccessLinks: () => JSX.Element = () => {
    return (
      <>
        {quickAccessLinks.map((linkData) => {
          return <QuickAccessLink linkData={linkData} />
        })}
      </>
    )
  };

  return (
    <div className="quick-access__links">
      {renderQuickAccessLinks()}
    </div>
  );
};

export default QuickAccessLinks;