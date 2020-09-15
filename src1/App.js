import React, { Component } from 'react'

class App extends Component {

  state = {
    title: '',
    plot: '',
    link: '',
    movies: []
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleAddMovie = event => {
    event.preventDefault()
    let movies = JSON.parse(JSON.stringify(this.state.movies))
    movies.push({
      title: this.state.title,
      poster: this.state.poster,
      plot: this.state.plot
    })
    this.setState({ movies, title:'', plot: '', poster: '' })
  }

  render () {
    return (
      <>
        <form>
          <label htmlFor="title">title</label>
          <input 
            type="text" 
            name="title"
            value={this.state.title}
            onChange={this.handleInputChange}/>
            <label htmlFor="plot">plot</label>
            <input 
            type="text" 
            name="plot"
            value={this.state.plot}
            onChange={this.handleInputChange}/>
            <label htmlFor="link">poster link</label>
            <input 
            type="text" 
            name="link"
            value={this.state.poster}
            onChange={this.handleInputChange}/>

          <button onClick={this.handleAddMovie}>Add Item</button>
        </form>
        <ul>
          {
            this.state.movies.map(movie => <li>{movie}</li>)
          }
        </ul>
      </>
    )
  }
}

export default App
