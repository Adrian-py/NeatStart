import { useContext, useState } from 'react';
import { quickAccessLinkContext } from '../context/QuickAccessLinkContext';
import QuickAccessLink from './QuickAccessLink';
import QuickAccessLinkForm from './QuickAccessLinkForm';
import { LinkInterface } from '../types/LinkInterface';

const QuickAccessLinks = () => {
  const { quickAccessLinks } = useContext(quickAccessLinkContext);
  const [editLinkIndex, setEditLinkIndex] = useState<number | undefined>(undefined);

  const handleQuickAccessAction = (id: number) => {
    setEditLinkIndex(id);
  };
  
  const handleCloseEditModal = () => {
    setEditLinkIndex(undefined);
  };

  const renderQuickAccessLinks: () => JSX.Element = () => {
    return (
      <>
        {quickAccessLinks.map((linkData: LinkInterface, index: number) => {
          return <QuickAccessLink linkData={linkData} index={index} key={index} handleAction={handleQuickAccessAction}/>
        })}
      </>
    )
  };

  return (
    <div className="quick-access__links">
      {renderQuickAccessLinks()}
      { editLinkIndex !== undefined && <QuickAccessLinkForm editLinkIndex={editLinkIndex} handleCloseEditModal={handleCloseEditModal}/> }
    </div>
  );
};

export default QuickAccessLinks;