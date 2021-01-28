import React, {Component} from "react";
import PersonDetails from "./PersonDetails";
import people from "../data";

export default class PersonContainer extends Component {
    constructor() {
        super();

        this.state = {
            currentIndex: 0,
        }
    }

    previousPerson() {
        let index = this.state.currentIndex;
        if(index > 0) {
            this.setState ({currentIndex: index - 1})
        }
    }

    nextPerson() {
        let index = this.state.currentIndex;
        if(index < people.length - 1) {
            this.setState({currentIndex: index + 1})
        }
    }

    render() {
        return (
            <div className="info-container">
                <PersonDetails currentPerson={people[this.state.currentIndex]}/>
                <h3 onClick={() => this.previousPerson()} id="previous-button">{"<"} Previous</h3>
                <h3 onClick={() => this.nextPerson()} id="next-button">Next {">"}</h3>
                <div className='blue-buttons-container'>
                    <button className='blue-button'>Edit</button>
                    <button className='blue-button'>Delete</button>
                    <button className='blue-button'>New</button>
                </div>
            </div>
        )
    } 
}