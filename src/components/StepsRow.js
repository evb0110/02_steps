import React from 'react';
import './StepsRow.css'

export default function StepsRow({ walk, handleDelete }) {
  const onDelete = () => handleDelete(walk.id)
  return (
    <tr key={walk.id}>
      <td className="container-date">{walk.date}</td>
      <td className="container-km">{walk.km}</td>
      <td className="container-delete">
        <i class="material-icons" onClick={onDelete}><i class="material-icons">
        delete_forever
        </i></i>
      </td>
    </tr>
  );
}
