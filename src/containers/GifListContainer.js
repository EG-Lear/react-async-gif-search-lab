import React, {Component} from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GifListContainer extends Component {
    state = {
        gifs: []
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(event)
        //fetch('https://api.giphy.com/v1/gifs/search?q=' + '' + '&api_key=2CQvLfbbBjCKNmPYVKgTPgE5vPO0KKof&rating=g')
    }

    render() {
        return(
            <div>
                {/* <GifList /> */}
                <GifSearch theSubmit={this.handleSubmit}/> 
            </div>
        )
    }

}

export default GifListContainer