import Field from "../Field"

const ContactForm = React.forwardRef(
  ({ onSubmit, submitting, submitted, origin }, ref) => (
    <div className="root-form">
      <div className="contact-me">Contact me</div>
      <form
        ref={ref}
        id="contact-form"
        name="contact"
        method="POST"
        onSubmit={onSubmit}
      >
        <input type="hidden" name="_origin" value={origin} />
        <input type="hidden" name="_form" value="Contact" />
        <Field name="Name" label="Name" required type="text" />
        <Field name="E-mail" label="E-mail" required type="email" />
        <Field name="Subject" label="Subject" required type="text" />
        <Field name="Message" label="Message" required type="text" textarea />
        {submitted && (
          <div className="thank-you">Thank you for contacting me!</div>
        )}

        <button className="submit" disabled={submitting} type="submit">
          {submitting ? (
            <div className="lds-css">
              <div className="lds-dual-ring">
                <div />
              </div>
            </div>
          ) : (
            "Send"
          )}
        </button>
      </form>
      <style jsx>{`
        .root-form {
          width: 100%;
        }
        form {
          display: flex;
          flex-direction: column;
          width: 100%;
          margin-bottom: 80px;
        }

        .thank-you {
          text-align: center;
          margin: 8px 0;
        }

        .contact-me {
          font-size: 22px;
          margin-bottom: 18px;
        }

        .submit {
          border: solid;
          margin: 8px 4px 0px 4px;
          background-color: white;
          height: 55px;
        }
        .submit:hover {
          background-color: #343e46;
          color: white;
          border: solid #343e46;
        }

        @keyframes lds-dual-ring {
          0% {
            -webkit-transform: rotate(0);
            transform: rotate(0);
          }
          100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }
        @-webkit-keyframes lds-dual-ring {
          0% {
            -webkit-transform: rotate(0);
            transform: rotate(0);
          }
          100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }

        .lds-css {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lds-dual-ring {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .lds-dual-ring div {
          position: absolute;
          width: 160px;
          height: 160px;
          top: 20px;
          left: 20px;
          border-radius: 50%;
          border: 8px solid #000;
          border-color: #0055a5 transparent #0055a5 transparent;
          -webkit-animation: lds-dual-ring 1s linear infinite;
          animation: lds-dual-ring 1s linear infinite;
        }
        .submit:hover .lds-dual-ring div {
          border-color: #fff transparent #fff transparent;
        }
        .lds-dual-ring {
          width: 39px !important;
          height: 39px !important;
          -webkit-transform: translate(-19.5px, -19.5px) scale(0.195)
            translate(19.5px, 19.5px);
          transform: translate(-19.5px, -19.5px) scale(0.195)
            translate(19.5px, 19.5px);
        }
      `}</style>
    </div>
  ),
)

export default ContactForm
