import MainSection from '../components/MainSection/MainSection';
import SecondSection from '../components/SecondSection/SecondSection';
import Seperator from '../components/Seperator';

const LandingPage = () => {
  return (
    <main className="container">
      <MainSection />
      <Seperator />
      <SecondSection />
    </main>
  );
}

export default LandingPage;