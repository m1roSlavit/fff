import { down } from "styled-breakpoints";
import styled from "styled-components";
import DayForecast from "./DayForecast";

const WeekForecast = () => {
  return (
    <Wrapper>
      <Col>
        <DayForecast />
      </Col>
      <Col>
        <DayForecast />
      </Col>
      <Col>
        <DayForecast />
      </Col>
      <Col>
        <DayForecast />
      </Col>
      <Col>
        <DayForecast />
      </Col>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-width: 100%;
  display: flex;
  margin-right: -10px;
  margin-left: -10px;
  overflow-x: hidden;

  ${down("sm")} {
    flex-direction: column;
  }
`;

const Col = styled.div`
  padding: 10px;
  flex: 0 0 20%;
`;

export default WeekForecast;
