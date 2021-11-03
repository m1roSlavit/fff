import { down } from 'styled-breakpoints';
import styled from 'styled-components';
import { useTypedSelector } from '../hooks/useTypedSelector';
import DayForecast from './DayForecast';
import WeekForecastPlaceholder from './WeekForecastPlaceholder';

const WeekForecast = () => {
  const { forecastForWeek } = useTypedSelector((state) => state.forecast);

  if (forecastForWeek.loading) {
    return <WeekForecastPlaceholder />;
  }

  return (
    <Wrapper>
      {forecastForWeek.data?.map((dayForecast, idx) => (
        <Col key={idx}>
          <DayForecast dayForecast={dayForecast} />
        </Col>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-width: 100%;
  display: flex;
  margin-right: -10px;
  margin-left: -10px;
  overflow-x: hidden;

  ${down('sm')} {
    flex-direction: column;

    & > *:not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

const Col = styled.div`
  padding: 0 10px;
  flex: 0 0 20%;
`;

export default WeekForecast;
