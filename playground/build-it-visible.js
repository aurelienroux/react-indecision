console.log('visible app running');

let visibleVar = false;

const switchVisibility = () => {
  visibleVar = !visibleVar;
  renderApp();
}

const renderApp = () => {
  const visible = (
    <div>
      <h1>Visibility toggle</h1>
      <button onClick={switchVisibility}>
        { visibleVar ? 'Hide' : 'Show' }
      </button>
        { visibleVar && (
          <p>here is the text</p>
        )}
    </div>
  )
  ReactDOM.render(visible, document.getElementById('app'));
}

renderApp();
