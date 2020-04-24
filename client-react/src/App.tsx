import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuBar from './menubar';
import Game, { CreateGame } from './game';
import Login from './login';
import Play from './play';
import Register from './register';
import Landing from './landing';
import Leaderboard from "./leaderboard";

interface MatchParams {
  gameId?: string;
}

function App() {
  return (
    <div className="App">
        <MenuBar />
        <div className="container">
          <Switch>
            <Route path="/global" render={({match, history}) => {
              return <Game gameId={match.params.gameId} history={history}/>
            }}
            exact />
            <Route path="/game/:gameId" render={({match, history}) => {
              return <Game gameId={match.params.gameId} history={history}/>
            }}
            exact />
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/play" component={Play} />
            <Route path="/create" component={CreateGame} />
            <Route
                path={[ "/game/:gameId/leaderboard", "/global/leaderboard" ]}
                render={({ match }) => {
                  return <Leaderboard gameId={match.params.gameId} />;
                }}
            />
            <Route render={({match}) => {
              return <Redirect to="/"/>
            }} />
          </Switch>
        </div>
    </div>
  );
}

export default App;
