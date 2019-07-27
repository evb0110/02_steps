import React from 'react';
import PropTypes from 'prop-types';
import deleteIcon from '../assets/delete.svg';
import './StepsRow.css';

export default function StepsRow({ walk, handleDelete }) {
  const onDelete = () => handleDelete(walk.id);
  return (
    <tr key={walk.id}>
      <td className="container-date">{walk.date}</td>
      <td className="container-km">{walk.km}</td>
      <td className="container-delete">
        <span onClick={onDelete}>
          <img className="delete-icon"  src={deleteIcon} alt="delete icon" />
        </span>
      </td>
    </tr>
  );
}

StepsRow.propTypes = {
  walk: PropTypes.shape({
    id: PropTypes.string,
    date: PropTypes.string,
    km: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  handleDelete: PropTypes.func,
};
