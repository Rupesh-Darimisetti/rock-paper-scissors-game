import './index.css'

const GameResultView = props => {
  const {choicesList, isShown, checkResult, newArray, text} = props
  const {restartGame} = props

  const showGame = () => (
    <div>
      {isShown && (
        <ul className="game-row">
          {choicesList.map(data => (
            <li key={data.id}>
              <button
                type="button"
                data-testid={`${data.id.toLowerCase()}Button`}
                className="game-button"
                onClick={() => checkResult(data.id)}
              >
                <img
                  key={data.id}
                  src={data.imageUrl}
                  alt={data.id}
                  className="game-icon"
                />
              </button>
            </li>
          ))}
        </ul>
      )}
      {!isShown && (
        <div className="stat">
          <div className="game-row">
            <div>
              <h1>YOU</h1>
              <img
                className="game-icon"
                src={newArray[0].imageUrl}
                alt="your choice"
              />
            </div>
            <div>
              <h1>OPPONENT</h1>
              <img
                className="game-icon"
                src={newArray[1].imageUrl}
                alt="opponent choice"
              />
            </div>
          </div>
          <div>
            <p className="score">{text}</p>
            <button type="button" onClick={restartGame}>
              PLAY AGAIN
            </button>
          </div>
        </div>
      )}
    </div>
  )
  return showGame()
}
export default GameResultView
