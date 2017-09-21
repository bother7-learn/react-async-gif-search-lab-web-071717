import React from 'react'
import GifSearch from './GifSearch'
import GifListContainer from '../containers/GifListContainer'
import NavBar from './NavBar'

// the App component should render out the GifListContainer component

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      search: "",
      sendSearch: null,
      urls: []
    }
  }

  changeSearch(event) {
    this.setState({search: event.target.value})
  }

  submitForm(event){
    var component = this;
    event.preventDefault()
    let url = "http://api.giphy.com/v1/gifs/search?q=" +this.state.search +"&api_key=dc6zaTOxFJmzC"
    fetch(url)
    .then(function (resp) {
      return resp.json()})
    .then(function (gif){
      return component.setState({urls: gif.data.map(function(one) {
        // debugger
        return one.images.original.url})})
    })
  }
  render () {
    return (
      <div>
          < NavBar color='black' title="Giphy Search" />
          < GifSearch submitForm={this.submitForm.bind(this)} searchValue={this.search} changeSearch={this.changeSearch.bind(this)}/>
          < GifListContainer gifQuery={this.state.sendSearch} urls={this.state.urls}/>
      </div>
    )
  }

}

export default App
