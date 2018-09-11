import TaskbarContainer from "../../containers/TaskbarContainer/TaskbarContainer"
import windowsBackground from "../../static/img/windows/windows-background.jpg"
import Menu from "../Menu"

const Windows = ({ menuOpen, toggleMenuOpen }) => (
  <div className="windows-root">
    <img
      className="windows-background"
      src={windowsBackground}
      alt="Windows background"
    />
    <TaskbarContainer toggleMenuOpen={toggleMenuOpen} menuOpen={menuOpen} />
    <div
      className="toggle-close-menu"
      onClick={toggleMenuOpen}
      onKeyPress={toggleMenuOpen}
      tabIndex={0}
      role="button"
    />
    <Menu open={menuOpen} />
    <style jsx global>{`
      * {
        user-select: none;
        -webkit-user-drag: none;
      }
    `}</style>
    <style jsx>{`
      .windows-background {
        width: 100vw;
        height: 100vh;
        position: absolute;
        pointer-events: none;
        object-fit: cover;
      }
      .toggle-close-menu {
        display: ${menuOpen ? "block" : "none"};
        height: 100vh;
        width: 100vw;
        position: absolute;
      }
    `}</style>
  </div>
)

export default Windows
