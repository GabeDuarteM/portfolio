const Footer = () => (
  <div className="social">
    <a href="https://github.com/GabrielDuarteM/" target="_blank">
      <img src="/static/img/github.png" />
    </a>
    <a href="https://www.linkedin.com/in/GabrielDuarteM/" target="_blank">
      <img src="/static/img/linkedin.png" />
    </a>
    <style jsx>{`
      .social {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .social > * {
        margin: 32px 16px;
      }
      @media (min-width: 576px) {
        .social {
          display: none;
        }
      }
    `}</style>
  </div>
)

export default Footer
