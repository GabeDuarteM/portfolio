import Link from "next/link"

const Navbar = () => (
  <nav>
    <a
      className="social"
      href="https://github.com/GabrielDuarteM/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Github profile"
    >
      <img src="/static/img/github.png" alt="Github profile" />
    </a>
    <Link prefetch href="/">
      <a className="link">Home</a>
    </Link>
    <Link prefetch href="/">
      <img
        className="logo"
        src="/static/img/gduarte-logo.png"
        alt="Gabriel Duarte Logo"
      />
    </Link>
    <Link prefetch href="/about">
      <a className="link">About</a>
    </Link>
    <a
      className="social"
      href="https://www.linkedin.com/in/GabrielDuarteM/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Linkedin profile"
    >
      <img src="/static/img/linkedin.png" alt="Linkedin profile" />
    </a>
    <style jsx>{`
      nav {
        display: flex;
        align-items: center;
        justify-content: space-around;
        font-size: 22px;
        user-select: none;
        margin: 24px 0;
      }
      .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        cursor: pointer;
        -webkit-user-drag: none;
      }
      .link {
        position: relative;
        color: #000;
        text-decoration: none;
        font-size: 16px;
      }
      .link:hover {
        color: #000;
      }
      .link:before {
        content: "";
        position: absolute;
        width: 102%;
        height: 2px;
        bottom: -4px;
        left: 0;
        background-color: #000;
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.3s ease-in-out 0s;
      }
      .link:hover:before {
        visibility: visible;
        transform: scaleX(1);
      }

      @media (max-width: 575px) {
        .social {
          display: none;
        }
      }
    `}</style>
  </nav>
)

export default Navbar
