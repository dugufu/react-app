import logo from "./logo.svg";
import "./App.css";
import React from "react";

function formatName(user) {
  return user.firstName + " " + user.lastname;
}

function greeting(user) {
  if (user) {
    return (
      <h1>
        ("Greeting, ", {user.firstName} {user.lastname})
      </h1>
    );
  } else {
    return <h1>("Greeting, stranger")</h1>;
  }
}

const user = {
  firstName: "",
  lastname: "",
};

const element = <h1>Hello, {formatName(user)}!</h1>; //直接把object丢进来
