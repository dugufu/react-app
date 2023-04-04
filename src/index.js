import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// function Welcome(props) {
//   return <h1>This is {props.name}</h1>;
// }

// function Game(props) {
//   return <h1>This is the best game ever : {props.bestGameName}</h1>;
// }

// const element = (
//   <>
//     <Welcome name="Sarah" />
//     <Welcome name="chow" />
//     <Welcome name="Xian" />
//     <Welcome name="Leh" />

//     <Game bestGameName="Dota2" />
//   </>
// );
// 1213
//add
function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return (
    <img className="Avatar" src={props.avatar.url} alt={props.avatar.name} />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar avatar={props.avatarLink} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} avatarLink={props.avatar} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  avatar: {
    url: "https://scontent.fmkz1-1.fna.fbcdn.net/v/t1.6435-9/51132445_1015504495326196_3440377681516953600_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=PneJcSMx9x0AX-1ykRg&_nc_oc=AQnKoIDWNe0PYIL2UBSQMnOzweHhuEdneJDZVanUCQwYb9OjigNHawVpAxCqqiyWbRlsM2w9K340uj3REpqDSESI&_nc_ht=scontent.fmkz1-1.fna&oh=00_AfAMXoucr6e5yydvDlEnZEUD6zvPTT1Rv_RlWkQAXOkBig&oe=64526067",
    avatarName: "residentEvil",
  },
  author: {
    name: "Chow Kitty",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Comment
    date={comment.date}
    author={comment.author}
    text={comment.text}
    avatar={comment.avatar}
  />
);

//define
// const name = "chow";

// const element2 = <h1>Hello, {name}</h1>;

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello world</h1>
//       <h2>It is {new Date().toLocaleTimeString()} . </h2>
//     </div>
//   );
//   root.render(element);
// }

// setInterval(tick, 1000);

//Embedding Expressions in JXS
//const element3 = <h1>Hello, {formatName(user)}!</h1>; //直接把object丢进来

// const user = {
//   firstName: "Harper",
//   lastName: "Perez",
// };

// function formatName(user) {
//   return user.firstName + " " + user.lastName;
// }

//const element4 = <h1>Hello, {formatName(user)}!</h1>;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
