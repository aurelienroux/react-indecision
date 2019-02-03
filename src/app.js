class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      options: ['one', 'two', 'three']
    };
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }

  handlePick() {
    const randomNum = Math.floor((Math.random() * this.state.options.length ));
    const option = this.state.options[randomNum]
    alert(option)
  }

  render() {
    const title = 'Indecision';
    const subtitle = 'choice app';

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action 
          hasOptions={this.state.options.length > 0} 
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  } 
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button 
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          What to do ?
        </button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>
          Remove all
        </button>
        {this.props.options.map((option, index) => <Option key={index} text={option} /> )}
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        Option: {this.props.text}
      </div>
    )
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    if (option) {
      alert(option)
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option'/>
          <button type='submit'>Add option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));