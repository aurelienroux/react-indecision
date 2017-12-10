'use strict';

console.log('app is running');

var appObj = {
  title: 'my app object',
  subtitle: 'subtitle is here'
};
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    appObj.title
  ),
  React.createElement(
    'p',
    null,
    appObj.subtitle
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

ReactDOM.render(template, appRoot);
