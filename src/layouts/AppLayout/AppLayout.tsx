import * as React from 'react';
import { Container } from '@material-ui/core';

// Custom components
import NavBar from '@components/organisms/NavBar';
import Hero from '@components/organisms/Hero';
import CardLandContainer from '@components/organisms/CardLandContainer';
import TitleSection from '@components/atoms/TitleSection';
import DescriptionSection from '@components/atoms/DescriptionSection';
import SliderFMProfiles from '@components/molecules/SliderFMProfiles/SliderFMProfiles';
import Footer from '@components/organisms/Footer';
import ScrollToTop from '@components/atoms/ScrollToTop';
import Sponsors from '@components/organisms/Sponsors/Sponsors';

// Internacionalizacion
import { useTranslation } from 'react-i18next';
import { PoweredBy } from '@components/organisms/PoweredBy/PoweredBy';

const AppLayout: React.FC = () => {
  const { t } = useTranslation('landpage', { useSuspense: false });
  // const [isSticky, setSticky] = React.useState(false);
  // const [isShowScrollToTop, setShowScrollToTop] = React.useState(false);
  // const ref = React.useRef(null);
  /*
  const handleScroll = () => {
    console.log('me', ref.current);
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
      setShowScrollToTop(ref.current.getBoundingClientRect().top <= -320);
      console.log(isSticky);
    }
  };

  React.useEffect(() => {
    const container = document.querySelector('#__next');
    container.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      container.removeEventListener('scroll', () => handleScroll);
    };
  }, []); */

  return (
    <>
      <div className={`sticky-wrapper${false ? ' sticky' : ''}`}>
        <NavBar />
      </div>
      <Container maxWidth="lg">
        <Hero />
        <CardLandContainer />
        <TitleSection text={t('applayout.titlesection5')} />
        <DescriptionSection text={t('applayout.descsection5')} />
        <Sponsors />
        <TitleSection text={t('applayout.titlesection6')} />
        <DescriptionSection text={t('applayout.descsection6')} />
        <PoweredBy />
        <TitleSection text={t('applayout.titlesection3')} />
        <DescriptionSection text={t('applayout.descsection3')} />
        <SliderFMProfiles />
      </Container>
      <ScrollToTop showScrollToTop={false} />
      <Footer />
    </>
  );
};

export default AppLayout;
