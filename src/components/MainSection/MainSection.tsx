import Greeting from './components/Greeting';
import QuickAccess from './components/QuickAccess';

const MainSection = () => {
  return (
    <section className="main-section">
      <Greeting />
      <QuickAccess />
    </section>
  )
};

export default MainSection;