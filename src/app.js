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

var userInfo = {
  name: 'Nathan',
  age: 3,
  town: 'Buschwiller'
};
var templateTwo = (
  <div>
  <h1>{userInfo.name}</h1>
  <p>Age: {userInfo.age}</p>
  <p>Location: {userInfo.town}</p>    
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);