import React, { Component } from "react";
import Leaderboarder from "./Leaderboard1";
import { Link } from "react-router-dom";

export interface GameProps {
  gameId?: string;
}

export default class Leaderboarder1 extends React.Component<GameProps> {
  render() {
    const gameId = this.props.gameId;
    return <Leaderboarder></Leaderboarder>;
  }
}
