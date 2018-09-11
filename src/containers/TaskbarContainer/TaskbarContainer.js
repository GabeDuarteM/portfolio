import React from "react"
import Taskbar from "../../components/Taskbar"

const getTime = currentDate => {
  const options = { hour: "2-digit", minute: "2-digit" }
  return currentDate.toLocaleTimeString("en-US", options)
}

let intervalId
let timeoutId

class TaskbarContainer extends React.PureComponent {
  state = {
    currentDate: new Date(),
    currentTime: getTime(new Date()),
  }

  componentDidMount = () => {
    const nextTickMs =
      60000 -
      (this.state.currentDate.getSeconds() * 1000 +
        this.state.currentDate.getMilliseconds())

    timeoutId = setTimeout(() => {
      this.setNewCurrentTime()
      intervalId = setInterval(this.setNewCurrentTime, 60000)
    }, nextTickMs)
  }

  componentWillUnmount = () => {
    clearTimeout(timeoutId)
    clearInterval(intervalId)
  }

  setNewCurrentTime = () => {
    const date = new Date()
    this.setState({
      currentDate: date,
      currentTime: getTime(date),
    })
  }

  render = () => (
    <Taskbar
      toggleMenuOpen={this.props.toggleMenuOpen}
      menuOpen={this.props.menuOpen}
      time={this.state.currentTime}
    />
  )
}

export default TaskbarContainer
