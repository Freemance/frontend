import * as React from 'react';
import { Container } from '@material-ui/core';
import NavBar from '@components/organisms/NavBar';
import Hero from '@components/organisms/Hero';
import CardLandContainer from '@components/organisms/CardLandContainer';
import TitleSection from '@components/atoms/TitleSection';
import DescriptionSection from '@components/atoms/DescriptionSection';
import FAQContainer from '@components/molecules/FAQContainer/FAQContainer';
import SliderFMProfiles from '@components/molecules/SliderFMProfiles/SliderFMProfiles';
const AppLayout: React.FC = () => {
  return (
    <>
      <Container maxWidth="lg">
        <NavBar />
        <Hero />
        <TitleSection text="Advantajes" />
        <DescriptionSection text="Find now with professionals from all fields, and hire them for dedicated jobs, pay from Slyk and contact them." />
        <CardLandContainer />
        <TitleSection text="FAQ" />
        <DescriptionSection text="These are some of the most frequent questions that you can ask yourself in case you still do not know how the platform works, always keep in mind that this platform is still an MVP and is in Beta phase." />
        <FAQContainer />
        <TitleSection text="Profiles Preview" />
        <DescriptionSection text="These are some of the most prominent profiles on the platform currently." />
        <SliderFMProfiles />
      </Container>
    </>
  );
};

export default AppLayout;
