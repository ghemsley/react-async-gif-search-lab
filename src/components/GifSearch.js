import React, { Component } from 'react'

class GifSearch extends Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <form onSubmit={(event) => this.props.handleSubmit(event, this.state.value)}>
        <input
          type='text'
          value={this.state.value}
          onChange={(event) => this.handleChange(event)}
        />
        <button type='submit'>Search</button>
      </form>
    )
  }
}

export default GifSearch
