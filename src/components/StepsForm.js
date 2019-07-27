import React, { Component } from 'react';
import Input from './Input';
import StepsList from './StepsList';

import sortArray from '../helpers/sortArray';
const uuidv1 = require('uuid/v1');

export default class StepsForm extends Component {
  state = {
    walks: [
      { date: '20.07.2019', km: 5.7, id: '123' },
      { date: '19.07.2019', km: 14.2, id: '456' },
      { date: '18.07.2019', km: 3.4, id: '789' },
    ],
  };

  constructor() {
    super();
    this.onEnter = this.onEnter.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }


  onEnter(newWalk) {
    const id = uuidv1();
    const walks = this.state.walks;
    const newWalks = [...walks];
    const dates = walks.map(walk => walk.date);
    if (dates.includes(newWalk.date)) {
      newWalks.forEach(walk => {
        if (walk.date === newWalk.date) {
          walk.km = +walk.km + +newWalk.km
        }
      })
    } else {
      newWalks.push({...newWalk, id })
    }

    newWalks.forEach(walk => {
      const km = +walk.km;
      if (Number.isInteger(km)) return;
      walk.km = km.toFixed(1);
    })

    this.setState({ walks: sortArray(newWalks)});
  }

  onDelete(id) {
    const walks = this.state.walks;
    const newWalks = walks.filter(walk => walk.id !== id);
    this.setState({ walks: newWalks });
  }

  render() {
    return (
      <div>
        <Input onEnter={this.onEnter} />
        <StepsList onDelete={this.onDelete} walks={this.state.walks} />
      </div>
    );
  }
}
