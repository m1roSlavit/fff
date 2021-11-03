import moment from 'moment';
import { down } from 'styled-breakpoints';
import styled from 'styled-components';
import { IDayWeather } from '../types/forecast';
import { Title, TitleType } from './Typography';

interface IDayForecastProps {
  dayForecast: IDayWeather;
}

const DayForecast: React.FC<IDayForecastProps> = ({ dayForecast }) => {
  const daySlug = moment(dayForecast.dt_txt).format('dddd');

  return (
    <Wrapper>
      <Img
        src={`https://openweathermap.org/img/wn/${dayForecast.weather[0].icon}@4x.png`}
      />
      <Day as='h3' type={TitleType.SMALL}>
        {daySlug}
      </Day>
      <Temp type={TitleType.MEDIUM}>{dayForecast.main.temp}°C</Temp>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: #f3f5f8;
  padding: 50px 10px 10px;
  border-radius: 4px;
  border: 1px solid #1451ff;
  min-height: 200px;
  position: relative;

  ${down('sm')} {
    padding: 20px 20px;
    min-height: 120px;
    text-align: left;
  }
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
  right: 10px;
  top: 10px;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
`;

const Day = styled(Title)`
  margin-bottom: 24px;
`;
const Temp = styled(Title)``;

export default DayForecast;
