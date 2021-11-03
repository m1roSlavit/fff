import { down } from "styled-breakpoints";
import styled from "styled-components";
import { Title, TitleType } from "./Typography";

interface IDayForecastProps {
  dayForecastData?: any;
}

const DayForecast: React.FC<IDayForecastProps> = ({ dayForecastData }) => {
  return (
    <Wrapper>
      <Day as="h3">Monday</Day>
      <Temp type={TitleType.BIG}>+10</Temp>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: #f3f5f8;
  padding: 50px 20px;
  border-radius: 4px;
  border: 1px solid #1451ff;
  min-height: 220px;

  ${down("sm")} {
    padding: 20px 20px;
    min-height: 120px;
    text-align: left;
  }
`;

const Day = styled(Title)`
  margin-bottom: 24px;
`;
const Temp = styled(Title)``;

export default DayForecast;
