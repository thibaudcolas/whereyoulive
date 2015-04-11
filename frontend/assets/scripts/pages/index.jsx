'use strict';

import React from 'react';
import SuburbPicker from '../components/suburbPicker.jsx';

export default React.createClass({
  render: function() {
    return (
      <div>
        <div className='col-md-6'>
          <h2>About my Suburb</h2>
          <SuburbPicker transitionCb={this.props.transitionCb} />
        </div>
        <div className='col-md-6'>
          <h2>Find a Suburb</h2>
          <a href="javascript:void(0)" onClick={this.props.transitionCb.bind(null, 'findASuburb')} className='btn btn-primary'>Go</a>
          <a href="javascript:void(0)" onClick={this.props.transitionCb.bind(null, 'exampleCharts')} className='btn'>Charts</a>
        </div>
      </div>
    );
  }
});
