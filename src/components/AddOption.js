import React from 'react';
class AddOption extends React.Component {
  state = {
    error: undefined
  };
  /*
    i installed a new babel package
      babel-plugin-transform-class-properties
    -a This plugin ensures that constructors are no longer necessary to be defined in a class
      as shown below

         constructor(props) 
         {
            super(props);
            this.onFormSubmit = this.onFormSubmit.bind(this);
            this.state = {
              error: undefined
            }
          }


    -b ensures that the "this" key word is bound to every method declared in a class whether event handlers or regular functions

      -b is achieved by changing the methods to be arrow functions as shown below for onFormSubmit without the 'const' keyword
  */

  onFormSubmit = event => {
    event.preventDefault();
    console.dir(event.target, 'target');
    console.log(event.target.elements.option.value, 'value');
    const option = event.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error: error }));
    if (!error) {
      event.target.elements.option.value = '';
    }
  };
  render() {
    return (
      <div>
        {this.state.error && (
          <p className='add-option-error'>{this.state.error}</p>
        )}
        <form onSubmit={this.onFormSubmit} className='add-option'>
          <input name='option' type='text' className='add-option-input' />
          <button className='button'>Add new Option</button>
        </form>
      </div>
    );
  }
}

export default AddOption;
