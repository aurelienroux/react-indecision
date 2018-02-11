console.log('app is running');

const appObj = {
  title: 'my app object',
  subtitle: 'subtitle is here',
  options: ['One', 'Two']
};

const template = (
  <div>
    <h1>{appObj.title} test</h1>
    {appObj.subtitle && <p>{appObj.subtitle}</p>}
    <p>{ appObj.options.length > 0 ? 'Here are your options' : 'No options' }</p>
    <ol>
      <li>One</li>
      <li>Two</li>
    </ol>
  </div>
);

let count = 0;
const addOne = () => {
  count++;
  renderAgain();
}
const minusOne = () => {
  count--;
  renderAgain();
}
const reset = () => {
  count = 0;
  renderAgain();
}

const appRoot = document.getElementById('app');

const renderAgain = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>+reset</button>
     </div>
  )
  ReactDOM.render(templateTwo, appRoot);
}

renderAgain();