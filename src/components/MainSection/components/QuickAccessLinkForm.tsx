import { useContext, useEffect, useState } from "react";
import { quickAccessLinkContext } from "../context/QuickAccessLinkContext";
import useLinks from "../../../hooks/useLinks";

interface QuickAccessLinkFormParam {
    editLinkIndex: number;
    handleCloseEditModal: () => void;
}

const QuickAccessLinkForm = ({ editLinkIndex, handleCloseEditModal } : QuickAccessLinkFormParam) => {
    const { quickAccessLinks, setQuickAccessLinks } = useContext(quickAccessLinkContext);
    const { getFaviconLink, updateQuickAccessLinks } = useLinks();

    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    
    useEffect(() => {
        if(editLinkIndex === undefined) return;
        setTitle(quickAccessLinks[editLinkIndex].title);
        setUrl(quickAccessLinks[editLinkIndex].url);
    }, []);
    

    const handleUpdateQuickAccessLink = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const updatedLinkData = {
            title: title,
            url: url,
            favicon: getFaviconLink(url),
        }
        const updatedLinks = quickAccessLinks;
        updatedLinks[editLinkIndex] = updatedLinkData;

        updateQuickAccessLinks(updatedLinks);
        setQuickAccessLinks(updatedLinks);
        handleCloseEditModal();
    };

    return (
        <section className="quick-access__form__container">
            <form onSubmit={handleUpdateQuickAccessLink} className='quick-access__form'>
                <h2 className="quick-access__form__heading">Edit Quick Access Link</h2>
                <input name="title" type="text" className="quick-access__form__title" value={title} onChange={(event) => setTitle(event.target.value)}/>
                <input name="url" type="text" className="quick-access__form__url" value={url}  onChange={(event) => setUrl(event.target.value)}/>
                
                <div className="quick-access__form__button-container">
                    <button type="button" className="quick-access__form__button quick-access__form__button--cancel" onClick={() => handleCloseEditModal()}>Cancel</button>
                    <button type="submit" className="quick-access__form__button quick-access__form__button--submit">Save</button>
                </div>
            </form>
        </section>
    )
};  

export default QuickAccessLinkForm;