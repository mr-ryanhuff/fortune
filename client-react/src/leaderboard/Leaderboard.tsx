import * as React from "react";
import { leaders } from "./data";
import { MDBDataTable } from "mdbreact";
import sort from "fast-sort";

sort(leaders).desc(u => u.score);
for (let i = 0; i < leaders.length; i++) {
  leaders[i].id = i + 1;
}

const DatatablePage = () => {
  const data = {
    columns: [
      {
        label: "Rank",
        field: "id",
        width: 150
      },
      {
        label: "Username",
        field: "name",
        width: 270
      },
      {
        label: "Score",
        field: "score",
        sort: "asc",
        width: 200
      }
    ],
    rows: leaders
  };

  return <MDBDataTable striped bordered small data={data} />;
};
export default DatatablePage;

/*
import React, { Component } from 'react'
import Leaderboarder from './Leaderboard1'

export default class Leaderboarder1 extends Component {
    render() {
        return (
            <Leaderboarder>
                
            </Leaderboarder>
        )
    }
}
*/
