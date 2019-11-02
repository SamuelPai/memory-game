import React from 'react';
import './App.css';
import Wrapper from "./Components/Wrapper";
import Score from "./Components/Score";
import Image from "./Components/Images/images";
import cards from "./images.json";


const styling = {
  backgroundColor: "#222",
  height: "80px",
  padding: "10px",
  color: "white"
}

class App extends React.Component {
  state = {
    cards,
    clicked: [],
    score: 0,
    goal: 12,
    status: ""
  }


  shuffleCards = id => {
    let clicked = this.state.clicked;

    if (clicked.includes(id)) {
      this.setState({
        clicked: [],
        score: 0,
        status: "Sorry You Lost! Click to Play Again!!!"
      })
      return;
    }
    else {
      clicked.push(id);

      if (this.state.score === 12) {
        this.setState({
          score: 0,
          clicked: [],
          status: "Congratulations, You WON!! Click to Play Again"
        })
        return;
      }

      this.setState({
        cards,
        clicked,
        score: clicked.length,
        status: ""
      })
      //*************** */
      for (let i = cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
      }
    }

  }


  render() {
    return (
      <div className="App">
        <header style={styling} className="App-header">
          <h1 className="App-title">Test Your Memory!</h1>
          <p className="App-intro">
            Try not to click the same image twice!
          </p>
        </header>
        <Score total={this.state.score} status={this.state.status} goal={12} />
        <Wrapper>
          {this.state.cards.map(card => (
            <Image
              shuffleCards={this.shuffleCards}
              id={card.id}
              key={card.id}
              image={card.image}
            />
          ))}
          })}
        </Wrapper>

      </div>
    )
  }






}







export default App;
