class SwitchVisibility extends React.Component {
  constructor(props) {
    super(props)
    this.switchVisibility = this.switchVisibility.bind(this)
    this.state = {
      visibility: false
    }
  }

  switchVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Visibility toggle</h1>
        <button onClick={this.switchVisibility}>
          { this.state.visibility ? 'Hide' : 'Show' }
        </button>
        { this.state.visibility && (
          <p>some text</p>
        )}
      </div>
    )
  }
}

ReactDOM.render(<SwitchVisibility />, document.getElementById('app'))
