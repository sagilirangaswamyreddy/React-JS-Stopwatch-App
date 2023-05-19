// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {isStopWatchStarted: false, minutes: 0, seconds: 0}

  tick = () => {
    const {isStopWatchStarted, minutes, seconds} = this.state
    if (isStopWatchStarted) {
      if (seconds < 59) {
        this.setState({seconds: seconds + 1})
      } else if (seconds === 59) {
        this.setState({minutes: minutes + 1})
        this.setState({seconds: 0})
      }
    } else {
      clearInterval(this.timerID)
    }
    console.log(seconds)
    console.log(minutes)
  }

  onStartStopwatch = () => {
    this.setState({isStopWatchStarted: true})
    this.timerID = setInterval(this.tick, 1000)
  }

  onStopStopwatch = () => {
    this.setState({isStopWatchStarted: false})
    clearInterval(this.timerID)
  }

  onResetStopwatch = () => {
    this.setState({isStopWatchStarted: false})
    this.setState({minutes: 0})
    this.setState({seconds: 0})
  }

  render() {
    const {isStopWatchStarted, minutes, seconds} = this.state

    console.log(isStopWatchStarted)

    return (
      <div className="bg-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="stopwatch-card">
          <div className="img-timer-container">
            <img
              className="timer-img-styles"
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p className="timer-styles">Timer</p>
          </div>
          <div>
            <h1 className="stop-watch">
              {minutes < 10 ? `0${minutes}` : minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}
            </h1>
          </div>
          <div className="buttons-container">
            <button
              type="button"
              className="btn green"
              onClick={this.onStartStopwatch}
            >
              Start
            </button>
            <button
              type="button"
              className="btn red"
              onClick={this.onStopStopwatch}
            >
              Stop
            </button>
            <button
              type="button"
              className="btn yellow"
              onClick={this.onResetStopwatch}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
