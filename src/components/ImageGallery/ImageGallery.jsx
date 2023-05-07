import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import { ImageGalleryUl } from './ImageGallery.styled';

const ImageGallery = ({ images, loading, totalHits, onIncrementPage }) => (
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

    {totalHits > 12 && <Button onClick={onIncrementPage} />}
  </>
);

ImageGallery.propTypes = {
  images: PropTypes.array,
  loading: PropTypes.bool,
  totalHits: PropTypes.number,
  onIncrementPage: PropTypes.func,
};

export default ImageGallery;
