import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const user = {
  name: "dota2",
  url: "https://pbs.twimg.com/profile_images/1478893871199186945/1mA6tezL_400x400.jpg",
  imageSize: 90,
};

export default function gameLogo() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.url}
        alt={"Game Logo of " + user.name}
        style={{ with: user.imageSize, height: user.imageSize }}
      />
    </>
  );
}

//button
/* function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
} */
