import ContentLoader from 'react-content-loader';
import { down } from 'styled-breakpoints';
import styled from 'styled-components';

const DayForecastContentLoader = styled(ContentLoader)`
  max-width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 6px;

  ${down('sm')} {
    height: 120px;
    width: 100%;
  }
`;

const DayForecastPlaceholder = () => (
  <>
    <DayForecastContentLoader>
      <rect x='0' y='0' rx='0' ry='0' width='600' height='300' />
    </DayForecastContentLoader>
  </>
);

const WeekForecastPlaceholder = () => {
  return (
    <>
      <WeekForecastWrapper>
        <Col>
          <DayForecastPlaceholder />
        </Col>
        <Col>
          <DayForecastPlaceholder />
        </Col>
        <Col>
          <DayForecastPlaceholder />
        </Col>
        <Col>
          <DayForecastPlaceholder />
        </Col>
        <Col>
          <DayForecastPlaceholder />
        </Col>
      </WeekForecastWrapper>
    </>
  );
};

const WeekForecastWrapper = styled.div`
  display: flex;
  width: calc(100% + 20px);
  margin: 0 -10px;
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

export default WeekForecastPlaceholder;
