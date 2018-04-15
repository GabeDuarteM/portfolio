const Footer = () => (
  <div className="social">
    <a
      href="https://github.com/GabrielDuarteM/"
      aria-label="Github profile"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/static/img/github.png" alt="Github profile" />
    </a>
    <a
      href="https://www.linkedin.com/in/GabrielDuarteM/"
      aria-label="Linkedin profile"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/static/img/linkedin.png" alt="Linkedin profile" />
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
