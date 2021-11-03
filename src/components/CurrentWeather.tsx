import styled from 'styled-components';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Title, TitleType } from './Typography';

import {
  ChevronDownIcon,
  ChevronUpIcon,
  ArrowRightIcon,
} from '@heroicons/react/solid';

import { CloudIcon } from '@heroicons/react/outline';
import { down, up } from 'styled-breakpoints';
import CurrentWeatherPlaceholder from './CurrentWeatherPlaceholder';

const CurrentWeather = () => {
  const { data, loading } = useTypedSelector(
    (state) => state.forecast.currentWeather
  );

  if (loading) {
    return <CurrentWeatherPlaceholder />;
  }

  console.log(data?.wind.deg);

  return (
    <Wrapper>
      <MainTitle type={TitleType.MEDIUM} as='h2'>
        {data?.name} (Today):
      </MainTitle>
      <Content>
        <ImgWrapper>
          <img
            src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
            alt='weather'
          />
        </ImgWrapper>
        <div>
          <Temp>{data?.main.temp}°C</Temp>
          <Description>
            {data?.weather[0].main}{' '}
            <small>({data?.weather[0].description})</small>
          </Description>
          <MinMaxTemp>
            <div>
              <ChevronDownIcon />
              {data?.main.temp_min}°C
            </div>
            <div>
              <ChevronUpIcon />
              {data?.main.temp_max}°C
            </div>
          </MinMaxTemp>
        </div>
        <StatsWrapper>
          <Title as='h4'>Wind:</Title>
          <StatsItem>
            <WindDegIcon deg={data?.wind.deg ?? 0} /> {data?.wind.deg} deg
          </StatsItem>
          <StatsItem>
            <WindSpeedIcon /> {data?.wind.speed} m/s
          </StatsItem>
        </StatsWrapper>
      </Content>
    </Wrapper>
  );
};

const MainTitle = styled(Title)`
  margin-bottom: 20px;
`;

const ImgWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > *:not(:last-child) {
    margin-right: 32px;
  }
`;

const Wrapper = styled.div`
  background-color: #f3f5f8;
  padding: 30px 25px;
`;

const Temp = styled.div`
  font-size: 26px;
  font-weight: 500;
  margin-bottom: 12px;
`;

const Description = styled.div`
  margin-bottom: 12px;
  font-weight: 500;
`;

const MinMaxTemp = styled.div`
  display: flex;

  & > div {
    display: flex;
    align-items: center;

    &:first-child {
      margin-right: 16px;
    }
  }

  svg {
    width: 20px;
    height: 20px;
    margin-right: 4px;
    opacity: 0.6;
  }
`;

const StatsWrapper = styled.div`
  ${down('xs')} {
    display: flex;
    width: 100%;
    align-items: center;
    margin-top: 30px;

    & > *:not(:last-child) {
      margin-right: 30px;
    }

    & > *:first-child {
      margin-right: 20px;
    }
  }
`;

const StatsItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;

  ${up('sm')} {
    margin-top: 10px;
  }
`;

const WindDegIcon = styled(ArrowRightIcon)<{ deg: number }>`
  width: 30px;
  height: 30px;
  background: rgba(0, 0, 0, 0.05);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  padding: 5px;
  transform: ${({ deg }) => `rotate(-${deg}deg)`};
  margin-right: 16px;
`;

const WindSpeedIcon = styled(CloudIcon)`
  width: 30px;
  height: 30px;
  background: rgba(0, 0, 0, 0.05);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  padding: 5px;
  margin-right: 16px;
`;

export default CurrentWeather;
