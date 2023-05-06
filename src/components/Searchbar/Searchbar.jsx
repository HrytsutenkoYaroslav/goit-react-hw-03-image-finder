import { Component } from 'react';
import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

export default class Searchbar extends Component {
  handleSearchRequest = event => {
    event.preventDefault();
    const { searchRequest } = event.target.elements;

    if (searchRequest.value.trim() === '') {
      return;
    }

    this.props.onSubmit(searchRequest.value);
    searchRequest.value = '';
  };

  render() {
    return (
      <SearchbarHeader>
        <SearchForm onSubmit={this.handleSearchRequest}>
          <SearchFormButton type="submit">
            <BsSearch />
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            name="searchRequest"
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarHeader>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
