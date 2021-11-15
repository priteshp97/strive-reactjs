import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Component } from "react";
import DropDown from "./components/DropDown";

// we're going to create a movie chooser app
// it's going to hold a movie in a dropdown at the top
// and it's going to show its details in the bottom

// for remembering and keep track of the chosen movie
// we have to store the value of the <select> into the State of this component

// for getting a proper state object in a component, we should write it in the Class shape
// we need to convert App from being a functional component into a class-based one
function App() {
  return (
    <div className="app">
      <DropDown />
    </div>
  );
}
export default App;
