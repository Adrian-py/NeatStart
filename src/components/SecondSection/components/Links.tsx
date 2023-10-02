import { LinkInterface } from '../../MainSection/types/LinkInterface';
import Link from './Link';

type LinkProps = {
  linksData: LinkInterface[];
};

const Links = ({ linksData }: LinkProps) => {
  const renderLinks = (): JSX.Element => {
    return (
      <>
        {linksData.map((link: LinkInterface, index: number) => {
          return <Link linkData={link} key={index} />
        })}
      </>
    )
  };

  return (
    <div className="links">
      {renderLinks()}
    </div>
  );
};

export default Links;