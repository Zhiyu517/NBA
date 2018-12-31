import React from 'react';
import {Profile} from './Profile'
import {ShotChart} from "./ShotChart"
import nba from 'nba'

export class Main extends React.Component {
    state = {
        playerId: nba.findPlayer('Stephen Curry').playerId
    }

    componentDidMount() {
        nba.stats.playerInfo({
            PlayerID: this.state.playerId
        }).then(
            (response) => {
                console.log(response);
        }
        )
    }
    render() {
        return (
            <div className = "main">
                <Profile/>
                <ShotChart playerId={this.state.playerId}/>
            </div>
        );
    }
}