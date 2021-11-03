import { down } from "styled-breakpoints";
import styled from "styled-components";

import { MainLayout } from "../layouts/MainLayout";
import CurrentWeather from "./CurrentWeather";
import SearchHistory from "./SearchHistory";

import SearchPanel from "./SearchPanel";
import { Title, TitleType } from "./Typography";
import WeekForecast from "./WeekForecast";

const App = () => {
  return (
    <MainLayout>
      <ContentWrapper>
        <MainTitle type={TitleType.MEDIUM} as="h1">
          Weather Forecast
        </MainTitle>
        <Section>
          <SearchPanel />
        </Section>
        <Section>
          <SearchHistory />
        </Section>
        <Section>
          <CurrentWeather />
        </Section>
        <WeekForecast />
      </ContentWrapper>
    </MainLayout>
  );
};

const MainTitle = styled(Title)`
  margin-bottom: 22px;

  ${down("sm")} {
    margin-bottom: 32px;
  }
`;

const Section = styled.div`
  margin-bottom: 64px;
`;

const ContentWrapper = styled.div``;

export default App;
