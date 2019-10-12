import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__h3">Your Options</h3>

      <button
        className="button button--link"
        onClick={props.handleDeleteAll}
      >
        Remove all
      </button>
    </div>

    {
      props.options.length === 0 && <p className="widget__p">Please Add an option to get started</p>
    }

    {
      props.options.map((option, index) => (
        <Option
          key={(index + 1)}
          optionText={option}
          count={(index + 1)}
          handleDeleteOne={props.handleDeleteOne}
        />
      ))
    }

  </div>
);


export default Options;