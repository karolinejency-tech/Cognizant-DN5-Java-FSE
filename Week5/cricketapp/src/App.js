import './App.css';

import ListofPlayers from './ListofPlayers';
import ScoreBelow70 from './ScoreBelow70';
import {
  OddPlayers,
  EvenPlayers,
  ListofIndianPlayers,
  IndianPlayers
} from './IndianPlayers';

function App() {

  const flag = false;

  const players = [
    { name: "Sachin", score: 95 },
    { name: "Sehwag", score: 82 },
    { name: "Dravid", score: 68 },
    { name: "Laxman", score: 61 },
    { name: "Ganguly", score: 73 },
    { name: "Dhoni", score: 88 },
    { name: "Virat", score: 69 },
    { name: "Rohit", score: 77 },
    { name: "Rahul", score: 65 },
    { name: "Jadeja", score: 58 },
    { name: "Bumrah", score: 49 }
  ];

  const IndianTeam = [
    "Sachin",
    "Sehwag",
    "Dravid",
    "Laxman",
    "Ganguly",
    "Dhoni"
  ];

  if (flag) {
    return (
      <div>
        <h1>List of Players</h1>
        <ListofPlayers players={players} />

        <h1>Players with Score 70 or Below</h1>
        <ScoreBelow70 players={players} />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Odd Players</h1>
        <OddPlayers players={IndianTeam} />

        <h1>Even Players</h1>
        <EvenPlayers players={IndianTeam} />

        <h1>List of Indian Players Merged:</h1>
        <ListofIndianPlayers IndianPlayers={IndianPlayers} />
      </div>
    );
  }
}

export default App;