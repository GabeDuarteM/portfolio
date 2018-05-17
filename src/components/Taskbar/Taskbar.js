const Taskbar = () => (
  <div className="taskbar-root">
    <div className="start" />
    <div className="taskbar" />
    <div className="iconbar">
      <div className="volume-icon" title="Volume" />
      <span className="clock">11:40 PM</span>
    </div>
    <style jsx>{`
      .taskbar-root {
        position: absolute;
        bottom: 0;
        display: flex;
        width: 100%;
      }
      .start {
        background-image: url(/static/img/windows/start.png);
        width: 109px;
        height: 30px;
      }
      .start:hover {
        background-image: url("/static/img/windows/start-hover.png");
      }
      .start:active {
        background-image: url("/static/img/windows/start-active.png");
      }
      .taskbar {
        background-image: url("/static/img/windows/taskbar.png");
        width: 100%;
      }
      .iconbar {
        background-image: url("/static/img/windows/iconbar.png");
        width: 102px;
      }

      .iconbar .clock {
        color: white;
        font-size: 12px;
        position: relative;
        top: 4px;
        left: 31px;
      }

      .iconbar .volume-icon {
        width: 18px;
        height: 20px;
        position: absolute;
        bottom: 5px;
        right: 64px;
      }
    `}</style>
  </div>
)

export default Taskbar
