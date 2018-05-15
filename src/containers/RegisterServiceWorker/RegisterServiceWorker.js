import React from "react"

class RegisterServiceWorker extends React.Component {
  componentDidMount = () => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.getRegistrations().then(registrations => {
          registrations.forEach(registration => {
            registration.unregister()
          })
        })
      })
    }
  }

  shouldComponentUpdate = () => false

  render() {
    return null
  }
}

export default RegisterServiceWorker
