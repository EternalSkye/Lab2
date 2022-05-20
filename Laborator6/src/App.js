import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

          <h1 onClick={registration(admin)}> Authorization</h1>
          <input type="text" onChange={(e) => localStorage.setItem("registerUser", e.target.value)}></input>
          <input type="password" onChange={(e) => localStorage.setItem("registerPass", e.target.value)}></input>
          <button onClick={checkIfExist}>Enter</button>
      </header>
    </div>
  );
}

export default App;

const admin = {
    login: "test",
    pass: "test"
}
const users = [{}]

function registration(user)
{
    localStorage.setItem("user", user.login);
    localStorage.setItem("pass", user.pass);
}

function checkIfExist()
{
    if (localStorage.getItem("user") == localStorage.getItem("registerUser"))
    {
        if (localStorage.getItem("pass") == localStorage.getItem("registerPass"))
        {
            alert(localStorage.getItem("user")+" passed authorization")
        }
        else
        {
            alert("Wrong login or password")
        }
    }
    else
    {
        users.push(localStorage.getItem("registerUser"))
        console.log(users)
        alert("Wrong login or password")
    }
}