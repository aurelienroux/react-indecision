console.log('App is running');

const appObj = {
  title: 'Todo list',
  subtitle: 'what todo',
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

const onMakeDecision = () => {
  const randomNum = Math.floor((Math.random() * appObj.options.length ));
  const option = appObj.options[randomNum]
  console.log(option);
}

const appRoot = document.getElementById('app');

const renderForm = () => {
  const template = (
    <div>
      <h1>{appObj.title}</h1>
      {appObj.subtitle && <p>{appObj.subtitle}</p>}
      <p>{ appObj.options.length > 0 ? 'Here are your options' : 'No options' }</p>
      <button disabled={appObj.options.length === 0} onClick={onMakeDecision}>What should I do ?</button>
      <button onClick={clearArray}>Remove all</button>
      <ol>
        {appObj.options.map( (opt, index) => <li key={index}>{opt}</li> )}
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
