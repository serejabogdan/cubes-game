import React from 'react';
import './Info.css';

const Info = () => {
  const inputs = [
    {
      name: 'Points',
      className: 'info__points',
      id: 'points',
      placeholder: '47'
    },
    {
      name: 'Time left',
      className: 'info__time',
      id: 'time',
      placeholder: '01:00'
    }
  ];
  return (
    <div className="info">
      {inputs.map(({name, className, id, placeholder}) => (
        <div key={name} className={`${className} form-group`}>
          <label htmlFor={id}>{name}</label>
          <input type="text" className="form-control" id={id} placeholder={placeholder} />
        </div>
      ))}
    </div>
  );
};

export default Info;
