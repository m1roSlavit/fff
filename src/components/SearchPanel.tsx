import React, { useState, useEffect } from "react";
import { SearchIcon } from "@heroicons/react/outline";
import styled from "styled-components";
import { toast } from "react-toastify";

import { Button } from "./Button";
import { Input } from "./Input";

import { useDispatch } from "react-redux";
import { fetchCurrentWeather } from "../store/actions/forecastActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { addItemToSearchHistory } from "../store/actions/historyActions";

const SearchPanel = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  const onSearchHandle = () => {
    dispatch(fetchCurrentWeather(searchQuery, true));
  };

  const onSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const { currentWeather } = useTypedSelector((state) => state.forecast);

  useEffect(() => {
    if (currentWeather.error) {
      toast.error(currentWeather.error, {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    }
  }, [currentWeather.error]);

  return (
    <Wrapper>
      <SearchInputWrapper>
        <SearchIcon />
        <SearchInput value={searchQuery} onChange={onSearchInputChange} />
      </SearchInputWrapper>
      <Button
        disabled={!searchQuery}
        loading={currentWeather.loading}
        onClick={() => onSearchHandle()}
      >
        Search
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
