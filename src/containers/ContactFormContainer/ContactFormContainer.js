import React from "react"
import ContactForm from "../../components/ContactForm"

class ContactFormContainer extends React.Component {
  state = {
    formRef: React.createRef(),
    origin: "",
    submitted: false,
  }

  componentDidMount = () => {
    // eslint-disable-next-line no-restricted-globals
    this.setState({ origin: location.href })
  }

  onSubmit = async evt => {
    evt.preventDefault()
    const form = new FormData(this.state.formRef.current)
    this.setState({ submitting: true })
    await fetch(
      "https://www.briskforms.com/go/ac606b73f7f6862f52dbefda69f79db9",
      {
        method: "POST",
        body: form,
        mode: "no-cors",
      },
    )
    this.setState({ submitted: true, submitting: false })
    setTimeout(() => this.setState({ submitted: false }), 5000)
  }

  render() {
    return (
      <ContactForm
        ref={this.state.formRef}
        onSubmit={this.onSubmit}
        submitted={this.state.submitted}
        submitting={this.state.submitting}
        origin={this.state.origin}
      />
    )
  }
}

export default ContactFormContainer
