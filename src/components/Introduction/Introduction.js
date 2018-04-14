const Introduction = ({ text }) => (
  <div className="flex">
    <div className="text">{text}</div>
    <style jsx>{`
      .flex {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .text {
        font-size: 40px;
        text-align: center;
        margin-top: 200px;
        max-width: 300px;
      }
      @media (min-width: 576px) {
        .text {
          max-width: 400px;
        }
      }

      @media (min-width: 768px) {
        .text {
          max-width: 600px;
        }
      }

      @media (min-width: 992px) {
        .text {
          max-width: 800px;
        }
      }

      @media (min-width: 1200px) {
        .text {
          max-width: 1000px;
        }
      }
    `}</style>
  </div>
)

export default Introduction
