import React from "react"
import Windows from "../../components/Windows"

class WindowsContainer extends React.PureComponent {
  state = {
    menuOpen: false,
  }

  toggleMenuOpen = () => {
    this.setState(state => ({ menuOpen: !state.menuOpen }))
  }

  render = () => (
    <Windows
      menuOpen={this.state.menuOpen}
      toggleMenuOpen={this.toggleMenuOpen}
    />
  )
}

export default WindowsContainer
