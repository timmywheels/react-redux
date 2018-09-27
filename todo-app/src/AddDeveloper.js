import React, { Component } from 'react';

class AddDeveloper extends Component {

    state = {
        name: null,
        age: null,
        tech: null
    };

    handleChange = (e) => {
        this.setState({
            // grab the key of the state object using bracket notation
            [e.target.id]: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id={"name"} onChange={this.handleChange}/>
                    <label htmlFor="age">Age:</label>
                    <input type="text" id={"age"} onChange={this.handleChange}/>
                    <label htmlFor="tech">Tech:</label>
                    <input type="text" id={"tech"} onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddDeveloper;