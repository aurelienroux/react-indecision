'use strict';

console.log('app is running');

var template = React.createElement(
  'h2',
  null,
  'my App'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
