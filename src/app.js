console.log('app is running');

var appObj = {
  title: 'my app object',
  subtitle: 'subtitle is here',
  options: ['One', 'Two']
};
var template = (
  <div>
    <h1>{appObj.title}</h1>
    {appObj.subtitle && <p>{appObj.subtitle}</p>}
    <p>{ appObj.options.length > 0 ? 'Here are your options' : 'No options' }</p>
    <ol>
      <li>One</li>
      <li>Two</li>
    </ol>
  </div>
);

var userInfo = {
  // name: 'Nathan',
  age: 23,
  town: 'Buschwiller'
};
function getLocation(location){
  if(location){
    return <p>Location: {location}</p>;
  }
};
var templateTwo = (
  <div>
  <h1>{userInfo.name ? userInfo.name : 'Anonymous'}</h1>
  {(userInfo.age && userInfo.age >= 18) && <p>Age: {userInfo.age} </p>}
  {getLocation(userInfo.town)}    
  </div>
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);