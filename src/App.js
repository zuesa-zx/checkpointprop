import './App.css';
import Profile from './Profile/Profile_component'
import ProfileImg from "./Profile/ProfileImg.jpg";

function App() {
  const handleName = (name) => {

    alert(`Name of profile user is ${name}`)

  }
  return (
    <div className="App">
      <Profile
        fullName="Maram Ben ghdhehom"
        profession="Developer"
        bio="Hacker space's devloper , at gomycode , 3thrd class in highschool , singer , anime lover"
        handleName={handleName}
      >
        <img src={ProfileImg} alt="img" />
      </Profile>
    </div >
  );
}

export default App;