import React, { useState } from 'react';

import './Input.css';

export default function Input({ onEnter }) {
  const [input, setInput] = useState({
    date: '',
    km: '',
  });

  const onAdd = (value, e) => {
    setInput({
      ...input,
      [value]: e.target.value,
    });
  };

  const onOK = () => {
    onEnter(input);
    setInput({ date: '', km: '' });
  };

  return (
    <div>
      <table className="input-table">
        <tbody>
          <tr>
            <th>Дата (ДД.ММ.ГГ)</th>
            <th>Пройдено км</th>
            <th>Подтвердить</th>
          </tr>
          <tr>
            <td>
              <input onChange={e => onAdd('date', e)} value={input.date} />
            </td>
            <td>
              <input onChange={e => onAdd('km', e)} value={input.km} />
            </td>
            <td>
              <button className="input-button" onClick={onOK}>
                OK
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
