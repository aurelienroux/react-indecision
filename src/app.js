console.log('app is running');


var appObj = {
  title: 'my app object',
  subtitle: 'subtitle is here'
};
var template = (
  <div>
    <h1>{appObj.title}</h1>
    <p>{appObj.subtitle}</p>
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

ReactDOM.render(template, appRoot);