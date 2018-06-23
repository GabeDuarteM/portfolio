const Project = ({ title, children, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Title: ${title}. Description: ${children}`}
  >
    <div className="flip-container">
      <div className="flipper">
        <div className="front">{title}</div>
        <div className="back">{children}</div>
      </div>
    </div>
    <style jsx>{`
      a {
        text-decoration: none;
        color: #343e46;
        margin: 8px;
      }
      .flip-container {
        perspective: 1000px;
      }
      .flip-container:hover .flipper {
        transform: rotateY(180deg);
      }
      .flip-container,
      .front,
      .back {
        width: 400px;
        height: 400px;
      }
      .flipper {
        transition: 0.6s;
        transform-style: preserve-3d;
        position: relative;
      }
      .front,
      .back {
        backface-visibility: hidden;
        border: solid #343e46;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 48px;
        font-weight: 700;
      }
      .front {
        z-index: 2;
        transform: rotateY(0deg);
      }
      .back {
        transform: rotateY(180deg);
        background-color: #343e46;
        color: white;
        border: solid #343e46;
      }
      @media (max-width: 575px) {
        .flip-container,
        .front,
        .back {
          width: 200px;
          height: 400px;
        }
      }
    `}</style>
  </a>
)

export default Project
