import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';
class IndecisionApp extends React.Component {
  state = {
    options: this.props.options,
    selectedOption: undefined
  };
  handleDeleteAll = () => {
    // this is so because we are returning a single line statement, so as not to consume
    /*
      so many lines. so to implicitly return an object we must wrap it in parenthesis first
      as shown below
    */
    
    this.setState(() => ({ options: [] }));
  };
  handleDeleteOne = (optionToRemove) => {
    console.log(optionToRemove);
    this.setState((prevState) => 
      ({ options: prevState.options.filter((option) => optionToRemove !== option) })
    );
  };
  handlePickOption = () => {
    const options = this.state.options;
    const randomNum = Math.floor(Math.random() * options.length);
    const selectedOption = options[randomNum];
    console.log(selectedOption);
    this.setState(() => ({ selectedOption: selectedOption }));
  };
  handleAddOption = (option) => {
    if (!option) {
      return "Please enter a valid string";
    } else if (this.state.options.includes(option)) {
      return "Option Already Exist";
    }
    console.log('i submitted');
    this.setState((prevState) => {
      console.log(prevState.options, 'aDD OPTION');
      
      return (
        { options: prevState.options.concat([option]) }
      ) 
    } 
    );
  };
  closeModal = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      console.log(json, 'fetching');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => (
          {
            options: options
          }
        ));
      }

    } catch (error) {
      console.log(error, 'error during mount');
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      console.log(json, 'updating');
      localStorage.setItem('options', json);
      console.log(prevState.options, 'prev');
      console.log(this.state.options, 'current');
    }
  }
  componentWillUnmount() {
    console.log('UnMounting Component');
    localStorage.clear();

  }
  render() {
    const title = "Indecision Application";
    const subtitle = "Put your life in the hands of a computer";
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePickOption={this.handlePickOption}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteAll={this.handleDeleteAll}
              handleDeleteOne={this.handleDeleteOne}
            />
            <AddOption
              handleAddOption={this.handleAddOption}
            />
          </div>

        </div>

        <OptionModal
          selectedOption={this.state.selectedOption}
          closeModal={this.closeModal}
        />
      </div>
    )
  }
};

IndecisionApp.defaultProps = {
  options: []
}

export default IndecisionApp;
// props are passed onto instances of components when we initialize said components
// e.g <Header />
// bind() creates a bound method with the same body as the method it is binding to
//and sets the 'this' keyword to whatever that is passed in as argument
// e.g const hello = ada.getHouse.bind({name: chidimma })
// here the getHouse method is recreated by the bind with same function body as getHouse and also
// the this keyword which should have undefined is now set to context of the inline object passed to it
// we are binding the 'this' to the class so we can use it anywhere in the component class

// to create our components which is just fancy for classes in react