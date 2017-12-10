console.log('app is running');

var template = (
  <div>
  <h1>my App</h1>
  <p>this is app</p>
  <ol>
  <li>One</li>
  <li>Two</li>
  </ol>
  </div>
);

var templateTwo = (
  <div>
  <h1>Aurélien Roux</h1>
  <p>Age: 36</p>
  <p>Location: montreal</p>    
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);