class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>app</h2>
      </div>
    )
  } 
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>to do</button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        Options component here
        <Option />
        <Option />
        <Option />
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        Option is here
      </div>
    )
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        AddOption is here
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));