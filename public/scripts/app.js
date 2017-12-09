console.log('app is running');

// var template = <p>indecision app</p>;
var template = React.createElement(
    "h1",
    { id: "someID" },
    "indecision app"
  );
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);