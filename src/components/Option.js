import React from 'react';

const Option = (props) =>
  // below is how to pass in arguments to eventHandlers.
  /*
    the event accepts a function, whose job is to call the eventHandler
    pass in the argument so that the event handler can do its job
    Below, when the onClick event is triggered, a function is executed
    What this function does, is to accept the event and do what the event is meant to do
    in our case call props.handleDeleteOne with its argument
  */

  (
    <div className="option">
      <p className="option__p">
        {props.count}. {props.optionText}
      </p>
      <button
        className="button button--link"
        onClick={(event) => {
          props.handleDeleteOne(props.optionText);
        }}

      >
        Remove Option
      </button>
    </div>
  );


export default Option;