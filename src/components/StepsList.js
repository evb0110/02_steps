import React from 'react';
import PropTypes from 'prop-types';
import StepsRow from './StepsRow';

import './StepList.css';

export default function StepsList(props) {
  const handleDelete = id => props.onDelete(id);
  return (
    <table>
      <tbody>
        <tr>
          <th>Дата (ДД.ММ.ГГ)</th>
          <th>Пройдено км</th>
          <th>Действия</th>
        </tr>
        {props.walks.map(walk => (
          <StepsRow
            handleDelete={handleDelete}
            key={walk.id}
            id={walk.id}
            walk={walk}
          />
        ))}
      </tbody>
    </table>
  );
}

StepsList.propTypes = {
  walk: PropTypes.shape({
    id: PropTypes.string,
    km: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    date: PropTypes.string,
  }),
};
