console.log('App is running');

const appObj = {
  title: 'my app object',
  subtitle: 'subtitle is here',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    appObj.options.push(option);
    e.target.elements.option.value = '';
  }
  renderForm();
};

const clearArray = (e) => {
  appObj.options = [];
  renderForm();
}

const appRoot = document.getElementById('app');

const renderForm = () => {
  const template = (
    <div>
      <h1>{appObj.title} test</h1>
      {appObj.subtitle && <p>{appObj.subtitle}</p>}
      <p>{ appObj.options.length > 0 ? 'Here are your options' : 'No options' }</p>
      <p>{appObj.options.length}</p>
      <button onClick={clearArray}>Remove all</button>
      <ol>
        <li>One</li>
        <li>Two</li>
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
    </div>
  )
  ReactDOM.render(template, appRoot);
}

renderForm();
