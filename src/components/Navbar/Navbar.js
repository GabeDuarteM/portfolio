import Link from "next/link"

const Navbar = () => (
  <nav>
    <a
      className="social"
      href="https://github.com/GabrielDuarteM/"
      target="_blank"
    >
      <img src="/static/img/github.png" />
    </a>
    <Link prefetch href="/">
      <a className="link">Home</a>
    </Link>
    <Link prefetch href="/">
      <div className="logo">
        <div className="gabriel">Gabriel</div>
        <div className="duarte">Duarte</div>
      </div>
    </Link>
    <Link prefetch href="/about">
      <a className="link">About</a>
    </Link>
    <a
      className="social"
      href="https://www.linkedin.com/in/GabrielDuarteM/"
      target="_blank"
    >
      <img src="/static/img/linkedin.png" />
    </a>
    <style jsx>{`
      nav {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
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
      }
      .gabriel {
        font-weight: 300;
      }
      .duarte {
        font-weight: 500;
        border-bottom: solid;
        padding-bottom: 4px;
        text-align: center;
        width: 96px;
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
