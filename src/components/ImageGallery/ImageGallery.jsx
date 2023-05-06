import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getImages from 'services/getImages';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import { ImageGalleryUl } from './ImageGallery.styled';

export default class ImageGallery extends Component {
  state = {
    images: null,
    loading: false,
    totalHits: null,
    page: 1,
    loadedImagesCount: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.nameSearchImage !== this.props.nameSearchImage) {
      this.setState({ images: null, page: 1, totalHits: null, loadedImagesCount: 0 });

      this.setState({ loading: true }, () => {
        getImages(this.props.nameSearchImage, this.state.page)
          .then(result => {
            const { hits, totalHits } = result.data;
            this.setState({
              images: hits,
              totalHits,
              loadedImagesCount: hits.length,
              loading: false,
            });
          })
          .catch(error => {
            console.log(error.message);
            this.setState({ loading: false });
          });
      });
    }

    if (
      prevState.page !== this.state.page &&
      prevProps.nameSearchImage === this.props.nameSearchImage
    ) {
      this.setState({ loading: true }, () => {
        getImages(this.props.nameSearchImage, this.state.page)
          .then(result => {
            const { hits } = result.data;
            this.setState(prevState => ({
              images: [...prevState.images, ...hits],
              loadedImagesCount: prevState.loadedImagesCount + hits.length,
              loading: false,
            }));
          })
          .catch(error => {
            console.log(error.message);
            this.setState({ loading: false });
          });
      });
    }
  }

  handleIncrementPage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, loading, totalHits } = this.state;
    return (
      <>
        <ImageGalleryUl>
          {images &&
            images.map(({ id, webformatURL, largeImageURL, tags }) => (
              <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                tags={tags}
              />
            ))}
        </ImageGalleryUl>

        {loading && <Loader />}

        {totalHits > 12 && <Button onClick={this.handleIncrementPage} />}
      </>
    );
  }
}

ImageGallery.propTypes = {
  nameSearchImage: PropTypes.string,
};
