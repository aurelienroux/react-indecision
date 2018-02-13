'use strict';

console.log('App is running');

var appObj = {
  title: 'my app object',
  subtitle: 'subtitle is here',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;

  if (option) {
    appObj.options.push(option);
    e.target.elements.option.value = '';
  }
  renderForm();
};

var clearArray = function clearArray(e) {
  appObj.options = [];
  renderForm();
};

var appRoot = document.getElementById('app');

var renderForm = function renderForm() {
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
      'p',
      null,
      appObj.options.length
    ),
    React.createElement(
      'button',
      { onClick: clearArray },
      'Remove all'
    ),
    React.createElement(
      'ol',
      null,
      appObj.options.map(function (opt, index) {
        return React.createElement(
          'li',
          { index: index },
          opt
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add option'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

renderForm();
