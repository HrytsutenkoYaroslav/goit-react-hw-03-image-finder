import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import { AppDiv } from './App.styled';
import getImages from 'services/getImages';

export default class App extends Component {
  state = {
    nameSearchImage: '',
    images: null,
    loading: false,
    totalHits: null,
    page: 1,
  };

  handleFormSubmit = nameSearchImage => {
    this.setState({ nameSearchImage });
    this.fetchImages(nameSearchImage);
  };

  fetchImages = (nameSearchImage, page = 1) => {
    this.setState({ loading: true, images: null, page, totalHits: null });

    getImages(nameSearchImage, page)
      .then(result =>
        this.setState({
          images: result.data.hits,
          totalHits: result.data.totalHits,
        })
      )
      .catch(error => console.log(error.message))
      .finally(() => this.setState({ loading: false }));
  };

  handleIncrementPage = () => {
    const { nameSearchImage, page } = this.state;
    const nextPage = page + 1;
    this.setState({ page: nextPage });
    this.fetchImages(nameSearchImage, nextPage);
  };

  render() {
    const {  images, loading, totalHits } = this.state;
    return (
      <AppDiv>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          images={images}
          loading={loading}
          totalHits={totalHits}
          onIncrementPage={this.handleIncrementPage}
        />
      </AppDiv>
    );
  }
}

App.propTypes = {
  nameSearchImage: PropTypes.string,
};




