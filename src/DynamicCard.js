import React from 'react'
import './App.css';
class DynamicCard extends React.Component {
    constructor(props){
        super()
    }

    render(){
       const user_data = this.props.userdata
       const movies = user_data.favoriteMovies.map((item) => <li>{item}</li> )
        return (
            <div className="data-card">
                        <p className="top-right">{this.props.currentuser}/25</p>
                          <h2 class="blue-underline">{user_data.name.first} {user_data.name.last} </h2>
                            <p><b>From:</b> {user_data.city}, {user_data.country}</p>
                            <p><b>Job Title:</b> {user_data.title}</p>
                            <p><b>Employer:</b> {user_data.employer}</p>
                    <div className="last-div">
                        <p><b>Favorite Movies:</b></p>
                        <ol>
                            {movies}

                            {/* <li>Fathom</li>
                            <li>Strange Magic</li>
                            <li>Martian Child</li> */}
                        </ol>
                    </div>
                    </div>
        )
    }
}
export default DynamicCard