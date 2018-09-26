import React, { Component } from 'react';

class Developer extends Component{
    render() {
        console.log(this.props)

        const {name, age, tech } = this.props;

        return(
            <div className="ninja">
                <div>Name: {name}</div>
                <div>Age: {age}</div>
                <div>Tech: {tech}</div>
            </div>
        )
    }
}

export default Developer;