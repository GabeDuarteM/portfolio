import TaskbarContainer from "../../containers/TaskbarContainer/TaskbarContainer"
import windowsBackground from "../../static/img/windows/windows-background.jpg"

const Windows = () => (
  <div className="windows-root">
    <img
      className="windows-background"
      src={windowsBackground}
      alt="Windows background"
    />
    <TaskbarContainer />
    <style jsx global>{`
      * {
        user-select: none;
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
    `}</style>
  </div>
)

export default Windows
