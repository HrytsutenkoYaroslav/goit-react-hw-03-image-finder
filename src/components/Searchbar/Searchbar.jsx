import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [searchRequest, setSearchRequest] = useState('');

  const handleSearchRequest = event => {
    event.preventDefault();

    if (searchRequest.trim() === '') {
      return;
    }

    onSubmit(searchRequest);
    setSearchRequest('');
  };

  return (
    <SearchbarHeader>
      <SearchForm onSubmit={handleSearchRequest}>
        <SearchFormButton type="submit">
          <BsSearch />
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          name="searchRequest"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchRequest}
          onChange={event => setSearchRequest(event.target.value)}
        />
      </SearchForm>
    </SearchbarHeader>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
