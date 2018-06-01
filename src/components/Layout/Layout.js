import Navbar from "../Navbar"
import RegisterServiceWorker from "../../containers/RegisterServiceWorker"

const Layout = ({ children }) => (
  <div>
    <RegisterServiceWorker />
    <Navbar />
    <div className="content">{children}</div>
    <style jsx global>{`
      body {
        font-family: Montserrat, sans-serif !important;
        font-size: 20px;
        color: #343e46;
      }
      * {
        transition: 0.3s all ease-in-out;
      }
      .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
      }
      @media (min-width: 576px) {
        .content > * {
          width: 400px;
        }
      }

      @media (min-width: 768px) {
        .content > * {
          width: 600px;
        }
      }

      @media (min-width: 992px) {
        .content > * {
          width: 800px;
        }
      }

      @media (min-width: 1200px) {
        .content > * {
          width: 1000px;
        }
      }
    `}</style>
  </div>
)

export default Layout
