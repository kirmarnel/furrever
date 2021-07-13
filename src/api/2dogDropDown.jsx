//renders dropdown with breed names from animalSearch.js

import React from 'react';

const breedsName = require('./1searchByBreed')

class dogBreed extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            dogs: [],
        };
    }
    
    componentDidMount() {
        this.setState({
            dogs: [
                {name: `${breedsName}`}
            ]
        })
    } 
    
    render() {
        const {dogs} = this.state;
        let dogList = dogs.length > 0
        && dogs.map((item, i) => {
            return (
                <option key={i} value ={item.name}></option>
            )
        }, this);
        return (
            <div>
                <select>
                    {dogList}
                </select>
            </div>
        )
    }
}

export default dogBreed;