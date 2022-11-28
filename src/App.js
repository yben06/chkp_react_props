import Profile from './profile/Profile';
import './App.css';

function App() {
  var firstName = "Ben Ahmed"
  var lastName = "Yassine"
  var profession = "web developer"
  var bio = "hello world!"
  return (
      <div className="App">
        <Profile fname={firstName} lname={lastName} pro={profession} myBio={bio}><img src="/photo-de-profil-pro.jpg"></img></Profile>
      </div>
  );
};

export default App;