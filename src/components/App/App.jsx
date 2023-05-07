import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import { AppDiv } from './App.styled';
import getImages from 'services/getImages';

export default class App extends Component {
  state = {
    nameSearchImage: '',
    images: [],
    loading: false,
    totalHits: null,
    page: 1,
  };

  handleFormSubmit = nameSearchImage => {
    this.setState(
      {
        nameSearchImage,
        images: [],
        page: 1,
        totalHits: null,
      },
      this.fetchImages
    );
  };

  handleIncrementPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }), this.fetchImages);
  };

  fetchImages = () => {
    const { nameSearchImage, page } = this.state;

    if (nameSearchImage.trim() === '') {
      return;
    }

    this.setState({ loading: true });

    getImages(nameSearchImage, page)
      .then(result =>
        this.setState(prevState => ({
          images: [...prevState.images, ...result.data.hits],
          totalHits: result.data.totalHits,
          loading: false,
        }))
      )
      .catch(error => {
        console.log(error.message);
        this.setState({ loading: false });
      });
  };

  render() {
    const { nameSearchImage, images, loading, totalHits } = this.state;

    App.propTypes = {
      nameSearchImage: PropTypes.string,
      images: PropTypes.array,
      loading: PropTypes.bool,
      totalHits: PropTypes.number,
      onIncrementPage: PropTypes.func,
      };

    return (
      <AppDiv>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          nameSearchImage={nameSearchImage}
          images={images}
          loading={loading}
          totalHits={totalHits}
          onIncrementPage={this.handleIncrementPage}
        />
      </AppDiv>
    );
  }
}



