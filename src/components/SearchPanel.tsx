import React, { useState, useEffect } from 'react';
import { SearchIcon } from '@heroicons/react/outline';
import styled from 'styled-components';
import { toast } from 'react-toastify';

import { Button } from './Button';
import { Input } from './Input';

import { useDispatch } from 'react-redux';
import {
  fetchCurrentWeather,
  fetchForecastForWeek,
} from '../store/actions/forecastActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { addItemToSearchHistory } from '../store/actions/historyActions';

const SearchPanel = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  const onSearchFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(fetchCurrentWeather(searchQuery));
    dispatch(fetchForecastForWeek(searchQuery));
    dispatch(addItemToSearchHistory(searchQuery));
  };

  const onSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const { currentWeather } = useTypedSelector((state) => state.forecast);

  useEffect(() => {
    dispatch(fetchCurrentWeather('Kiev'));
    dispatch(fetchForecastForWeek('Kiev'));
  }, [dispatch]);

  useEffect(() => {
    if (currentWeather.error) {
      toast.error(currentWeather.error, {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    }
  }, [currentWeather.error]);

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
