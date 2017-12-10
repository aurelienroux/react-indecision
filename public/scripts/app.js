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

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Aur\xE9lien Roux'
  ),
  React.createElement(
    'p',
    null,
    'Age: 36'
  ),
  React.createElement(
    'p',
    null,
    'Location: montreal'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
