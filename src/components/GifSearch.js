import React, {Component} from 'react';

class GifSearch extends Component {
    state = {

    }

    render() {
        return(
            <form onSubmit={this.props.theSubmit}>
                <label>Enter a Search Term:</label><br></br>
                <input></input>
            </form>
        )
    }
}

export default GifSearch