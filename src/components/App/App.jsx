import React, { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import { AppDiv } from './App.styled';

export default class App extends Component {
  state = {
    nameSearchImage: '',
  };

  handleFormSubmit = nameSearchImage => {
    this.setState({ nameSearchImage });
  };

  render() {
    const { nameSearchImage } = this.state;
    return (
      <AppDiv>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery nameSearchImage={nameSearchImage} />
      </AppDiv>
    );
  }
}





