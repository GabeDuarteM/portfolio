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
        margin-top: 80px;
        max-width: 300px;
      }
      @media (min-width: 768px) {
        .text {
          max-width: 600px;
          margin-top: 200px;
        }
      }

      @media (min-width: 992px) {
        .text {
          max-width: 800px;
          margin-top: 200px;
        }
      }

      @media (min-width: 1200px) {
        .text {
          max-width: 1000px;
          margin-top: 200px;
        }
      }
    `}</style>
  </div>
)

export default Introduction
