import React from 'react';
import './StepList.css';

export default function StepsList({ walks }) {
  return (
    <table>
      <tr>
        <th>Дата (ДД.ММ.ГГ)</th>
        <th>Пройдено км</th>
        <th>Действия</th>
      </tr>
      {walks.map(walk => (
        <tr>
          <td>{walk.date}</td>
          <td>{walk.km}</td>
          <td><i class="fas fa-pencil-alt"></i></td>
        </tr>
      ))}
    </table>
  );
}
