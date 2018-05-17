import Taskbar from "../Taskbar/Taskbar"

const Windows = () => (
  <div className="windows-root">
    <Taskbar />
    <style jsx global>{`
      * {
        user-select: none;
      }
    `}</style>
    <style jsx>{`
      .windows-root {
        height: 100vh;
        background-image: url(/static/img/windows/windows-background.jpg);
        background-size: cover;
      }
    `}</style>
  </div>
)

export default Windows
