import React from "react";
import "./App.css";
import ProfilePhoto from "./components/Profile/ProfilePhoto";
import Fullname from "./components/Profile/Fullname";
import Adresse from "./components/Profile/Adresse";
const App = () => {
  return (
    <div>
      <ProfilePhoto />
      <p>
        <Fullname />
        <Adresse />
      </p>
    </div>
  );
};

export default App;