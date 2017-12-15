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
    appObj.title
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

var userInfo = {
  name: 'Nathan',
  age: 23,
  town: 'Buschwiller'
};
function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  }
};
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    userInfo.name ? userInfo.name : 'Anonymous'
  ),
  userInfo.age && userInfo.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    userInfo.age,
    ' '
  ),
  getLocation(userInfo.town)
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
