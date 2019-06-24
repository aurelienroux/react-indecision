import React from 'react';
import ReactDOM from 'react-dom';

// Components
import AddOption from './components/AddOption';
import Option from './components/Option';
import Header from './components/Header';
import Action from './components/Action';

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    };
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)

      if (options) {
        this.setState(() => ({ options }))
      }
    } catch (e) {
      // Do nothing at all
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
      console.log('saving data');
    }
  }

  componentWillUnmount() {
    console.log('will unmount');
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }) );
  }

  handleDeleteOption(option) {
    this.setState((prevState) => {
      return {
        options: prevState.options.filter((el) => el !== option)
      }
    })
  }

  handlePick() {
    const randomNum = Math.floor((Math.random() * this.state.options.length ));
    const option = this.state.options[randomNum];
    alert(option);
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'already exists';
    }

    this.setState((prevState) => ({ 
      options: prevState.options.concat(option)
    }));
  }

  render() {
    const subtitle = 'choices app';

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action 
          hasOptions={this.state.options.length > 0} 
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>
        Remove all
      </button>
      {props.options.length === 0 && <p>Please add an option</p> }
      <ul>
        {props.options.map((option, index) => (
          <Option 
            key={index} 
            text={option} 
            handleDeleteOption={props.handleDeleteOption} 
          />
        ))}
      </ul>
    </div>
  )
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));