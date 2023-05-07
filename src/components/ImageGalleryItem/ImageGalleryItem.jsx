import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import {
  ImageGalleryItemLi,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  return (
    <ImageGalleryItemLi onClick={handleToggleModal}>
    <ImageGalleryItemImage src={webformatURL} alt={tags} />
    {showModal && (
      <Modal onClose={handleToggleModal}>
        <img src={largeImageURL} alt={tags} />
      </Modal>
    )}
  </ImageGalleryItemLi>
);
};

ImageGalleryItem.propTypes = {
webformatURL: PropTypes.string,
largeImageURL: PropTypes.string,
tags: PropTypes.string,
};

export default ImageGalleryItem;
