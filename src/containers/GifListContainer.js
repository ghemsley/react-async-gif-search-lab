import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
  constructor() {
    super()
    this.state = {
      images: []
    }
  }

  handleSubmit = (event, query) => {
    event.preventDefault()
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`
    )
      .then((response) => response.json())
      .then((json) => {
        const images = []
        for (const element of json.data) {
          images.push(element.images.original.url)
        }
        this.setState({ images: images })
      })
  }

  render() {
    return (
      <div>
        <GifSearch handleSubmit={this.handleSubmit} />
        <GifList images={this.state.images} />
      </div>
    )
  }
}

export default GifListContainer
