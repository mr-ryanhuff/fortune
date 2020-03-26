import * as React from "react";
import { Jumbotron } from "react-bootstrap";
import { Table } from "react-bootstrap";

export default class Leaderboard extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1> Game Leaderboard </h1>
          <p>Here are the current leaders in your game:</p>
        </Jumbotron>
      </div>
    );
  }
}
