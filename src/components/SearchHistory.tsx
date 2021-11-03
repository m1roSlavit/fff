import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchCurrentWeather } from "../store/actions/forecastActions";
import { Link } from "./Link";
import { Title, TitleType } from "./Typography";

const SearchHistory = () => {
  const dispatch = useDispatch();

  const { searchHistory } = useTypedSelector((state) => state.history);

  const onHistoryItemClick = (cityName: string) => {
    dispatch(fetchCurrentWeather(cityName, false));
  };

  return (
    <Wrapper>
      <Title type={TitleType.MEDIUM} as="h3">
        Last 10 queries
      </Title>
      <HistoryList>
        {searchHistory.list.length ? (
          searchHistory.list.map((label) => (
            <Link onClick={() => onHistoryItemClick(label)}>{label}</Link>
          ))
        ) : (
          <NoQueriesAlertMessage>
            No queries in history. Make your first query!
          </NoQueriesAlertMessage>
        )}
      </HistoryList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: 4px;
  padding: 30px 25px 15px;
  background-color: #f3f5f8;

  ${Title} {
    margin-bottom: 26px;
  }
`;

const HistoryList = styled.div`
  display: flex;
  overflow: auto hidden;
  padding-bottom: 15px;

  & > *:not(:last-child) {
    margin-right: 40px;
  }
`;

const NoQueriesAlertMessage = styled.div`
  font-size: 16px;
`;

export default SearchHistory;
