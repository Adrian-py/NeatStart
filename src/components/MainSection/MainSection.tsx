import Greeting from './components/Greeting';
import QuickAccess from './components/QuickAccess';
import useLocalStorage from '../../hooks/useLocalStorage';
import { LinkInterface } from './types/LinkInterface';

const MainSection = () => {
  const { getFromLocalStorage } = useLocalStorage();
  const quickAccessLinks = JSON.parse(getFromLocalStorage("quick-access-links") ?? "[]") as LinkInterface[];

  return (
    <section className="main-section">
      <Greeting />
      <QuickAccess quickAccessLinks={quickAccessLinks} />
    </section>
  )
};

export default MainSection;