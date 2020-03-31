import * as React from "react";
//mport React, { useMemo, useState, useEffect } from "react";
import { Jumbotron } from "react-bootstrap";
import {leaders} from './data'
import Table from './Table'
// import table from "./table";
/*
interface LeaderboardProps {
	getGame: (
		id: number
	) => void;
	gameId?: string;
	game: {
		data: GameType,
		gameProfile: {
			cash: string,
		},
		coins: Array<{
			id: string;
			name: string;
			symbol: string;
			number: string;
		}>
	}
	error: string;
}
*/
export default class Leaderboard extends React.Component {

  state ={
    leaders:leaders,
    isActive:false,
    pageNumber: 1,
    isEnableNext:false,
    isEnablePrev:false,
    pages:Math.ceil(leaders.length/25)
  };

  componentDidMount(){
    if(this.state.leaders.length>25)
    this.setState({
      isActive: true
    });
    if(this.state.pageNumber==1)
    this.setState({
      isEnablePrev:true
    })
    if(this.state.pageNumber==this.state.pages)
    {this.setState({
      isEnableNext:true
    })
  }
  else {this.setState({
      isEnableNext:false
    })
  }
  };
  // pageCal = () => {
  //   this.setState(prevState=>{return {pageNumber: prevState.pageNumber +1}})
  // }

  render() {
    

    return (
      <div>
        <Jumbotron>
          <h1> Game Leaderboard</h1>
          <table>
          <tr>
              <th>Rank </th>
              <th>Username</th>
              <th>Score</th>
          </tr>
          <tr>
              <td>{this.state.leaders[0].id}</td>
              <td>{this.state.leaders[0].name}</td>
              <td>{this.state.leaders[0].score}</td>
          </tr>
          <tr>
              <td>{this.state.leaders[1].id}</td>
              <td>{this.state.leaders[1].name}</td>
              <td>{this.state.leaders[1].score}</td>
          </tr>
          <tr>
              <td>{this.state.leaders[2].id}</td>
              <td>{this.state.leaders[2].name}</td>
              <td>{this.state.leaders[2].score}</td>
          </tr>
          <tr>
              <td>{this.state.leaders[3].id}</td>
              <td>{this.state.leaders[3].name}</td>
              <td>{this.state.leaders[3].score}</td>
          </tr>
          </table>



        </Jumbotron>
        {this.state.isActive && <button className="leaderBoard-button" disabled={this.state.isEnablePrev} >prev page</button>}
        {this.state.isActive && <button className="leaderBoard-button" disabled={this.state.isEnableNext}>next page</button>}              
      </div>
    );
  }
}

/* 
    - Columns is a simple array right now, but it will contain some logic later on.
    - Here in this example, we have grouped our columns into two headers. react-table is flexible enough to create grouped table headers
  */
/*
 function App() {

    const columns = useMemo(
      () => [
        {
          // first group - TV Show
          Header: "Hiscores",
          // First group columns
          columns: [
            {
              Header: "Name",
              accessor: "user.name"
            },
            {
              Header: "Score",
              // accessor: "scores"
            }
          ]
        },
      ],
      []
    );
  
    ...
  
    return (
      <div className="App">
        <Table columns={columns} data={data} />
      </div>
    );
  }
  
  export default App;

*/

/*
export default class Leaderboard extends React.Component {
    render() {
        return (
            <div>Leaderboard</div>
        )
    }
}
*/

/*
export interface LeaderboardProps {
    gameId?: string;
}
*/

/*
export default class Leaderboard extends React.Component<LeaderboardProps> {
    render() {
        const gameId = this.props.gameId;
        return (
            //<div>{gameId ? `Private: ${gameId}` : `Global`}</div>
            <div>Leaderboard</div>
        )
    }
}
*/

/*
interface LeaderboardProps {
    leaderboard: (
        username: string;
        score: int
    )
    logout: () => void;
    fetchAuthToken: () => void;
}

interface RegisterProps {
    register: (
      username: string,
      password: string,
    ) => void;
    error: string;
    loading: boolean;
  }

interface LeaderboardState {
    toLogin: boolean;
}

export default class Leaderboard extends React.Component {
    render() {
        return (
            <div>Leaderboard</div>
        )
    }
}
*/

/*
class Table extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         usernames: [
            {}
         ]
      }
   }

   render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
      return (
         <div>
            <h1>React Dynamic Table</h1>
         </div>
      )
   }
}

export default Table //exporting a component make it reusable and this is the beauty of react
*/
