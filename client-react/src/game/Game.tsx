import * as React from 'react';
import {Link} from'react-router-dom'

export interface GameProps {
    gameId?: string;
}

export default class Game extends React.Component<GameProps> {
    render() {

        const gameId = this.props.gameId;
        return (
            <div>{gameId ? `Private: ${gameId}` : `Global`}<br></br><Link to='/leaderboard'><button className="leaderBoard-button">Leaderboard</button></Link></div>
        )
    }
}