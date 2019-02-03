const obj = () => {}

class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'choice app';
    const options = ['one', 'two', 'four'];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption options={options} />
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
  handlePick() {}
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What to do ?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    console.log(this.props.options);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove all</button>
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