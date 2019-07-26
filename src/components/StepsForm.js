import React, { Component } from 'react';
import Input from './Input';
import StepsList from './StepsList';

export default class StepsForm extends Component {
  state = {
    walks: [
      { date: '20.07.2019', km: 5.7 },
      { date: '19.07.2019', km: 14.2 },
      { date: '18.07.2019', km: 3.4 },
    ],
  };

  render() {
    return (
      <div>
        <Input />
        <StepsList walks={this.state.walks} />
      </div>
    );
  }
}
