import * as React from "react";
import sort from "fast-sort";
import { MDBDataTable } from "mdbreact";

import Actions from '../redux/actions';
import { RootState } from '../redux/reducers';
import { connect } from 'react-redux';

import CurrentLeader from './CurrentLeader';

interface LeaderBoardProps {
  name?: string;
  gameId?: string;
  allLeaders: Array<{ id: number, name: string, score: string }>;
  getAllLeaders: () => {};
}

class Leaderboard extends React.Component<LeaderBoardProps> {

  componentDidMount() {
    this.props.getAllLeaders();
  }

  render() {
    const {
      allLeaders,
    } = this.props;

    // TODO: IMPORTANT `u.id` need to change to `u.score`
    sort(allLeaders).desc((u: any) => u.symbol);
    for (let i = 0; i < allLeaders.length; i++) {
      allLeaders[i].id = i + 1;
    }

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
      rows: allLeaders
    };
    return (
      <>
        <CurrentLeader name={'FaZe Crypto'} />
        <MDBDataTable bordered striped small data={ data } />
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  allLeaders: state.leaders.leaders,
});
const mapDispatchToProps = {
  getAllLeaders: Actions.leaders.getAllLeaders,
};
export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);

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
