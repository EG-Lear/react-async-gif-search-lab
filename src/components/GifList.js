import React, {Component} from 'react';

class GifList extends Component {
    render() {
        console.log(this.props.gifs[0])
        return(
            <div>
                <ul>
                    <li><img src={this.props.gifs[0].images.original.url} alt={'dog gif'}></img></li>
                    <li><img src={this.props.gifs[1].images.original.url} alt={'dog gif'}></img></li>
                    <li><img src={this.props.gifs[2].images.original.url} alt={'dog gif'}></img></li>
                </ul>
            </div>
        )
    }
}

export default GifList