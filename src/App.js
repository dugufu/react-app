import logo from "./logo.svg";
import "./App.css";
import React from "react";

class Square extends React.Component {
  render() {
    return (
      <button>
        {
          {
            /* To do here */
          }
        }
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = "Next player: X";

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
        </div>
      </div>
    );
  }
}

// export default class extends React.Component {
//   render() {
//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board />
//         </div>
//         <div className="game-info">
//           <div>
//             {
//               {
//                 /* status */
//               }
//             }
//           </div>
//           <div>
//             {
//               {
//                 /* TODO */
//               }
//             }
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// const user = {
//   name: "dota1212sdasdas2",
//   url: "https://pbs.twimg.com/profile_images/1478893871199186945/1mA6tezL_400x400.jpg",
//   imageSize: 90,
// };

// export default function gameLogo() {
//   return (
//     <div>
//       <h1>{user.name}</h1>
//       <img
//         className="avatar"
//         src={user.url}
//         alt={"Game Logo of " + user.name}
//         style={{ with: user.imageSize, height: user.imageSize }}
//       />
//     </div>
//   );
// }

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
