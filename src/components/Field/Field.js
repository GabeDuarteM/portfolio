const Field = ({ name, label, textarea, className, ...props }) => (
  <div className="field-root">
    <label htmlFor={name}>{label}</label>
    {textarea ? (
      <textarea className="input" name={name} {...props} />
    ) : (
      <input className="input" name={name} {...props} />
    )}
    <style jsx>{`
      .field-root {
        display: flex;
      }
      label {
        position: absolute;
        pointer-events: none;
        font-size: 12px;
        margin-left: 5px;
        margin-top: 5px;
        background: white;
        height: 20px;
        padding-top: 4px;
        padding-left: 8px;
        padding-right: 4px;
      }
      p {
        display: flex;
        flex-direction: column;
      }
      .input {
        height: ${textarea ? "200px" : "55px"};
        padding: 8px;
        padding-top: ${textarea ? "24px" : "18px"};
        flex: auto;
        transition: none;
        margin: 4px;
      }

      :-webkit-autofill,
      :-webkit-autofill:hover,
      :-webkit-autofill:focus {
        -webkit-box-shadow: 0 0 0 30px white inset;
        border: solid 1px darkgray;
      }
    `}</style>
  </div>
)

export default Field
