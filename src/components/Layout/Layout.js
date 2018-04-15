import Navbar from "../Navbar"
import Footer from "../Footer"

const Layout = ({ children }) => (
  <div>
    <Navbar />
    {children}
    <Footer />
    <style jsx global>{`
      body {
        font-family: Montserrat !important;
        font-size: 20px;
        color: #343e46;
      }
      * {
        transition: 0.3s all ease-in-out;
      }
    `}</style>
  </div>
)

export default Layout
