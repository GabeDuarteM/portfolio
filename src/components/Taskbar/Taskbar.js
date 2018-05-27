import start from "../../static/img/windows/start.png"
import startHover from "../../static/img/windows/start-hover.png"
import startActive from "../../static/img/windows/start-active.png"
import taskbarImg from "../../static/img/windows/taskbar.png"
import iconbar from "../../static/img/windows/iconbar.png"

const Taskbar = ({ time }) => (
  <div className="taskbar-root">
    <div className="start">
      <img
        alt="Start menu button: normal state"
        className="normal"
        src={start}
      />
      <img
        alt="Start menu button: hover state"
        className="hover"
        src={startHover}
      />
      <img
        alt="Start menu button: active state"
        className="active"
        src={startActive}
      />
    </div>
    <img className="taskbar" src={taskbarImg} alt="Taskbar" />
    <img className="iconbar" src={iconbar} alt="Iconbar" />
    <div className="volume-icon-tooltip" title="Volume" />
    <span className="clock">{time}</span>
    <style jsx>{`
      .taskbar-root {
        position: absolute;
        bottom: 0;
        display: flex;
        width: 100%;
      }
      .start img {
        display: none;
        width: 109px;
        height: 30px;
      }
      .start .normal {
        display: block;
      }
      .start:hover .normal,
      .start:active .normal,
      .start:hover:active .hover {
        display: none;
      }
      .start:hover .hover {
        display: block;
      }
      .start:active .active {
        display: block;
      }
      .taskbar {
        width: 100%;
      }
      .iconbar {
        width: 102px;
      }
      .volume-icon-tooltip {
        width: 20px;
        height: 20px;
        position: absolute;
        bottom: 5px;
        right: 64px;
      }
      .clock {
        color: white;
        font-size: 12px;
        position: absolute;
        top: 9px;
        right: 10px;
      }
    `}</style>
  </div>
)

export default Taskbar
