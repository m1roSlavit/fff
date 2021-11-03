import styled from "styled-components";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Title, TitleType } from "./Typography";

const CurrentWeather = () => {
  const { data } = useTypedSelector((state) => state.forecast.currentWeather);

  return (
    <Wrapper>
      <Title type={TitleType.MEDIUM} as="h2">
        {data?.name} (Today):
      </Title>
      {data?.main.temp}°C
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #f3f5f8;
  padding: 30px 25px;
`;

export default CurrentWeather;
