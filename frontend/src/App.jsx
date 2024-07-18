import { useState } from "react";
import "./App.css";
import bug from "./assets/bug.jpg";

function App() {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/user/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log(response);

      setUser({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.log("register", error);
    }
  };

  return (
    <div className="container">
      <div className="inner-container">
        <div className="leftPart">
          <h2>Welcome!</h2>
          <p>This is a practice of form handling.</p>

          <form onSubmit={handleSubmit}>
            <div className="input-block">
              <label className="input-lable">Firstname</label>
              <br />
              <input
                className="input-field"
                type="string"
                name="firstname"
                autoComplete="off"
                required
                value={user.firstname}
                onChange={handleInput}
                placeholder="firstname"
              />
            </div>

            <div className="input-block">
              <label className="input-lable">Lastname</label>
              <br />
              <input
                className="input-field"
                type="string"
                name="lastname"
                autoComplete="off"
                required
                value={user.lastname}
                onChange={handleInput}
                placeholder="lastname"
              />
            </div>

            <div className="input-block">
              <label className="input-lable">Email</label>
              <br />
              <input
                className="input-field"
                type="email"
                required
                name="email"
                value={user.email}
                onChange={handleInput}
                autoComplete="off"
                placeholder="email"
              />
            </div>

            <div className="input-block">
              <label className="input-lable">Password</label>
              <br />
              <input
                className="input-field"
                type="password"
                autoComplete="off"
                required
                name="password"
                value={user.password}
                onChange={handleInput}
                placeholder="password"
              />
            </div>

            <div className="buttons">
              <a href="#" className="sign-up-google">
                Want to register using Google?
              </a>
              <button className="input-button" type="submit">
                Register
              </button>
            </div>
          </form>

          <p className="sign-in">
            Already have an account? <a href="#">Login</a>
          </p>
        </div>

        <div className="rightPart">
          <img
            src={bug}
            // src=""
            alt="coffee"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
