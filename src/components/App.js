import React from 'react'
import GifListContainer from '../containers/GifListContainer'
import NavBar from './NavBar'

// the App component should render out the GifListContainer component 

const App = () => {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        <GifListContainer />
    </div>
  )
}

export default App


//https://api.giphy.com/v1/gifs/search?q=SEARCH HERE&api_key=2CQvLfbbBjCKNmPYVKgTPgE5vPO0KKof&rating=g