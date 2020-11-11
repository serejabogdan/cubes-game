import React from 'react';
import {getLocalStorage} from '../../utils';
import './ResultTable.css';

const ResultTable = () => {
  const formingTableRows = () => {
    const players = getLocalStorage('players');
    return players.map((player, index) => (
      <tr>
        <th scope="row">{index}</th>
        <td>{player.nickname}</td>
        <td>{player.points}</td>
      </tr>
    ));
  };
  return (
    <div className="results">
      <h2>results</h2>
      <table class="table table-bordered">
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
