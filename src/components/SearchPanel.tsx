import { SearchIcon } from '@heroicons/react/outline';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import {
  fetchCurrentWeather,
  fetchForecastForWeek,
} from '../store/actions/forecastActions';
import { addItemToSearchHistory } from '../store/actions/historyActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

import { Button } from './Button';
import { Input } from './Input';

const SearchPanel = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const { currentWeather } = useTypedSelector((state) => state.forecast);

  const onSearchFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(fetchCurrentWeather(searchQuery));
    dispatch(fetchForecastForWeek(searchQuery));
    dispatch(addItemToSearchHistory(searchQuery));
  };

  const onSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchCurrentWeather('Kiev'));
    dispatch(fetchForecastForWeek('Kiev'));
  }, [dispatch]);

  return (
    <Wrapper onSubmit={onSearchFormSubmit}>
      <SearchInputWrapper>
        <SearchIcon />
        <SearchInput value={searchQuery} onChange={onSearchInputChange} />
      </SearchInputWrapper>
      <Button
        disabled={!searchQuery}
        loading={currentWeather.loading}
        type='submit'
      >
        Search
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  display: flex;
`;

const SearchInputWrapper = styled.div`
  display: flex;
  position: relative;
  margin-right: 16px;

  svg {
    width: 20px;
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const SearchInput = styled(Input)`
  padding-left: 40px;
`;

export default SearchPanel;
