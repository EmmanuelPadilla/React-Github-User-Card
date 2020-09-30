import React from "react";

import "./index.css";

class App extends React.Component {
  state = {
    users: {},
    username: "EmmanuelPadilla",
    // name: "",
    // location: "",
    // avatar_url: "",
    // bio: "",
  };

  componentDidMount() {
    this.fetchUsers(this.state.username);
  }

  handleUserChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  handleSearch = (e) => {
    e.preventDefault();
    this.fetchUsers(this.state.username);
  };

  fetchUsers = () => {
    fetch(`https://api.github.com/users/${this.state.username}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          users: data,
        });
      })
      .catch((err) => console.log(err, "error"));
  };

  fetchFollowers = () => {
    fetch(`https://api.github.com/users/${this.state.username}/followers`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          followers: data,
        });
      })
      .catch((err) => console.log(err, "error"));
  };

  render() {
    return (
      <div>
        <h1>Git users</h1>
        <form>
          <label>Search Users:</label>
          <input type="text" />
        </form>

        {/* <div className="users">
          {this.state.users.map((user) => (
            <h2>This is {user.data.name}</h2>
            // <img src={user} key={user} alt={user} />
          ))}
        </div> */}
        <div className="usercard">
          <img
            src={this.state.users.avatar_url}
            key={this.state.users.id}
            alt="user avitar"
          />
          <h3>{this.state.users.name}</h3>
          <h5>Location: {this.state.users.location}</h5>
          <h5>Bio: {this.state.users.bio}</h5>
        </div>
      </div>
    );
  }
}

export default App;
