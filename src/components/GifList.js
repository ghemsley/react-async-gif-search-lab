import React, { Component } from 'react'

class GifList extends Component {
  render() {
    return (
      <ul>
        {this.props.images.map((url, i) => {
          return (
            <li key={i}>
              <img src={url} />
            </li>
          )
        })}
      </ul>
    )
  }
}

export default GifList
