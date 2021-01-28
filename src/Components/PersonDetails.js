import React, {Component} from "react"

export default class PersonDetails extends Component {
    constructor () {
        super ();

        this.state = {

        }
    }

    render () {
        return <div className="person-description">
            <h1 id="id">{this.props.currentPerson.id}/25</h1>
            <h1 id="name">
                {this.props.currentPerson.name.first} {this.props.currentPerson.name.last}
            </h1>
            <br></br>
            <h2 id="from">From: {this.props.currentPerson.city }, {this.props.currentPerson.country}</h2>
            <h2 id="job-title">Job Title: {this.props.currentPerson.title}</h2>
            <h2 id="employer">Employer: {this.props.currentPerson.employer}</h2>

            <br></br>
            <h2 id="favorite-movie">Favorite Movies:</h2>
            <ol id="movie-list">
                <li>{this.props.currentPerson.favoriteMovies[0]}</li>
                <li>{this.props.currentPerson.favoriteMovies[1]}</li>
                <li>{this.props.currentPerson.favoriteMovies[2]}</li>
            </ol>
            
        </div>
    }
}