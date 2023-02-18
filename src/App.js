import React, { Component } from "react";

class App extends Component {
  state = {
    person: {
      fullName: "Mehdi Badsi",
      bio: "En formation chez Go my code",
      imgSrc:
        "https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg",
      profession: "Futur développeur",
    },
    showPerson: false,
    mountedTime: null,
  };

  togglePerson = () => {
    this.setState((prevState) => ({ showPerson: !prevState.showPerson }));
  };

  componentDidMount() {
    this.setState({ mountedTime: Date.now() });
    this.intervalId = setInterval(() => {
      this.forceUpdate();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { person, showPerson, mountedTime } = this.state;
    const elapsedTime = mountedTime
      ? Math.floor((Date.now() - mountedTime) / 1000)
      : 0;

    return (
      <div>
        <button onClick={this.togglePerson}>
          {showPerson ? "Cacher le profil" : "Afficher le profil"}
        </button>
        {showPerson && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              style={{ width: "15%" }}
              src={person.imgSrc}
              alt={person.fullName}
            />
            <h1>{person.fullName}</h1>
            <h2>{person.profession}</h2>
            <p>{person.bio}</p>
          </div>
        )}
        <p>Temps écoulé apres montge: {elapsedTime} secondes</p>
      </div>
    );
  }
}

export default App;
