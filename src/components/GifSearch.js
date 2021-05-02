import React, {Component} from 'react';

class GifSearch extends Component {
    state = {
        queryVal: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.getGifs(this.state.queryVal)
    }

    handleChange = (event) => {
        this.setState({
            queryVal: event.target.value 
        })
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Enter a Search Term:</label><br></br>
                <input value={this.state.queryVal} onChange={this.handleChange}></input><br></br>
                <button type={'submit'}>Find Gifs</button>
            </form>
        )
    }
}

export default GifSearch