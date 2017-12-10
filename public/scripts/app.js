'use strict';

console.log('app is running');

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'my App'
  ),
  React.createElement(
    'p',
    null,
    'this is app'
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

var userInfo = {
  name: 'Nathan',
  age: 3,
  town: 'Buschwiller'
};
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    userInfo.name
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    userInfo.age
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    userInfo.town
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
