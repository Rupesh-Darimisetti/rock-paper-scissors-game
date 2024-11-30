import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import GameResultView from './components/GameResultView'
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const gameStaus = {
  inProgress: 'PROGRESS',
  win: 'YOU WON',
  lose: 'YOU LOSE',
  draw: 'IT IS DRAW',
}

const options = {
  rock: 'ROCK',
  siccors: 'SCISSORS',
  paper: 'PAPER',
}

class App extends Component {
  state = {
    score: 0,
    newArray: [choicesList[0], choicesList[1]],
    text: gameStaus.win,
    isShown: true,
  }

  restartGame = () => this.setState({isShown: true})

  gameResult = (user, opponent) => {
    if (user.id === options.rock) {
      switch (opponent.id) {
        case options.paper:
          return gameStaus.lose
        case options.siccors:
          return gameStaus.win
        default:
          return gameStaus.draw
      }
    } else if (user.id === options.paper) {
      switch (opponent.id) {
        case options.siccors:
          return gameStaus.lose
        case options.rock:
          return gameStaus.win
        default:
          return gameStaus.draw
      }
    } else {
      switch (opponent.id) {
        case options.rock:
          return gameStaus.lose
        case options.paper:
          return gameStaus.win
        default:
          return gameStaus.draw
      }
    }
  }

  checkResult = id => {
    const {score} = this.state
    const choise2 = choicesList[Math.floor(Math.random() * choicesList.length)]
    const choise1 = choicesList.filter(value => value.id === id)
    const result = this.gameResult(choise1[0], choise2)
    let newScore = score
    if (result === gameStaus.win) {
      newScore = score + 1
    } else if (result === gameStaus.lose) {
      newScore = score - 1
    } else {
      newScore = score
    }
    this.setState({
      isShown: false,
      newArray: [choise1[0], choise2],
      text: result,
      score: newScore,
    })
  }

  showRule = () => (
    <img
      src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
      alt="rules"
    />
  )

  renderScoreCard = score => (
    <div className="row">
      <div className="column">
        <h1>
          ROCK
          <br />
          PAPER
          <br />
          SCISSORS
        </h1>
      </div>
      <div className="score-card column">
        <p>Score</p>
        <p className="score-res">{score}</p>
      </div>
    </div>
  )

  render() {
    const {score, isShown, text, newArray} = this.state
    return (
      <div className="container">
        {this.renderScoreCard(score)}
        <GameResultView
          choicesList={choicesList}
          isShown={isShown}
          text={text}
          checkResult={this.checkResult}
          newArray={newArray}
          restartGame={this.restartGame}
        />

        <Popup
          modal
          trigger={
            <button type="button" onClick={this.showRule()}>
              RULES
            </button>
          }
        >
          {close => (
            <div>
              <button type="button" onClick={() => close()}>
                <RiCloseLine />
              </button>
              {this.showRule()}
            </div>
          )}
        </Popup>
      </div>
    )
  }
}

export default App
