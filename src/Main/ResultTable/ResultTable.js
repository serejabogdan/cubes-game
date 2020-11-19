import React from 'react';
import {getLocalStorage} from '../../utils';
import './ResultTable.css';

const ResultTable = () => {
  const formingTableRows = () => {
    const players = getLocalStorage('players') || [];
    players.sort((prev, next) => next.points - prev.points);
    return players.map((player, index) => (
      <tr key={`${player.nickname}${index}`}>
        <th scope="row">{index + 1}</th>
        <td>{player.nickname}</td>
        <td>{player.points}</td>
      </tr>
    ));
  };

  return (
    <div className="results">
      <h2>results</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Nickname</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>{formingTableRows()}</tbody>
      </table>
    </div>
  );
};

export default ResultTable;
