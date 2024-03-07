import React from 'react';
import './App.css';
import teamName from './CollegeBasketballTeams.json'; //import json file

//assingn type to each variable in json file
interface TeamProps {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

//team card that contains school, mascot, and location
class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;
    return (
      <div>
        <h4>{oneTeam.school}</h4>
        <p>{oneTeam.name}</p>
        <p>
          {oneTeam.city}, {oneTeam.state}
        </p>
      </div>
    );
  }
}

// display all teams
function TeamList() {
  return (
    <div>
      {teamName.teams.map((team: TeamProps, index: number) => (
        <React.Fragment key={index}>
          <p>---</p> {/* Add a separator above each team */}
          <Team {...team} />
        </React.Fragment>
      ))}
    </div>
  );
}

//heading info
function Heading() {
  return (
    <div>
      <h1>NCAA Basketball Tournament</h1>
      <h4>All potential teams</h4>
      <h2>Let the Maddness begin!!!</h2>
    </div>
  );
}

//put it all together
function App() {
  return (
    <div className="App">
      <Heading />
      <TeamList />
    </div>
  );
}

export default App;
