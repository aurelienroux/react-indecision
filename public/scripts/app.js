'use strict';

console.log('app is running');

var appObj = {
  title: 'my app object',
  subtitle: 'subtitle is here',
  options: ['One', 'Two']
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    appObj.title,
    ' test'
  ),
  appObj.subtitle && React.createElement(
    'p',
    null,
    appObj.subtitle
  ),
  React.createElement(
    'p',
    null,
    appObj.options.length > 0 ? 'Here are your options' : 'No options'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'One'
    ),
    React.createElement(
      'li',
      null,
      'Two'
    )
  )
);

var count = 0;
var addOne = function addOne() {
  count++;
  renderAgain();
};
var minusOne = function minusOne() {
  count--;
  renderAgain();
};
var reset = function reset() {
  count = 0;
  renderAgain();
};

var appRoot = document.getElementById('app');

var renderAgain = function renderAgain() {
  var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: addOne },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: minusOne },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: reset },
      '+reset'
    )
  );
  ReactDOM.render(templateTwo, appRoot);
};

renderAgain();
