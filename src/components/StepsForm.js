import React, { Component } from 'react';
import Input from './Input';
import StepsList from './StepsList';
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

  onEnter(walk) {
    const id = uuidv1();
    this.setState({ walks: [{ ...walk, id }, ...this.state.walks] });
  }


  onDelete(id) {
    console.log(id);

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