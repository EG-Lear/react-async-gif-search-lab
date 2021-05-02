import React, {Component} from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GifListContainer extends Component {
    state = {
        gifs: null
    }

    fetchGifs = (query) => {
        console.log(query)
        fetch('https://api.giphy.com/v1/gifs/search?q=' + query + '&api_key=2CQvLfbbBjCKNmPYVKgTPgE5vPO0KKof&rating=g')
        .then(res => res.json())
        .then(res => {
            console.log(res)
            this.setState({
                gifs: res.data
            })
            console.log(this.state.gifs[1].images.original.url)
        })
        

    }

    renderCheck = () => {
        if (this.state.gifs === null) {
            return <ul></ul>
        } else {
            return <GifList gifs={this.state.gifs}/>
        }
    }

    render() {
        return(
            <div>
                {this.renderCheck()}
                <GifSearch getGifs={this.fetchGifs}/> 
            </div>
        )
    }

}

export default GifListContainer