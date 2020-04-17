import React from "react";

interface CurrentLeaderState {
  name: string,
}

export default class CurrentLeader extends React.Component <CurrentLeaderState> {
  render() {
    const { name } = this.props;
  return <div className="alert alert-warning text-center"><strong>Current Leader of the Game:</strong><br /><mark>{ name }</mark></div>;
  }
};
